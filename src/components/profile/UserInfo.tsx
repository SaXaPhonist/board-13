import userPhoto from 'assets/images/IMG_2688.jpg';
import { StyledBadge, StyledUsername, UserInfoContainer, StyledMuiAvatar } from './styles';

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <StyledUsername>Nick McMilan</StyledUsername>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <StyledMuiAvatar sx={{ width: 48, height: 48 }} alt="user profile avatar" src={userPhoto} />
      </StyledBadge>
    </UserInfoContainer>
  );
};

export default UserInfo;
