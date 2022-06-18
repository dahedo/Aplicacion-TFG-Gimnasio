import {
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";

import SearchIcon from "@mui/icons-material/Search";
function NutritionistAssignedClients(props) {
  const numRows = 13;
  const [page, setPage] = React.useState(0);
  const [nutritionistClients, setNutritionistClients] = React.useState(
    props.nutritionistProfile.clientes
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const maxDate = (arr) => {
    new Date(
      Math.max(
        ...arr.map((element) => {
          return new Date(element.date);
        })
      )
    );
  };
  return (
    <Paper elevation={3} style={{ height: "100%" }}>
      <div
        style={{
          height: "60px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <TextField
          //   onChange={filtrar}
          style={{ margin: "10px 10px 10px 10px" }}
          size="small"
          label="Buscar nombre"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          margin: "0px 10px 10px 10px",
          height: "calc(100% - 60px)",
        }}
      >
        <TableContainer style={{ height: "calc(100% - 70px)" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#1976d2" }}>
                <TableCell
                  style={{ padding: "7px", color: "white" }}
                  align="left"
                >
                  Nonbre
                </TableCell>
                <TableCell style={{ padding: "7px", color: "white" }}>
                  Apellidos
                </TableCell>

                <TableCell
                  style={{ padding: "7px", color: "white", width: "150px" }}
                >
                  Estado
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {nutritionistClients.map((row) => (
                <TableRow
                  key={row.nombre}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell style={{ padding: "7px" }}>{row.nombre}</TableCell>
                  <TableCell style={{ padding: "7px" }}>
                    {row.apellidos}
                  </TableCell>

                  <TableCell style={{ padding: "7px" }}>
                    {console.log(row)}
                    {console.log("row.revisiones.length === 0  ")}
                    {console.log(row.revisiones.length === 0)}
                    {console.log("row.fechaAsignacionDieta === null  ")}
                    {console.log(row.fechaAsignacionDieta === null)}
                    {row.revisiones === [] && row.fechaAsignacionDieta === null
                      ? "sin revisar"
                      : "revisado"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          style={{ marginRight: 0 }}
          rowsPerPageOptions={[]}
          component="div"
          count={nutritionistClients.length}
          rowsPerPage={numRows}
          page={page}
          onPageChange={handleChangePage}
        />
      </div>

      {/* <Dialog onClose={handleClose} open={enableImage}>
      <img src={imageToShow} alt="alternatetext" />
    </Dialog> */}
    </Paper>
  );
}

export default NutritionistAssignedClients;
