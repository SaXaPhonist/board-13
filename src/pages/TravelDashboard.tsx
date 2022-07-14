import TimelineSection from 'components/timelineSection/TimelineSections';
import TripSection from 'components/tripSection/TripSection';

const TravelDashboard = () => {
  return (
    <div className="travel-dashboard">
      <TripSection />
      <TimelineSection />
    </div>
  );
};

export default TravelDashboard;
