import React, { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import {
  IconButton,
  IconsContainer,
  Logo,
  MenuButton,
  NavbarContainer,
} from './Header.style';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle mobile menu
  const handleMobileMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleHomeClick = () => {
    navigate('/');
  };
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <Logo>smart team</Logo>

      <IconsContainer>
        <IconButton onClick={() => {}}>
          <NotificationsIcon sx={{ fontSize: 23, color: 'white' }} />
        </IconButton>
        <IconButton onClick={() => {}}>
          <FavoriteIcon sx={{ fontSize: 23, color: 'white' }} />
        </IconButton>
        <IconButton
          onClick={() => {
            handleHomeClick();
          }}
        >
          <HomeIcon sx={{ fontSize: 23, color: 'white' }} />
        </IconButton>
        <IconButton onClick={() => {}}>
          <AccountCircleIcon />
        </IconButton>
        <MenuButton onClick={handleMobileMenuToggle}>☰</MenuButton>
      </IconsContainer>
    </NavbarContainer>
  );
};

export default Header;
