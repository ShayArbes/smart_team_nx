// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import { Button, CardContent, List, Table, TableRow, Typography, TableCell, ListItem, ListItemText, Grid, Tooltip, Fab, Stack, Rating, IconButton, CardActionArea, Box } from "@mui/material";
// import { useSelector } from "react-redux";
// import { Deal, data } from "../interfaces/dealInterface";
// import { useState } from "react";
// import { LinearProgress } from "@mui/material";
// import moment from "moment";
// const DealInfo = () => {
//   const currentDate = moment();
//   const endDate = moment(data.deals[0].endDate);
//   let daysRemaining = endDate.diff(currentDate, "days");
//   daysRemaining = daysRemaining < 1 ? 0 : daysRemaining;

//   return (
//     <div>
//       <Box sx={{ direction: "rtl" }}>
//         <Card
//           sx={{
//             borderRadius: 2,
//             boxShadow: 2,
//             display: "flex",
//             justifyContent: "center",
//             flexWrap: "wrap",
//             paddingTop: { lg: 10, xs: "70px" },
//           }}
//         >
//           <CardMedia component="img" sx={{ width: { lg: "30vw", xs: "95vw" }, borderRadius: 2, marginBottom: 2 }} width={1000} image={data.deals[0].pictures[0].imgUrl} alt="product images" />
//           <CardContent sx={{ width: { lg: "30vw", xs: "95vw" }, p: 3, pt: 2 }}>
//             <Typography variant="h5">{data.deals[0].productName}</Typography>
//             <Typography paddingTop={5} paddingBottom={5} variant="body1" width={"100%"}>
//               {data.deals[0].description}
//             </Typography>
//             <Box display="flex" alignItems="center">
//               <Box width="100%" mr={1}>
//                 <LinearProgress sx={{ width: "100vw%" }} variant="determinate" value={75} />
//               </Box>
//               <Box minWidth={35}>
//                 <Typography variant="body2" color="textSecondary">{`${Math.round(75)}%`}</Typography>
//               </Box>
//             </Box>
//             <Stack paddingTop={1} paddingBottom={5} direction="row" alignItems="center" justifyContent="space-between" mt={1}>
//               <Box sx={{ textAlign: "center" }}>
//                 <Typography sx={{ fontWeight: "1000", fontSize: "18px" }} variant="body1">
//                   {data.deals[0].amount.current}
//                 </Typography>
//                 <Typography variant="body1">{"שותפים"}</Typography>
//               </Box>
//               <Box sx={{ textAlign: "center" }}>
//                 <Typography sx={{ fontWeight: "1000", fontSize: "18px" }} variant="body1">
//                   {daysRemaining}
//                 </Typography>
//                 <Typography variant="body1">{"ימים נותרו"}</Typography>
//               </Box>
//               <Box sx={{ textAlign: "center" }}>
//                 <Typography sx={{ fontWeight: "1000" }} variant="h6">
//                   ₪{data.deals[0].priceOffers[0].price}
//                 </Typography>
//                 <Typography variant="body1">{"מחיר נוכחי"}</Typography>
//               </Box>
//             </Stack>
//             <Button sx={{ width: "100%" }} variant="contained" disableElevation>
//               להצטרפות
//             </Button>
//           </CardContent>
//         </Card>
//         <Box width={50}>
//           <Table>
//             <TableRow>
//               <TableCell>אורך</TableCell>
//               <TableCell>{data.deals[0].length} ס"מ</TableCell>
//             </TableRow>

//             <TableRow>
//               <TableCell>רוחב</TableCell>
//               <TableCell>{data.deals[0].width} ס"מ</TableCell>
//             </TableRow>

//             <TableRow>
//               <TableCell>גובה</TableCell>
//               <TableCell>{data.deals[0].height} ס"מ</TableCell>
//               </TableRow>
//               <TableRow>
//               <TableCell>חומר פנימי</TableCell>
//               <TableCell>{data.deals[0].interiorMaterial}</TableCell>
//             </TableRow>

//             <TableRow>
//               <TableCell>חומר חיצוני</TableCell>
//               <TableCell>{data.deals[0].exteriorMaterial}</TableCell>
//             </TableRow>

//             <TableRow>
//               <TableCell>מיקום</TableCell>
//               <TableCell>{data.deals[0].location}</TableCell>
//             </TableRow>
//           </Table>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default DealInfo;

import React, { useContext } from "react";
import styled from "styled-components";
import moment from "moment";
import { data } from "../interfaces/dealInterface";
import Tabs from "../components/Tabs";
import { indexContext } from "../Context/ContextProvider";
import TableInfo from "../components/TableInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  font-family: sans-serif;
  direction: rtl;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  padding-top: 10px;

  @media (min-width: 600px) {
    padding-top: 70px;
  }
`;

const Image = styled.img`
  width: 40vw;
  border-radius: 10px;
  margin-bottom: 2px;

  @media (max-width: 600px) {
    width: 95vw;
  }
`;

const Content = styled.div`
  display: flex;
  width: 40vw;
  padding: 2px 0px 0px 16px;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 95vw;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 12px;
  margin-bottom: 16px;
  background: #00000036;
  border-radius: 2px;
  & > div {
    width: 50%;
    height: 11px;
    background: #0077e6;
    border-radius: 2px;
  }
`;

export const InfoStack = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  padding: 0px 23px;
`;

export const InfoBox = styled.div`
  text-align: center;
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
`;

export const StyledTypography = styled.div`
  font-weight: 1000;
  font-size: 25px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const ContainerProgressBar = styled.div`
    padding: 0px 23px;
    margin-top: 2rem;
`;

export const Buttonq = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 5px;
  margin-top: 43px;
  margin-bottom: 0;
  padding: 0;
  color: #fff;
  background-color: #536dfe;
  font-size: 17px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #0d2660;
  }
`;

const DealInfo = () => {
  const currentDate = moment();
  const endDate = moment(data.deals[0].endDate);
  let daysRemaining = endDate.diff(currentDate, "days");
  daysRemaining = daysRemaining < 1 ? 0 : daysRemaining;
  const context = useContext(indexContext);
  if (!context) return null;
  const { index } = context;
  console.log(index);

  return (
    <Container>
      <Card>
        <Content>
          <div>
            <h1>{data.deals[0].productName}</h1>
            <h3>{data.deals[0].description}</h3>
          </div>
          <ContainerProgressBar >
            <ProgressBar>
              <div></div>
            </ProgressBar>
          </ContainerProgressBar>

          <InfoStack>
            <InfoBox>
              <StyledTypography>
                {data.deals[0].amount.current}
              </StyledTypography>
              <div>שותפים</div>
            </InfoBox>
            <InfoBox>
              <StyledTypography>{daysRemaining}</StyledTypography>
              <div>ימים נותרו</div>
            </InfoBox>
            <InfoBox>
              <StyledTypography>
                ₪{data.deals[0].priceOffers[0].price}
              </StyledTypography>
              <div>מחיר נוכחי</div>
            </InfoBox>
          </InfoStack>

          <Buttonq>להצטרפות</Buttonq>
        </Content>
        <Image src={data.deals[0].pictures[0].imgUrl} alt="product images" />
      </Card>
      <TableContainer>
        <Tabs />
        <TableInfo />
      </TableContainer>
    </Container>
  );
};

export default DealInfo;
