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
  const [page, setPage] = React.useState(0);
  const [enableImage, setEnableImage] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const ver = async (image) => {
    console.log(image);
    setEnableImage(true);
    setImageToShow(image);
  };

  const handleClose = async (e) => {
    e.preventDefault();
    setEnableImage(false);
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
          margin: "0px 10px 10px 10px",
          height: "calc(100% - 60px)",
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#1976d2" }}>
                <TableCell style={{ color: "white" }} align="left">
                  Nonbre
                </TableCell>
                <TableCell style={{ color: "white" }}>
                  Parte del Cuerpo
                </TableCell>
                <TableCell style={{ color: "white" }}>Grupo muscular</TableCell>
                <TableCell style={{ color: "white" }}>Equipamiento</TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  Imagen
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.exerciseData
                .slice(page * 13, page * 13 + 13)
                .map((row) => (
                  <TableRow
                    key={row.nombre}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="left" style={{ width: "600px" }}>
                      {row.nombre}
                    </TableCell>
                    <TableCell align="left" style={{ width: "150px" }}>
                      {row.parteCuerpo}
                    </TableCell>
                    <TableCell align="left" style={{ width: "150px" }}>
                      {row.grupoMuscular}
                    </TableCell>
                    <TableCell style={{ width: "150px" }}>
                      {row.equipamiento}
                    </TableCell>
                    <TableCell
                      style={{ width: "100px" }}
                      align="center"
                      onClick={() => ver(row.urlImagen)}
                    >
                      Ver
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            style={{ marginRight: 0 }}
            rowsPerPageOptions={[]}
            component="div"
            count={props.exerciseData.length}
            rowsPerPage={13}
            page={page}
            onPageChange={handleChangePage}
          />
        </TableContainer>
      </div>

      <Dialog onClose={handleClose} open={enableImage}>
        <img src={imageToShow} alt="alternatetext" />
      </Dialog>
    </Paper>
  );
}
export default ClientExercisesPanel;
