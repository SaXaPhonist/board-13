import ScheduleCard from './sheduleCard/ScheduleCard';
import { ScheduleContainer } from './style';

const Schedule = () => {
  return (
    <ScheduleContainer>
      <ScheduleCard />
      <div className="halfhour-container">
        <span className="halfhour">8:00</span>
        <div className="halfhour__line" />
      </div>
      <div className="halfhour-container">
        <span className="halfhour">8:30</span>
        <div className="halfhour__line" />
      </div>
      <div className="halfhour-container">
        <span className="halfhour">9:00</span>
        <div className="halfhour__line" />
      </div>
      <div className="halfhour-container">
        <span className="halfhour">9:30</span>
        <div className="halfhour__line" />
      </div>
      <div className="halfhour-container">
        <span className="halfhour">10:00</span>
        <div className="halfhour__line" />
      </div>
      <div className="halfhour-container">
        <span className="halfhour">10:30</span>
        <div className="halfhour__line" />
      </div>
    </ScheduleContainer>
  );
};

export default Schedule;
