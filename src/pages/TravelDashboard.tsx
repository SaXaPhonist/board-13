import TripSection from 'components/tripSection/TripSection';
import TimelineSection from 'components/timelineSection/TimelineSections';
import { DashboardWrapper } from './styles';

const TravelDashboard = () => {
  return (
    <DashboardWrapper>
      <TripSection />
      <TimelineSection />
    </DashboardWrapper>
  );
};

export default TravelDashboard;
