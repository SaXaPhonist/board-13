import CurrentWeather from './CurrentWeather';
import WidgetSettings from './WidgetSettings';

const WeatherWidget = () => {
  return (
    <>
      <div>
        <img alt="weather" src="" />
        <CurrentWeather />
        <WidgetSettings />
      </div>
      <ul>
        <li className="Mn">
          <img alt="weather" src="" />
          <span />
          <span />
        </li>
        <li className="Ty">
          <img alt="weather" src="" />
          <span />
          <span />
        </li>
        <li className="We">
          <img alt="weather" src="" />
          <span />
          <span />
        </li>
        <li className="Th">
          <img alt="weather" src="" />
          <span />
          <span />
        </li>
        <li className="Fr">
          <img alt="weather" src="" />
          <span />
          <span />
        </li>
      </ul>
    </>
  );
};

export default WeatherWidget;
