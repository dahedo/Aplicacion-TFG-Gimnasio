import {
  TableRow,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  Collapse,
  IconButton,
  Dialog,
  TextField,
  InputAdornment,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function NutritionistViewWeeklyDiets(props) {
  const numRows = 9;
  const [page, setPage] = React.useState(0);
  const [dailyDietList, setDailyDietList] = useState(props.dailyDietList);
  const [editWeeklyDiet, setEditWeeklyDiet] = useState({
    open: false,
    selectedDiet: {
      nombre: "",
      alimentacionDiariaDietas: [],
    },
  });
  const [enableBusqueda, setEnableBusqueda] = useState({
    enable: false,
    day: null,
  });

  useEffect(() => {
    setDailyDietList(props.dailyDietList);
  }, [props.dailyDietList]);

  const filtrar = (e) => {
    const filteredData = props.dailyDietList.filter((data) =>
      data.nombre.toUpperCase().includes(e.target.value.toUpperCase())
    );

    setDailyDietList(filteredData);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleClickOpen = (row) => {
    setEditWeeklyDiet({
      open: true,
      selectedDiet: {
        nombre: row.nombre,
        alimentacionDiariaDietas: row.alimentacionDiariaDietas,
      },
    });
  };
  const handleCloseEditDialog = () => {
    setEditWeeklyDiet({
      open: false,
      selectedDiet: {
        nombre: "",
        alimentacionDiariaDietas: [],
      },
    });
  };
  const handleCloseFindDialog = () => {
    setEnableBusqueda({ ...enableBusqueda, open: false });
  };

  const search = (day) => {
    setEnableBusqueda({ ...enableBusqueda, open: true, day: day });
  };

  const seleccionarDieta = (row, day, e) => {
    let newDieta = editWeeklyDiet.selectedDiet;
    const newArr = newDieta.alimentacionDiariaDietas.map((obj) => {
      if (obj.diaSemana === day) {
        return { alimentacionDiaria: row, diaSemana: day };
      }
      return obj;
    });
    setEditWeeklyDiet({
      open: true,
      selectedDiet: {
        nombre: editWeeklyDiet.selectedDiet.nombre,
        alimentacionDiariaDietas: newArr,
      },
    });

    setEnableBusqueda({
      enable: false,
      day: null,
    });
  };
  const deleteRow = (day) => {
    const newArr = editWeeklyDiet.selectedDiet.alimentacionDiariaDietas.map(
      (obj) => {
        if (obj.diaSemana === day) {
          return { alimentacionDiaria: null, diaSemana: day };
        }
        return obj;
      }
    );
    setEditWeeklyDiet({
      open: true,
      selectedDiet: {
        nombre: editWeeklyDiet.selectedDiet.nombre,
        alimentacionDiariaDietas: newArr,
      },
    });
  };

  return (
    <Paper
      elevation={3}
      style={{
        height: "calc(100% - 93px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px 20px 10px 20px",
        marginTop: "3px",
      }}
    >
      <TableContainer
        style={{
          height: "calc(100% - 60px)",
          borderRadius: "4px",
          border: " 1px solid rgba(224, 224, 224, 1) ",
        }}
      >
        <Table
          style={
            props.weeklyDietList.slice(page * numRows, page * numRows + numRows)
              .length === numRows
              ? { height: "100%" }
              : { height: "auto" }
          }
          aria-label="simple table"
        >
          <TableBody>
            {props.weeklyDietList
              .slice(page * numRows, page * numRows + numRows)
              .map((row) => (
                <DayOfWeekRow
                  key={row.id}
                  row={row}
                  handleClickOpen={handleClickOpen}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[]}
        count={props.weeklyDietList.length}
        rowsPerPage={numRows}
        page={page}
        onPageChange={handleChangePage}
      />
      {/* PopUp Edicion de dietas semanales */}
      <Dialog fullWidth={true} maxWidth={"lg"} open={editWeeklyDiet.open}>
        <Paper style={{ padding: "20px 20px 10px 20px" }}>
          <TableContainer
            style={{
              borderRadius: "4px",
              border: " 1px solid rgba(224, 224, 224, 1) ",
              height: "388px",
            }}
          >
            <Table style={{ height: "100%" }} aria-label="collapsible table">
              <TableBody>
                {editWeeklyDiet.selectedDiet.alimentacionDiariaDietas
                  .sort((a, b) =>
                    a.diaSemana > b.diaSemana
                      ? 1
                      : b.diaSemana > a.diaSemana
                      ? -1
                      : 0
                  )
                  .map((row) => (
                    <RowEditDialogTable
                      key={row.id}
                      row={row}
                      search={search}
                      seleccionarDieta={seleccionarDieta}
                    />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Button style={{ margin: "10px 5px 5px 5px" }} variant="contained">
              Guardar
            </Button>
            <Button
              onClick={handleCloseEditDialog}
              style={{ margin: "10px 0px 5px 5px" }}
              variant="contained"
            >
              cancelar
            </Button>
          </div>
        </Paper>
      </Dialog>
      {/* PopUp seleccion de dieta diaria */}
      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={enableBusqueda.open}
        onClose={handleCloseFindDialog}
      >
        <Paper style={{ height: "600px", padding: "20px 20px 20px 20px" }}>
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
                  <InputAdornment position="start">
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
              height: "calc(100% - 60px)",
            }}
          >
            <TableContainer
              style={{
                height: "calc(100% - 70px)",
                borderRadius: "4px",
                border: " 1px solid rgba(224, 224, 224, 1) ",
              }}
            >
              <Table
                style={
                  dailyDietList.slice(page * numRows, page * numRows + numRows)
                    .length === numRows
                    ? { height: "100%" }
                    : { height: "auto" }
                }
                aria-label="simple table"
              >
                <TableBody>
                  {dailyDietList
                    .slice(page * numRows, page * numRows + numRows)
                    .map((row) => (
                      <RowSearchDialog
                        seleccionarDieta={seleccionarDieta}
                        key={row.name}
                        row={row}
                        enableBusqueda={enableBusqueda}
                      />
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              style={{ marginRight: 0 }}
              rowsPerPageOptions={[]}
              component="div"
              count={dailyDietList.length}
              rowsPerPage={numRows}
              page={page}
              onPageChange={handleChangePage}
            />
          </div>
        </Paper>
      </Dialog>
    </Paper>
  );
}

export default NutritionistViewWeeklyDiets;

const semana = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

function DayOfWeekRow(props) {
  const [open, setOpen] = React.useState(false);
  const { row, handleClickOpen } = props;

  return (
    <>
      <TableRow>
        <TableCell style={{ padding: "7px", width: "60px" }}>
          {row.alimentacionDiariaDietas.length !== 0 ? (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          ) : null}
        </TableCell>

        <TableCell style={{ padding: "7px" }}>{row.nombre}</TableCell>
        <TableCell style={{ padding: "7px" }} align="right">
          <Button onClick={() => handleClickOpen(row)}>
            <EditIcon fontSize="small" /> Editar
          </Button>
        </TableCell>
      </TableRow>
      {open && row.alimentacionDiariaDietas !== [] ? (
        <TableRow style={{ backgroundColor: "rgba(224, 224, 224, 1)" }}>
          <TableCell style={{ padding: "7px" }} colSpan={4}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table component={Paper} size="small" style={{ width: "100%" }}>
                <TableBody>
                  {row.alimentacionDiariaDietas
                    .sort((a, b) =>
                      a.diaSemana > b.diaSemana
                        ? 1
                        : b.diaSemana > a.diaSemana
                        ? -1
                        : 0
                    )
                    .map((alimentacionDiaria) => (
                      <DailyDietRow row={alimentacionDiaria} />
                    ))}
                </TableBody>
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      ) : null}
    </>
  );
}

function DailyDietRow(props) {
  const [open, setOpen] = React.useState(false);
  const { row, handleClickOpen } = props;
  return (
    <>
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
        <TableCell style={{ padding: "7px" }}>
          {semana[row.diaSemana - 1]}
        </TableCell>
        <TableCell style={{ padding: "7px" }}>
          {row.alimentacionDiaria.nombre}
        </TableCell>
      </TableRow>
      {open ? (
        <TableRow style={{ backgroundColor: "rgba(224, 224, 224, 1)" }}>
          <TableCell style={{ padding: "7px" }} colSpan={4}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table component={Paper} size="small" style={{ width: "100%" }}>
                {Object.entries(row.alimentacionDiaria).map(([key, value]) =>
                  key !== "nombre" &&
                  key !== "id" &&
                  value !== "" &&
                  value !== null ? (
                    <TableRow key={key}>
                      <TableCell style={{ padding: "7px" }}>{key}</TableCell>
                      <TableCell style={{ padding: "7px" }}>{value}</TableCell>
                    </TableRow>
                  ) : null
                )}
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      ) : null}
    </>
  );
}

function RowEditDialogTable(props) {
  const { row, search } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell style={{ padding: "7px", width: "60px" }}>
          {row.alimentacionDiaria ? (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          ) : null}
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          style={{ padding: "7px", width: "100px" }}
        >
          {semana[row.diaSemana - 1]}
        </TableCell>
        <TableCell style={{ padding: "7px" }}>
          {row.alimentacionDiaria?.nombre}
        </TableCell>
        <TableCell style={{ padding: "7px" }} align="right">
          {row.alimentacionDiaria?.nombre ? (
            <Button
              onClick={() => props.seleccionarDieta(null, row.diaSemana)}
              variant="outlined"
            >
              <ClearIcon fontSize="small" />
            </Button>
          ) : (
            <Button
              onClick={() => search(row.diaSemana)}
              id={row.diaSemana}
              variant="outlined"
            >
              <SearchIcon fontSize="small" />
            </Button>
          )}
        </TableCell>
      </TableRow>
      {open ? (
        <TableRow style={{ backgroundColor: "rgba(224, 224, 224, 1)" }}>
          <TableCell colSpan={4}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table
                component={Paper}
                size="small"
                aria-label="purchases"
                style={{ width: "100%" }}
              >
                <TableBody>
                  {row.alimentacionDiaria !== null
                    ? Object.entries(row.alimentacionDiaria).map(
                        ([key, value]) =>
                          key !== "nombre" &&
                          key !== "id" &&
                          value !== "" &&
                          value !== null ? (
                            <TableRow key={key}>
                              <TableCell>{key}</TableCell>
                              <TableCell>{value}</TableCell>
                            </TableRow>
                          ) : null
                      )
                    : null}
                </TableBody>
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      ) : null}
    </React.Fragment>
  );
}

function RowSearchDialog(props) {
  const { row } = props;
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
        <TableCell style={{ padding: "7px" }}>{row.nombre}</TableCell>
        <TableCell style={{ padding: "7px", width: "60px" }} align="right">
          <Button
            onClick={(e) =>
              props.seleccionarDieta(row, props.enableBusqueda.day, e)
            }
            variant="outlined"
          >
            <AddIcon />
          </Button>
        </TableCell>
      </TableRow>
      {open ? (
        <TableRow style={{ backgroundColor: "rgba(224, 224, 224, 1)" }}>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table component={Paper} size="small" aria-label="purchases">
                <TableBody>
                  {Object.entries(row).map(([key, value]) =>
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
