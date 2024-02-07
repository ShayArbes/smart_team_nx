import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
`;

const Dropbtn = styled.button`
  background-color: #04AA6D;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
`;

const Dropdown = styled.div`

  display: inline-block;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 100%; /* Set the minimum width to 100% */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  left: 0; /* Set left to 0 to occupy the entire row */
`;

const DropdownLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #ddd;
  }
`;

const StyledDropdown = styled(Dropdown)`
  &:hover ${DropdownContent} {
    display: block;
    width: 1000px;
    position: absolute;
    right: 100px;
  }

  &:hover ${Dropbtn} {
    background-color: #3e8e41;
  }
`;

const HoverableDropdown: React.FC = () => {
  return (
    <Container>
      <h2>Hoverable Dropdown</h2>
      <p>Move the mouse over the button to open the dropdown menu.</p>

      <StyledDropdown>
        <Dropbtn>Dropdown</Dropbtn>
        <DropdownContent>
          <DropdownLink href="#">Link 1</DropdownLink>
          <DropdownLink href="#">Link 2</DropdownLink>
          <DropdownLink href="#">Link 3</DropdownLink>
        </DropdownContent>
      </StyledDropdown>
      <StyledDropdown>
        <Dropbtn>Dropdown</Dropbtn>
        <DropdownContent>
          <DropdownLink href="#">Link 4</DropdownLink>
          <DropdownLink href="#">Link 5</DropdownLink>
          <DropdownLink href="#">Link 6</DropdownLink>
        </DropdownContent>
      </StyledDropdown>
      <StyledDropdown>
        <Dropbtn>Dropdown</Dropbtn>
        <DropdownContent>
          <DropdownLink href="#">Link 7</DropdownLink>
          <DropdownLink href="#">Link 8</DropdownLink>
          <DropdownLink href="#">Link 9</DropdownLink>
        </DropdownContent>
      </StyledDropdown>
      <StyledDropdown>
        <Dropbtn>Dropdown</Dropbtn>
        <DropdownContent>
          <DropdownLink href="#">Link 1</DropdownLink>
          <DropdownLink href="#">Link 2</DropdownLink>
          <DropdownLink href="#">Link 3</DropdownLink>
        </DropdownContent>
      </StyledDropdown>
      {/* Repeat for other dropdowns */}
    </Container>
  );
};

export default HoverableDropdown;
