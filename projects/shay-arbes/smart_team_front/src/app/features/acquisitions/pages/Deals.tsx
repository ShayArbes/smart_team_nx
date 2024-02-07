import React from "react";
import styled from "styled-components";
import { data } from "../interfaces/dealInterface";
import moment from "moment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  ContainerProgressBar,
  InfoBox,
  InfoStack,
  ProgressBar,
} from "./DealInfo";

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Tab = styled.div`
  border: 1px solid #ccc;
  width: 27%;
  margin-top: 60px;
  border-radius: 10px;
  position: relative;
`;
const StyledTypography2 = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;
const SubStyledTypography = styled.p`
  font-size: 11px;
  margin: 0;
`;

const Container = styled.div`
  padding: 10px;
  direction: rtl;
`;
const GroupBtn = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
`;
const Img = styled.img`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
`;
interface Btn {
  backgroundColor?: string;
  fontSize?: string;
  margin?: string;
  backgroundColorHover?: string;
  borderRadius?: string;
  padding?: string;
  colorActive?: string;
}
const Button = styled.button<Btn>`
  background-color: ${({ backgroundColor }) => backgroundColor || "#01a76a"};
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || "0px"};
  color: white;
  padding: ${({ padding }) => padding || "7px 14%"};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${({ fontSize }) => fontSize || "16px"};
  margin: ${({ margin }) => margin || "4px 2px"};
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: ${({ backgroundColorHover }) =>
      backgroundColorHover || "#018856"};
    color: white;
  }
  &:active { 
            box-shadow: box-shadow 
            7px 6px 28px 1px rgba(0, 0, 0, 0.24); 
            transform: translateY(4px); 
            color: ${({ colorActive }) =>
            colorActive || "#727272"};
            transition: 0.4ms;
        } 
`;
const Title = styled.h3`
  font-size: 19px;
  max-height: 48px;
  min-height: 22px;
  padding: 0px 15px 0px;
  line-height: 22px;
  font-weight: bold;
`;
const Description = styled.p`
  font-size: 17px;
  height: 93px; /* Adjusted for three lines */
  padding: 10px 16px;
  line-height: 21px;
  position: relative;
  overflow: hidden;
  overflow-wrap: break-word;
  white-space: pre-line;
  margin-bottom: 2rem;
  /* Apply gradient mask for the fourth line */
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 18px; /* Adjusted for one line */
    background: linear-gradient(transparent, white);
  }
`;

const Deals = () => {
  return (
    <Tabs>
      {data.deals.map((deal) => {
        const currentDate = moment();
        const endDate = moment(data.deals[0].endDate);
        let daysRemaining = endDate.diff(currentDate, "days");
        daysRemaining = daysRemaining < 1 ? 0 : daysRemaining;
        {
          return (
            <Tab key={deal.id}>
              <Img src={deal.pictures[0].imgUrl} alt={deal.productName} />
              <Container>
                <Title>{deal.productName}</Title>
                <Description>{deal.description}</Description>
                <GroupBtn>
                  <Button borderRadius="50px">הצטרפות</Button>
                  <Button borderRadius="50px" colorActive="#ff2020">
                    <FavoriteIcon sx={{ fontSize: "20px" }} />
                  </Button>
                </GroupBtn>
                
                <ContainerProgressBar>
                  <ProgressBar>
                    <div></div>
                  </ProgressBar>
                </ContainerProgressBar>
                <InfoStack>
                  <InfoBox>
                    <StyledTypography2>
                      ₪{deal.priceOffers[0].price}
                    </StyledTypography2>
                    <SubStyledTypography>מחיר נוכחי</SubStyledTypography>
                  </InfoBox>
                  <InfoBox>
                    <StyledTypography2>{daysRemaining}</StyledTypography2>
                    <SubStyledTypography>ימים נותרו</SubStyledTypography>
                  </InfoBox>

                  <InfoBox>
                    <StyledTypography2>{deal.amount.current}</StyledTypography2>
                    <SubStyledTypography>שותפים</SubStyledTypography>
                  </InfoBox>
                </InfoStack>
              </Container>
            </Tab>
          );
        }
      })}
    </Tabs>
  );
};

export default Deals;
