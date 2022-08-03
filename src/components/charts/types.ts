export interface IBubbleChartProps {
  // bubblesData: TypesCharts.Types.Data;
  width: number;
  height: number;
  backgroundColor: string;
  textFillColor: string;
  minValue?: number;
  maxValue?: number;
}

export interface IBubbleChartState {
  dara: ChartTypes.Data | [];
}
