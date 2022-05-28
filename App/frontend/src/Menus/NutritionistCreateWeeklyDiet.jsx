import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import React from "react";

function NutritionistCreateWeeklyDiet(props) {
  return (
    <TableContainer
      component={Paper}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "65%",
        padding: "20px 20px 20px 20px",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell>Lunes</TableCell>
            <TableCell>
              <Button>
                <SearchIcon fontSize="small" />
                {"Buscar"}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Martes</TableCell>
            <TableCell>
              <Button>
                <SearchIcon fontSize="small" />
                {"Buscar"}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Miercoles</TableCell>
            <TableCell>
              <Button>
                <SearchIcon fontSize="small" />
                {"Buscar"}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jueves</TableCell>
            <TableCell>
              <Button>
                <SearchIcon fontSize="small" />
                {"Buscar"}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Viernes</TableCell>
            <TableCell>
              <Button>
                <SearchIcon fontSize="small" />
                {"Buscar"}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sabado</TableCell>
            <TableCell>
              <Button>
                <SearchIcon fontSize="small" />
                {"Buscar"}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Domingo</TableCell>
            <TableCell>
              <Button>
                <SearchIcon fontSize="small" />
                {"Buscar"}
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div>
        <Button
        //  onClick={guardar}
        >
          Guardar
        </Button>
        <Button
          id="cancel-dieta"
          // onClick={createDieta}
        >
          Cancelar
        </Button>
      </div>
    </TableContainer>
  );
}

export default NutritionistCreateWeeklyDiet;
