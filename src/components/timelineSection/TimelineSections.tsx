import Calendar from 'components/calendar/Calendar';
import Schedule from 'components/schedule/Schedule';
import { useState } from 'react';
import { TimelineContainer, CalendarControl } from './style';
import TimelineHeader from './TimelineHeader';

const TimelineSection = () => {
  const [isCalendarOpne, setCalendarIsOpen] = useState(false);

  const handleControlBtn = () => {
    setCalendarIsOpen(true);
  };

  return (
    <>
      <CalendarControl
        className="calendar-control"
        variant="contained"
        color="primary"
        onClick={handleControlBtn}
      >
        Open Calendar
      </CalendarControl>
      <TimelineContainer isTimelineOpen={isCalendarOpne}>
        <TimelineHeader />
        <Calendar />
        <Schedule />
      </TimelineContainer>
    </>
  );
};

export default TimelineSection;
