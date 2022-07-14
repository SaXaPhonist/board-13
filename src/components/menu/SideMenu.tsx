import { Button } from '@mui/material';
import Logo from 'components/logo/Logo';
import WeatherWidget from 'components/weatherWidget/weatherWidget';

const SideMenu = () => {
  return (
    <div className="side-menu">
      <Logo />
      <Button />
      <ul>
        <li>Home</li>
        <li>All trips</li>
        <li>travels</li>
        <li>Rooms</li>
        <li>Transport</li>
        <li>Attractions</li>
      </ul>
      <WeatherWidget />
      <section className="support">
        <img alt="ask question for help" src="" />
        <div>Support</div>
      </section>
    </div>
  );
};

export default SideMenu;
