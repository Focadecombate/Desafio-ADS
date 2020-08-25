import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Container,
} from "@material-ui/core";
import { RouteChildrenProps } from "react-router-dom";
import { Logo } from "../Components/logo";
import { ClienteEncontrado } from "../Components/ClienteEncontrado";
import { Cliente } from "./Cliente";

interface props extends RouteChildrenProps {}

export const BuscarCpf: React.FC<props> = () => {
  const [cliente, SetCliente] = useState<Cliente>();
  const teste: Cliente = {
    nome: "Gustavo",
    cpf: "999.999.999.99",
  };
  return (
    <>
      <Logo texto="Solicitar Emprestimo" />
      <Container maxWidth="sm">
        <Grid container spacing={2} justify="center">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography
              style={{ fontStyle: "italic", textAlign: "center" }}
              variant="h6"
              color="primary"
            >
              Busque o Cliente
            </Typography>
          </Grid>
          <Grid
            container
            justify="center"
            alignContent="stretch"
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <div style={{ display: "flex", width: "100%" }}>
              <TextField fullWidth variant="outlined"></TextField>
              <Button
                variant="contained"
                onClick={() => {
                  SetCliente(teste);
                }}
                color="primary"
              >
                Procurar
              </Button>
            </div>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            {cliente ? <ClienteEncontrado cliente={cliente} /> : null}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
