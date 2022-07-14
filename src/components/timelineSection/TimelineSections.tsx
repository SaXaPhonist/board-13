import Calendar from 'components/calendar/Calendar';
import Schedule from 'components/schedule/Schedule';
import AddEvent from './AddEvent';

const TimelineSection = () => {
  return (
    <>
      <AddEvent />
      <Calendar />
      <Schedule />
    </>
  );
};

export default TimelineSection;
