import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { indexContext } from '../Context/ContextProvider';

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #D7DBDD;
  width:80%;
  justify-content: center;
`;

const Tab = styled.div<{ isSelected?: boolean }>`
  cursor: pointer;
  padding: 5px 30px;
  color: #16A2D7;
  font-size: 20px;
  text-align: center;
  width: 20%;
  border-bottom: 2px solid transparent;
  ${({ isSelected }) => isSelected && `border-bottom-color: #4EBBE4;`}
`;

const TabComponent: React.FC<{ label: string; isSelected: boolean; onClick: () => void }> = ({ label, isSelected, onClick }) => (
  <Tab isSelected={isSelected} onClick={onClick}>
    {label}
  </Tab>
);

const Tabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const context  = useContext(indexContext)
  if(!context)return null
  const{index , setIndex} = context
  const handleTabClick = (index: number) => {
    setSelectedTab(index);
    setIndex(index);
  };

  return (
    <TabsContainer>
      <TabComponent label="פרטים נוספים" isSelected={selectedTab === 0} onClick={() => handleTabClick(0)} />
      <TabComponent label="פורום מוצר" isSelected={selectedTab === 1} onClick={() => handleTabClick(1)} />
      <TabComponent label="שאלות " isSelected={selectedTab === 2} onClick={() => handleTabClick(2)} />
      <TabComponent label="Tab 4" isSelected={selectedTab === 3} onClick={() => handleTabClick(3)} />
    </TabsContainer>
  );
};

export default Tabs;
