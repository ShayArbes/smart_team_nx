import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5%;
`;

export const TextContainer = styled.div`
  width: 50%;
  text-align: center;
`;

export const StyledTypography = styled.h4`
  direction: rtl;
  color: white;
  position: absolute;
  width: 44%;
  font-size: 3vw;
  top: 150px;
  right: 6%;
  @media (max-width: 768px) {
    font-size: 7vw;
    width: 90%;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.button`
  font-size: 30px;
  padding: 1% 6vw;
  margin: 25px;
  border: 1px;
  border-radius: 25px;
  background: #d87d0c;
  &:hover {
    transition-duration: 0.4s;
    background: #d87c0c8f;
    cursor: pointer;
  }
  color: white;
  cursor: pointer;
`;
export const Img = styled.img`
  position: absolute;
  top: 172px;
  left: 6%;
  width: 38%;
  z-index: -1;
  @media (max-width: 768px) {
    display: none;
  }
`;
