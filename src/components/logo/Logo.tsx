import image from 'assets/images/Vector.png';
import { AppTitle, LogoImage, LogoWrapper } from './styles';

const Logo = () => (
  <LogoWrapper>
    <LogoImage src={image} alt="app logo" />
    <AppTitle>TripTip</AppTitle>
  </LogoWrapper>
);

export default Logo;
