import CompassImg from 'assets/images/Compass.svg';
import { CurrentTempretureContainer } from './styles';

const CurretWeather = () => {
  return (
    <CurrentTempretureContainer>
      <span className="current-temp">30</span>
      <div className="location-wrapper">
        <img alt="location" src={CompassImg} />
        <span className="loacation-wrapper__city">Rome</span>
      </div>
    </CurrentTempretureContainer>
  );
};

export default CurretWeather;
