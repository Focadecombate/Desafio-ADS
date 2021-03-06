import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Container,
} from "@material-ui/core";
import { Logo } from "../Components/logo";
import { ClienteEncontrado } from "../Components/ClienteEncontrado";
import { Cliente } from "../interfaces/Cliente";
import { Props } from "../interfaces/PropsDef";
import { ApiServices } from "../services/api";

export const BuscarCpf: React.FC<Props> = ({ history }) => {
  const [cliente, SetCliente] = useState<Cliente[]>();
  const [open, SetOpen] = useState(false);
  useEffect(() => {
    async function GetUser() {
      const Cliente = await ApiServices.GetUser();
      if (Cliente) {
        SetCliente(Cliente);
      }
    }
    GetUser();
  }, []);

  return (
    <>
      <Container maxWidth="md">
        <Logo texto="Solicitar Emprestimo" />
      </Container>
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
                  SetOpen(true);
                }}
                color="primary"
              >
                Procurar
              </Button>
            </div>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            {cliente && open
              ? cliente.map((item) => {
                  return <ClienteEncontrado cliente={item} history={history} />;
                })
              : null}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
