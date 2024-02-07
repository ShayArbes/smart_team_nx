import styled from 'styled-components';

export const FormContainer = styled.form`
  max-width: 400px;
  margin: 10% auto;
  direction: rtl;
  border: 1px solid;
  padding: 20px;
  border-radius: 10px;
  box-shadow: inset;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 30px;
  padding: 8px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
`;

export const Select = styled.select`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #45a049;
  }
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
