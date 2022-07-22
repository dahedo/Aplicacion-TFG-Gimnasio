import {
  Dialog,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import WeeklyDiet from "../ViewDiet/WeeklyDiet";
function NutritionistDialogSelectWDiet(props) {
  const numRows = 9;
  const [page, setPage] = React.useState(0);

  const handleClose = () => {
    props.setOpenSelectDietDialog(false);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const selectWDiet = (row) => {
    let mydata = { ...props.enableReviewDialog };
    mydata.clientToReview.dieta = row;
    props.setEnableReviewDialoge(mydata);
    props.setOpenSelectDietDialog(false);
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"xl"}
      onClose={handleClose}
      open={props.open}
    >
      <Paper style={{ height: "680px", padding: "10px 20px 10px 20px" }}>
        <div
          style={{
            height: "60px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <TextField
            // onChange={filtrar}
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
        <div>
          <TableContainer
            style={{
              marginTop: "5px",
              borderRadius: "4px",
              border: " 1px solid rgba(224, 224, 224, 1) ",
              height: "550px",
            }}
          >
            <Table>
              <TableBody>
                {props.weeklyDietList
                  .slice(page * numRows, page * numRows + numRows)
                  .map((row) => (
                    <WeeklyDiet
                      key={row.id}
                      row={row}
                      buttonType={"select"}
                      handleClickOpen={selectWDiet}
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
        </div>
      </Paper>
    </Dialog>
  );
}

export default NutritionistDialogSelectWDiet;
