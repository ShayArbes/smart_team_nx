import styled from 'styled-components';

// Define styled components
export const NavbarContainer = styled.div`
  z-index: 8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  top: 0;
  position: sticky;
  background-color: #333333e3;
  color: white;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconButton = styled.button`
  margin-left: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: white;
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;
