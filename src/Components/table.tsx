import React, { useEffect, useState } from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { Valores } from "./Valores";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.grey[200],
      color: theme.palette.grey[700],
      fontWeight: "bold",
      fontSize: "1.5em",
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
  },
  header: {
    display: "flex",
    width: "100%",

    backgroundColor: theme.palette.grey[200],
  },
  txt: {
    textAlign: "center",
    width: "100%",
    padding: 8,
  },
  selected: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

interface Props {
  valorInicial: number;
  setState: Function;
}

const Juros = [15, 30, 32, 36, 38, 40, 42, 44];

export const CTables: React.FC<Props> = ({ valorInicial, setState }) => {
  const classes = useStyles();
  const [rows, setRow] = useState<Valores[]>([]);
  const [Selected, setSelected] = useState<HTMLElement>();
  useEffect(() => {
    function createData(valorInicial: number): Valores[] {
      const Data = [] as Valores[];
      Juros.forEach((juro, parcela) => {
        const comissao = parseInt((Math.random() * 100).toFixed(2));
        const valorFinal = (valorInicial * (juro / 100) + comissao).toFixed(2);
        const valorParcela = (parseInt(valorFinal) / (parcela + 1)).toFixed(2);
        Data[parcela] = {
          parcela: parcela + 1,
          juro,
          valorFinal,
          valorParcela,
          comissao: comissao.toFixed(2),
        };
      });
      return Data;
    }
    setRow(createData(valorInicial));
  }, [valorInicial]);

  return (
    <TableContainer component={Paper}>
      <div className={classes.header}>
        <Typography className={classes.txt} color="primary" variant="h4">
          Tabela Padrão
        </Typography>
      </div>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Parcela</StyledTableCell>
            <StyledTableCell align="center">Juros da Parcela</StyledTableCell>
            <StyledTableCell align="center">Valor Parcela</StyledTableCell>
            <StyledTableCell align="center">Valor Total</StyledTableCell>
            <StyledTableCell align="center">Comissão Parceiro</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              id={row.parcela.toString()}
              key={row.parcela}
              onClick={() => {
                if (Selected) {
                  Selected.className = "";
                }
                const selected = document.getElementById(
                  row.parcela.toString()
                );
                if (selected) {
                  setSelected(selected);
                  selected.className = classes.selected;
                }
                setState(row);
              }}
            >
              <StyledTableCell align="center" component="th" scope="row">
                {row.parcela}
              </StyledTableCell>
              <StyledTableCell align="center">{row.juro}%</StyledTableCell>
              <StyledTableCell align="center">
                R$ {row.valorParcela}
              </StyledTableCell>
              <StyledTableCell align="center">
                R$ {row.valorFinal}
              </StyledTableCell>
              <StyledTableCell align="center">
                R$ {row.comissao}
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
