import MoreButton from 'components/button/moreButton/MoreButton';
import CloudySmall from 'assets/images/Cloudy_small.svg';
import SunnySmall from 'assets/images/Sunny_small.svg';
import StormySmall from 'assets/images/Stormy_small.svg';
import HailSmall from 'assets/images/Hail_day_small.svg';
import CurrentWeatherImg from 'assets/images/Cloudy.png';
import {
  CurrentWeatherContainer,
  DailyWeatherContainer,
  DayWeatherInfo,
  WeatherContainer,
} from './styles';
import CurrentWeather from './CurrentWeather';

const WeatherWidget = () => {
  return (
    <WeatherContainer>
      <CurrentWeatherContainer>
        <img alt="weather" src={CurrentWeatherImg} />
        <CurrentWeather />
        <MoreButton />
      </CurrentWeatherContainer>
      <DailyWeatherContainer>
        <DayWeatherInfo className="Mn">
          <img alt="weather" src={CloudySmall} />
          <span className="daily-temp">30</span>
          <span className="week-day">Mo</span>
        </DayWeatherInfo>
        <DayWeatherInfo className="Ty">
          <img alt="weather" src={SunnySmall} />
          <span className="daily-temp">32</span>
          <span className="week-day">Tu</span>
        </DayWeatherInfo>
        <DayWeatherInfo className="We">
          <img alt="weather" src={HailSmall} />
          <span className="daily-temp">29</span>
          <span className="week-day">We</span>
        </DayWeatherInfo>
        <DayWeatherInfo className="Th">
          <img alt="weather" src={StormySmall} />
          <span className="daily-temp">32</span>
          <span className="week-day">Th</span>
        </DayWeatherInfo>
        <DayWeatherInfo className="Fr">
          <img alt="weather" src={SunnySmall} />
          <span className="daily-temp">30</span>
          <span className="week-day">Fr</span>
        </DayWeatherInfo>
      </DailyWeatherContainer>
    </WeatherContainer>
  );
};

export default WeatherWidget;
