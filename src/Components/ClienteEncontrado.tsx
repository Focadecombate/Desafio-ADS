import React from "react";
import { Paper, Typography, Button, makeStyles } from "@material-ui/core";
import { Cliente } from "../Pages/Cliente";

type props = {
  cliente: Cliente;
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

export const ClienteEncontrado: React.FC<props> = ({ cliente }) => {
  const classes = useStyles();
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
        fullWidth
      >
        Solicitar
      </Button>
    </Paper>
  );
};
