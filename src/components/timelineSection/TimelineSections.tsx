import Calendar from 'components/calendar/Calendar';
import Schedule from 'components/schedule/Schedule';
import { TimelineContainer } from './style';
import TimelineHeader from './TimelineHeader';

const TimelineSection = () => {
  return (
    <TimelineContainer>
      <TimelineHeader />
      <Calendar />
      <Schedule />
    </TimelineContainer>
  );
};

export default TimelineSection;
