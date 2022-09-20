import AddButton from 'components/button/addButton/AddButton';
import { TimelineHeaderContainer } from './style';

const TimelineHeader = () => {
  return (
    <TimelineHeaderContainer>
      <h2 className="timeline-header">Timeline</h2>
      <AddButton color="info" className="timeline__add-button">
        Add event
      </AddButton>
    </TimelineHeaderContainer>
  );
};

export default TimelineHeader;
