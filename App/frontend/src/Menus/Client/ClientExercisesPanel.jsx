import {
  Dialog,
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
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";

function ClientExercisesPanel(props) {
  const numRows = 13;
  const [page, setPage] = React.useState(0);
  const [enableImage, setEnableImage] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  const [ejercicios, setEjercicios] = useState(props.exerciseData);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const ver = async (image) => {
    setEnableImage(true);
    setImageToShow(image);
  };

  const handleClose = async (e) => {
    e.preventDefault();
    setEnableImage(false);
  };

  const filtrar = async (e) => {
    e.preventDefault();
    const filteredData = props.exerciseData.filter((data) =>
      data.nombre.toUpperCase().includes(e.target.value.toUpperCase())
    );

    setEjercicios(filteredData);
    setPage(0);
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
          onChange={filtrar}
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
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#1976d2" }}>
                <TableCell
                  style={{ color: "white", width: "600px" }}
                  align="left"
                >
                  Nonbre
                </TableCell>
                <TableCell style={{ color: "white", width: "150px" }}>
                  Parte del Cuerpo
                </TableCell>
                <TableCell style={{ color: "white", width: "150px" }}>
                  Grupo muscular
                </TableCell>
                <TableCell style={{ color: "white", width: "150px" }}>
                  Equipamiento
                </TableCell>
                <TableCell
                  style={{ color: "white", width: "100px" }}
                  align="center"
                >
                  Imagen
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ejercicios
                .slice(page * numRows, page * numRows + numRows)
                .map((row) => (
                  <TableRow
                    key={row.nombre}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="left">{row.nombre}</TableCell>
                    <TableCell align="left">{row.parteCuerpo}</TableCell>
                    <TableCell align="left">{row.grupoMuscular}</TableCell>
                    <TableCell>{row.equipamiento}</TableCell>
                    <TableCell
                      align="center"
                      onClick={() => ver(row.urlImagen)}
                    >
                      Ver
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
          count={ejercicios.length}
          rowsPerPage={numRows}
          page={page}
          onPageChange={handleChangePage}
        />
      </div>

      <Dialog onClose={handleClose} open={enableImage}>
        <img src={imageToShow} alt="alternatetext" />
      </Dialog>
    </Paper>
  );
}
export default ClientExercisesPanel;
