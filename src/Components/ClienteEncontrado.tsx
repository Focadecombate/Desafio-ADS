import React from "react";
import { Paper, Typography, Button, makeStyles } from "@material-ui/core";
import { Cliente } from "../interfaces/Cliente";
import * as H from "history";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/user";

type props = {
  cliente: Cliente;
  history: H.History;
};

const useStyles = makeStyles(() => ({
  Paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#efefef",
    padding: 16,
  },
}));

export const ClienteEncontrado: React.FC<props> = ({ cliente, history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const SaveUser = (cliente: Cliente) => {
    dispatch(setUser({ user: cliente }));
    history.push("/valores");
  };

  return (
    <Paper className={classes.Paper}>
      <Typography color="textSecondary" variant="h6">
        Cliente encontrado:
      </Typography>
      <Typography color="secondary" variant="h6">
        {cliente.cpf}
      </Typography>
      <Typography color="primary" variant="h6">
        {cliente.nome}
      </Typography>
      <Button
        color="primary"
        variant="contained"
        style={{ minHeight: 50 }}
        onClick={() => {
          SaveUser(cliente);
        }}
        fullWidth
      >
        Solicitar
      </Button>
    </Paper>
  );
};
