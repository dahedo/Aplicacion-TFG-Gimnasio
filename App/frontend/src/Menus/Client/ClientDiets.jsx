import {
  Button,
  Collapse,
  Dialog,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import defaultDiets from "../../Data/defaultDiets.json";
import React, { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ClientDiets(props) {
  const numRows = 7;
  const [page, setPage] = React.useState(0);
  const [dialogEnabled, setDialogEnabled] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const openDialog = (e) => {
    e.preventDefault();
    setDialogEnabled(true);
  };
  const handleClose = (e) => {
    e.preventDefault();
    setDialogEnabled(false);
  };

  return (
    <div style={{ height: "100%" }}>
      <Paper elevation={3} style={{ height: "100%" }}>
        <TableContainer>
          <Table
            aria-label="simple table"
            style={{ margin: "10px 10px 10px 10px " }}
          >
            <TableHead>
              <TableRow style={{ backgroundColor: "#1976d2" }}>
                <TableCell style={{ color: "white" }} colSpan={6}>
                  Dieta asignada a mi
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Mi dieta</TableCell>
              </TableRow>
            </TableBody>
            <TableHead>
              <TableRow style={{ backgroundColor: "#1976d2" }}>
                <TableCell style={{ color: "white" }} colSpan={6}>
                  Dietas genericas
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {defaultDiets
                .slice(page * numRows, page * numRows + numRows)
                .map((diet) => {
                  return <CustomRow diet={diet} />;
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          style={{ marginRight: 0 }}
          rowsPerPageOptions={[]}
          component="div"
          count={defaultDiets.length}
          rowsPerPage={numRows}
          page={page}
          onPageChange={handleChangePage}
        />
      </Paper>
    </div>
  );
}

export default ClientDiets;

function CustomRow(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell style={{ padding: "7px", width: "60px" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{props.diet.nombre}</TableCell>
      </TableRow>
      {open ? (
        <TableRow style={{ backgroundColor: "rgba(224, 224, 224, 1)" }}>
          <TableCell colSpan={4}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table component={Paper} size="small" style={{ width: "100%" }}>
                <TableBody>
                  {Object.entries(props.diet).map(([key, value]) =>
                    key !== "nombre" &&
                    key !== "id" &&
                    value !== "" &&
                    value !== null ? (
                      <TableRow key={key}>
                        <TableCell>{key}</TableCell>
                        <TableCell>{value}</TableCell>
                      </TableRow>
                    ) : null
                  )}
                </TableBody>
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      ) : null}
    </React.Fragment>
  );
}
