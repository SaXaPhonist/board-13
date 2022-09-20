import { Avatar, AvatarGroup } from '@mui/material';
import AddButtonCircle from 'components/button/addButton/AddButtonCircle';
import UserAvatar1 from 'assets/images/user-photo-1.jpg';
import UserAvatar2 from 'assets/images/user-photo-2.jpg';
import { PeopleInfoContainer } from './styles';

const MAX_GROUP_AVATAR = 2;

const Peopleinfo = () => (
  <PeopleInfoContainer>
    <AvatarGroup max={MAX_GROUP_AVATAR} className="avatar-group">
      <Avatar alt="Remy Sharp" src={UserAvatar1} />
      <Avatar alt="Travis Howard" src={UserAvatar2} />
    </AvatarGroup>
    <div className="names-group">
      <span>Alex</span>
      <span>,</span>
      <span>Tayler</span>
    </div>
    <AddButtonCircle />
  </PeopleInfoContainer>
);

export default Peopleinfo;
