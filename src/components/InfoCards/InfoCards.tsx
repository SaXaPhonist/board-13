import InfoCard from 'components/infoCard/InfoCard';
import Destination from './infoSections/DestinationInfo';
import PeopleInfo from './infoSections/PeopleInfo';
import TravelDate from './infoSections/TravelDate';
import { InfoCardsContainer } from './styles';

const TravelInfo = () => {
  return (
    <InfoCardsContainer className="info-cards">
      <InfoCard>
        <TravelDate />
      </InfoCard>
      <InfoCard>
        <PeopleInfo />
      </InfoCard>
      <InfoCard>
        <Destination />
      </InfoCard>
    </InfoCardsContainer>
  );
};

export default TravelInfo;
