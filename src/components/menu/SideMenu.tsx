import AddButton from 'components/button/addButton/AddButton';
import Logo from 'components/logo/Logo';
import Support from 'components/support/Support';
import WeatherWidget from 'components/widget/WeatherWidget';
import NavigationMenu from './NavigationMenu';

import { SideMenuWrapper } from './styles';

const SideMenu = () => {
  return (
    <SideMenuWrapper className="side-menu">
      <Logo />
      <AddButton className="menu__add-button" color="info" variant="contained">
        Add new
      </AddButton>
      <NavigationMenu />
      <WeatherWidget />
      <Support />
    </SideMenuWrapper>
  );
};

export default SideMenu;
