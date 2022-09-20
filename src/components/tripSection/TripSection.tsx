import ExpensesChart from 'components/charts/ExpensesChart';
import CityControl from 'components/cityControl/CityControl';
import InfoCards from 'components/InfoCards/InfoCards';
import ToDoList from 'components/toDoList/ToDoList';
import Map from 'components/map/Map';
import { TripSectionContainer } from './style';

const TripSection = () => {
  return (
    <TripSectionContainer>
      <CityControl />
      <ExpensesChart width={290} height={280} backgroundColor="#FAF9FF" textFillColor="#fff" />
      <InfoCards />
      <Map lat="41.84" lng=" 12.48" />
      <ToDoList />
    </TripSectionContainer>
  );
};

export default TripSection;
