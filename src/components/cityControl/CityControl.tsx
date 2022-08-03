import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import cityImg from 'assets/images/rome.png';
import { CityContainer, CityImage, ControlsWrapper } from './styles';

const CityControl = () => (
  <CityContainer className="city-control">
    <ControlsWrapper>
      <p className="subtitle">Nearest trip</p>
      <h2 className="city-title">Rome</h2>
      <div className="buttons-container">
        <ArrowBackIcon />
        <ArrowForwardIcon />
      </div>
    </ControlsWrapper>
    <CityImage alt="city" src={cityImg} />
  </CityContainer>
);

export default CityControl;
