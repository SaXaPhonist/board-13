import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import polanFlag from 'assets/images/Poland_Flag.png';
import italyFlag from 'assets/images/Italy_Flag.png';
import { DestinationContainer } from './styles';

const Destination = () => (
  <DestinationContainer>
    <div className="destination-countries">
      <img alt="flag" src={polanFlag} />
      <span className="destination-country">Poland</span>
      <SwapHorizIcon className="destination-swap" />
      <img alt="flag" src={italyFlag} />
      <span className="destination-country">Italy</span>
    </div>
    <div className="flight-duration-wrapper">
      <FlightLandIcon />
      <span className="flight-duration">2h 25min flight</span>
    </div>
  </DestinationContainer>
);

export default Destination;
