import React from 'react'
import styled from "styled-components";
import { data } from "../interfaces/dealInterface";

const Table = styled.div`
  width: 60%;
  direction: rtl;
  margin-top: 20px;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
`;

const TableCell = styled.div`
  flex-basis: 48%;
  font-weight: bold;
`;

function TableInfo() {
  return (
    <Table>
    <TableRow>
      <TableCell>אורך</TableCell>
      <div>{data.deals[0].length} ס"מ</div>
    </TableRow>
    <TableRow>
      <TableCell>רוחב</TableCell>
      <div>{data.deals[0].width} ס"מ</div>
    </TableRow>
    <TableRow>
      <TableCell>גובה</TableCell>
      <div>{data.deals[0].height} ס"מ</div>
    </TableRow>
    <TableRow>
      <TableCell>חומר פנימי</TableCell>
      <div>{data.deals[0].interiorMaterial}</div>
    </TableRow>
    <TableRow>
      <TableCell>חומר חיצוני</TableCell>
      <div>{data.deals[0].exteriorMaterial}</div>
    </TableRow>
    <TableRow>
      <TableCell>מיקום</TableCell>
      <div>{data.deals[0].location}</div>
    </TableRow>
  </Table>
  )
}

export default TableInfo