import alertImg from 'assets/images/Alert.svg';
import { NotificationButton } from './styles';

const Notifications = () => {
  return (
    <NotificationButton>
      <img alt="notifications" src={alertImg} />
    </NotificationButton>
  );
};

export default Notifications;
