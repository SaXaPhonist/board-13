import ExpensesChart from 'components/charts/ExpensesChart';
import CityControl from 'components/cityControl/CityControl';
import InfoCards from 'components/InfoCards/InfoCards';
import ToDoList from 'components/toDoList/ToDoList';
import Map from 'components/map/Map';

const TripSection = () => {
  return (
    <>
      <CityControl />
      <ExpensesChart />
      <InfoCards />
      <Map />
      <ToDoList />
    </>
  );
};

export default TripSection;
