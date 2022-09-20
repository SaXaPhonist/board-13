import * as d3 from 'd3';
import { SimulationNodeDatum } from 'd3';
import { useCallback, useEffect, useState } from 'react';
import { ChartContainer, LegendItem, Legends } from './style';
import { IBubbleChartProps } from './types';

const dummyData: Readonly<ChartTypes.Data[]> = [
  { id: '1', category: 'transport', value: '20', fillColor: '#02AF72' },
  { id: '2', category: 'hotel', value: '50', fillColor: '#6C50FC' },
  { id: '3', category: 'food', value: '30', fillColor: '#FF742C' },
];

const ExpensesChart = ({ width, height, backgroundColor, textFillColor }: IBubbleChartProps) => {
  const [simData, setSimData] = useState<ChartTypes.ForceDataSimulated[]>([]);
  const [forceData, setForceData] = useState<ChartTypes.Data[] | []>([]);

  const radiusScale = (value: d3.NumberValue) => {
    const fx = d3.scaleSqrt().range([10, 100]).domain([1, 100]);
    return fx(value);
  };

  const simulatePositions = useCallback((data: ChartTypes.Data[]) => {
    d3.forceSimulation()
      .nodes(data as SimulationNodeDatum[])
      .velocityDecay(0.25)
      .force('x', d3.forceX().strength(0.3))
      .force('y', d3.forceY().strength(0.2))
      .force(
        'collide',
        d3.forceCollide((d) => {
          return radiusScale((d as ChartTypes.ForceData).value);
        }),
      )
      .on('tick', () => {
        setSimData(data as unknown as ChartTypes.ForceDataSimulated[]);
      });
  }, []);

  const renderBubbles = (data: ChartTypes.ForceDataSimulated[]) => {
    return data.map((item, index) => {
      const fontSize = radiusScale(item.value) / 4;
      const content = dummyData.length > index ? `${dummyData[index].value}%` : '';
      const strokeColor = dummyData.length > index ? 'white' : 'darkgrey;';
      return (
        <g key={item.id} transform={`translate(${width / 2 + item.x}, ${height / 2 + item.y})`}>
          <circle
            style={{ cursor: 'pointer' }}
            r={radiusScale(item.value)}
            fill={item.fillColor}
            stroke={strokeColor}
            strokeWidth="2"
          />
          <text
            className="bubble-text"
            fill={textFillColor}
            fontSize={`${fontSize}px`}
            textAnchor="middle"
          >
            {content}
          </text>
        </g>
      );
    });
  };

  // const colors = d3
  //   .scaleOrdinal()
  //   .domain(['transport', 'hotel', 'food'])
  //   .range(['#02AF72', '#6C50FC', '#FF742C']);

  // const size = d3
  //   .scaleLinear()
  //   .domain([Number(minValue), Number(maxValue)])
  //   .range([20, 120]);

  const animateBubbles = useCallback(() => {
    if (dummyData.length) {
      simulatePositions(forceData);
    }
  }, [forceData, simulatePositions]);

  useEffect(() => {
    setForceData([...dummyData]);
  }, []);

  useEffect(() => {
    if (forceData.length) {
      animateBubbles();
    }
  }, [animateBubbles, forceData]);

  return (
    <ChartContainer style={{ backgroundColor }}>
      <h3 className="expenses-chart__title">Expenses</h3>
      <svg width={width} height={height}>
        {simData ? renderBubbles(simData) : 'Loading ....'}
      </svg>
      <Legends>
        {dummyData.map((category) => (
          <LegendItem key={category.id} color={category.fillColor}>
            {category.category}
          </LegendItem>
        ))}
      </Legends>
    </ChartContainer>
  );
};
export default ExpensesChart;
