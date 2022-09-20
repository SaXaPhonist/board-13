import { ArrowForward } from '@mui/icons-material';
import MoreButton from 'components/button/moreButton/MoreButton';
import FlightIcon from '@mui/icons-material/Flight';
import { ScheduleCardStyled } from './styles';

const ScheduleCard = () => {
  return (
    <ScheduleCardStyled>
      <div className="schedule__info-card">
        <FlightIcon className="flight-icon" />
        <div>
          <div className="schedule__cities">
            <p>Warshav</p>
            <ArrowForward />
            <p>Rome</p>
          </div>
          <div className="schedule__arriving-time">
            <span>8:00</span>
            <span>-</span>
            <span>9:00</span>
          </div>
        </div>
        <MoreButton />
      </div>
    </ScheduleCardStyled>
  );
};

export default ScheduleCard;
