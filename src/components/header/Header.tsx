import Profile from 'components/profile/Profile';
import Search from 'components/search/Search';
import { HeaderWrapper } from './styles';

const Header = () => {
  return (
    <HeaderWrapper className="header">
      <Search />
      <Profile />
    </HeaderWrapper>
  );
};

export default Header;
