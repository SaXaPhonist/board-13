import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ConnectingAirportsOutlinedIcon from '@mui/icons-material/ConnectingAirportsOutlined';
import BedIcon from '@mui/icons-material/Bed';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MuseumIcon from '@mui/icons-material/Museum';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { NavContainer, NavWrapper } from './styles';

const NavigationMenu = () => (
  <NavWrapper>
    <NavContainer>
      <li>
        <HomeOutlinedIcon className="menu-item-icon" />
        <span>Home</span>
      </li>
      <li>
        <DateRangeIcon className="menu-item-icon" />
        <span>All trips</span>
      </li>
      <li>
        <ConnectingAirportsOutlinedIcon className="menu-item-icon" />
        <span>Travels</span>
      </li>
      <li>
        <BedIcon className="menu-item-icon" />
        <span>Rooms</span>
      </li>
      <li>
        <DirectionsCarIcon className="menu-item-icon" />
        <span>Transport</span>
      </li>
      <li>
        <MuseumIcon className="menu-item-icon" />
        <span>Museum</span>
      </li>
    </NavContainer>
  </NavWrapper>
);

export default NavigationMenu;
