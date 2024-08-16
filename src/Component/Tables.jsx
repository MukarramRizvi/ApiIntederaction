import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

export default function CustomizedTables({ data }) {
  return (
    <TableContainer           sx={{
      backgroundColor: 'black', // Set background color to black
      color: 'white', // Set text color to white

  }} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" sx={{fontSize:22, fontFamily:"sans-serif", fontStyle:"italic"}}>Name</StyledTableCell>
            <StyledTableCell align="center" sx={{fontSize:22, fontFamily:"sans-serif" , fontStyle:"italic"}}>Email</StyledTableCell>
            <StyledTableCell align="center" sx={{fontSize:22, fontFamily:"sans-serif" , fontStyle:"italic"}}>Phone</StyledTableCell>
            <StyledTableCell align="center" sx={{fontSize:22, fontFamily:"sans-serif" , fontStyle:"italic"}}>UserName</StyledTableCell>
            <StyledTableCell align="center" sx={{fontSize:22, fontFamily:"sans-serif" , fontStyle:"italic"}}>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow sx={{  background:'transparent', 
              backdropFilter: 'blur(20px)',}} key={row.name}>
              <StyledTableCell sx={{color:"white"}} align="center">{row.name}</StyledTableCell>
              <StyledTableCell  sx={{color:"white"}} align="center">{row.email}</StyledTableCell>
              <StyledTableCell sx={{color:"white"}} align="center">{row.phone}</StyledTableCell>
              <StyledTableCell sx={{color:"white"}} align="center">{row.username}</StyledTableCell>
              <StyledTableCell sx={{color:"white"}} align="center">
                <DeleteIcon sx={{paddingRight:3 , color: "red" }} />
                <EditIcon sx={{ color: "blue" }} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
