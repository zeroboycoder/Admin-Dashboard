import * as React from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import './table.css'

function createData(
  name: string,
  course: string,
  totalCourse : number,
  date: string,
  payment: string,
) {
  return { name, course, totalCourse, date, payment};
}

const rows = [
  createData("Pyae Sone Khant", "React.js",2, "5 Sep 2022", "Pending"),
  createData("Pyae Sone Khant", "AI",2, "5 Sep 2022", "Complete"),
  createData("Pyae Sone Khant", "React.js",2, "5 Sep 2022", "Pending"),
  createData("Pyae Sone Khant", "Machine Learning",2, "5 Sep 2022", "Pending"),
  createData("Pyae Sone Khant", "AI",2, "5 Sep 2022", "Complete"),
  createData("Pyae Sone Khant", "React.js",2, "5 Sep 2022", "Pending"),
];

const paymentStyle = (status : string) => {
    if(status === "Pending"){
        return {
            color : 'orange',
            border: "1px solid #FF9F29",
            padding : "5px 10px",
            borderRadius: "6px"
        }
    }
    if(status === "Complete"){
        return {
            color : 'green',
            border : '1px solid #59CE8F',
            padding : "5px 10px",
            borderRadius: "6px"
        }
    }
}

export default function BasicTable() {
  return (
    <div className="Table">
      <h2>Recent Students</h2>
      <TableContainer component={Paper} style={{boxShadow: "6px 10px 20px 0 #80808030"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell align="left">Enrolled Courses</TableCell>
              <TableCell align="left">Total Courses</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.course}</TableCell>
                <TableCell align="left">{row.totalCourse}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                    <span style={paymentStyle(row.payment)}>{row.payment}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
