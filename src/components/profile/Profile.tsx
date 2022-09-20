import LangSettings from './LangSettings';
import Notifications from './Notifications';
import { ProfileWrapepr } from './styles';
import UserInfo from './UserInfo';

const Profile = () => {
  return (
    <ProfileWrapepr>
      <LangSettings />
      <Notifications />
      <UserInfo />
    </ProfileWrapepr>
  );
};

export default Profile;
