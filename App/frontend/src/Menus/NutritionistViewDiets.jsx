import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TablePagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

function NutritionistViewDiets(props) {
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Paper
        elevation={3}
        style={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          //   onClick={createDieta}
          id="create-dieta-diaria"
          variant="contained"
        >
          Ver dietas diarias
        </Button>

        <Button
          //   onClick={createDieta}
          id="create-dieta-semanal"
          variant="contained"
        >
          Ver dietas semanales
        </Button>
      </Paper>

      <Paper
        elevation={3}
        style={{
          height: "550px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "10px 20px 10px 20px",
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {props.dailyDietList.slice(page * 9, page * 9 + 9).map((row) => (
                <TableRow>
                  <TableCell>{row.nombre}</TableCell>
                  <TableCell>
                    <Button>
                      <SearchIcon fontSize="small" />
                      {"Ver"}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button>
                      <EditIcon fontSize="small" />
                      {"editar"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TablePagination
              component="div"
              count={props.dailyDietList.length}
              rowsPerPage={9}
              page={page}
              onPageChange={handleChangePage}
            />
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
export default NutritionistViewDiets;
