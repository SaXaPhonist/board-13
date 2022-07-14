import Button from 'components/button/Button';
import Logo from 'components/logo/Logo';
import WeatherWidget from 'components/weatherWidget/weatherWidget';
import NavigationMenu from './NavigationMenu';

import { SideMenuWrapper } from './styles';

const SideMenu = () => {
  return (
    <SideMenuWrapper className="side-menu">
      <Logo />
      <Button />
      <NavigationMenu />
      <WeatherWidget />
      <section className="support">
        <img alt="ask question for help" src="" />
        <div>Support</div>
      </section>
    </SideMenuWrapper>
  );
};

export default SideMenu;
