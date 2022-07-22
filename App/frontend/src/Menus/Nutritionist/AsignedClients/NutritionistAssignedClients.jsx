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
  Dialog,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import NutritionistReviewClientDialog from "./NutritionistReviewClientDialog";

function NutritionistAssignedClients(props) {
  const numRows = 6;
  const [page, setPage] = React.useState(0);

  const [enableNewClients, setEnableNewClients] = useState(true);
  const [enableNonReviewedClients, setEnableNonReviewedClients] =
    useState(false);
  const [enableReviewedClients, setEnableReviewedClients] = useState(false);

  const [enableReviewDialog, setEnableReviewDialoge] = React.useState({
    open: false,
    clientToReview: null,
  });

  const changeView = async (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "new-clients":
        setEnableNewClients(true);
        setEnableNonReviewedClients(false);
        setEnableReviewedClients(false);
        break;
      case "non-reviewed-clients":
        setEnableNewClients(false);
        setEnableNonReviewedClients(true);
        setEnableReviewedClients(false);
        break;
      case "reviewed-clients":
        setEnableNewClients(false);
        setEnableNonReviewedClients(false);
        setEnableReviewedClients(true);
        break;
      default:
        break;
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const openReviewDialog = (row) => {
    setEnableReviewDialoge({
      open: true,
      clientToReview: row,
    });
  };

  const handleCloseReviewDialog = () => {
    setEnableReviewDialoge({
      open: false,
      clientToReview: null,
    });
  };

  const selectedClientsByType = () => {
    if (
      enableNewClients &&
      !enableNonReviewedClients &&
      !enableReviewedClients
    ) {
      return props.newClients;
    }
    if (
      !enableNewClients &&
      enableNonReviewedClients &&
      !enableReviewedClients
    ) {
      return props.nonReviewedClients;
    }
    if (
      !enableNewClients &&
      !enableNonReviewedClients &&
      enableReviewedClients
    ) {
      return props.reviewedClients;
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Paper
        elevation={3}
        style={{
          height: "70px",
          minHeight: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          sx={
            enableNewClients
              ? {
                  color: "black !important",
                  backgroundColor: "#B7B7B7 !important",
                }
              : null
          }
          disabled={enableNewClients}
          id="new-clients"
          variant="contained"
          onClick={changeView}
        >
          Clientes nuevos
        </Button>
        <Button
          sx={
            enableNonReviewedClients
              ? {
                  color: "black !important",
                  backgroundColor: "#B7B7B7 !important",
                }
              : null
          }
          disabled={enableNonReviewedClients}
          id="non-reviewed-clients"
          variant="contained"
          onClick={changeView}
        >
          Clientes sin revisar
        </Button>
        <Button
          sx={
            enableReviewedClients
              ? {
                  color: "black !important",
                  backgroundColor: "#B7B7B7 !important",
                }
              : null
          }
          disabled={enableReviewedClients}
          id="reviewed-clients"
          variant="contained"
          onClick={changeView}
        >
          Clientes revisados
        </Button>
      </Paper>

      <Paper
        elevation={3}
        style={{
          height: "calc(100% - 93px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "20px 20px 10px 20px",
          marginTop: "3px",
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
                  Nombre
                </TableCell>
                <TableCell style={{ padding: "7px", color: "white" }}>
                  Apellidos
                </TableCell>

                <TableCell
                  style={{ padding: "7px", color: "white", width: "150px" }}
                />
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedClientsByType().map((row) => (
                <TableRow
                  key={row.nombre}
                  onClick={() => openReviewDialog(row)}
                >
                  <TableCell style={{ padding: "7px" }}>{row.nombre}</TableCell>
                  <TableCell style={{ padding: "7px" }}>
                    {row.apellidos}
                  </TableCell>
                  <TableCell style={{ padding: "7px" }}>
                    <VisibilityIcon></VisibilityIcon>
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
          count={selectedClientsByType().length}
          rowsPerPage={numRows}
          page={page}
          onPageChange={handleChangePage}
        />
      </Paper>

      <NutritionistReviewClientDialog
        weeklyDietList={props.weeklyDietList}
        handleCloseReviewDialog={handleCloseReviewDialog}
        enableReviewDialog={enableReviewDialog}
        setEnableReviewDialoge={setEnableReviewDialoge}
      />
    </div>
  );
}

export default NutritionistAssignedClients;
