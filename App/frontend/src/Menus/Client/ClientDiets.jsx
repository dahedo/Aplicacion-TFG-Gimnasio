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

  return (
    <div style={{ height: "613px" }}>
      <Paper
        elevation={3}
        style={{
          height: "100%",
          padding: "10px",
        }}
      >
        <TableContainer>
          <Table aria-label="simple table">
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
          </Table>
        </TableContainer>

        <CustomTable page={page} numRows={numRows} />
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

function CustomTable(props) {
  const { page, numRows } = props;
  return (
    <TableContainer style={{ height: "450px" }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell
              style={{ color: "white", backgroundColor: "#1976d2" }}
              colSpan={6}
            >
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
  );
}

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
