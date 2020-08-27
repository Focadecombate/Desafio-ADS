import React from "react";
import { makeStyles, Button, Typography } from "@material-ui/core";
import { RouteChildrenProps } from "react-router-dom";
import { Valores } from "./Valores";
import { useDispatch } from "react-redux";
import { setValores } from "../reducers/user";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: "100vw",
    height: "5vh",
    padding: 8,
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignContent: "center",
    position: "fixed",
    bottom: 0,
    marginTop: "5vh",
  },
}));

interface Props extends RouteChildrenProps {
  Selecionada?: Valores;
  Valor?: number;
}

export const Footer: React.FC<Props> = ({ history, Selecionada, Valor }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes.root}>
        {Selecionada ? (
          <Typography style={{ color: "#fff", padding: 0 }} variant="h6">
            Nome: Tabela Padrão Parcelas: {Selecionada.parcela} Valor da
            Parcela: R${Selecionada.valorParcela}
          </Typography>
        ) : (
          <Typography style={{ color: "#fff", padding: 0 }} variant="h6">
            Por favor selecione uma tabela
          </Typography>
        )}

        <Button
          color="secondary"
          onClick={() => {
            if (Selecionada && Valor) {
              dispatch(
                setValores({ valores: Selecionada, valorInicial: Valor })
              );
              history.push("/metodo");
            }
          }}
          variant="contained"
        >
          Avançar
        </Button>
      </div>
    </>
  );
};
