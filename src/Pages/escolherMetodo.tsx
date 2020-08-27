import React from "react";
import {
  Grid,
  Typography,
  Button,
  Container,
  makeStyles,
} from "@material-ui/core";
import { Logo } from "../Components/logo";
import { Props } from "../interfaces/PropsDef";

const useStyles = makeStyles(() => ({
  Button: {
    minHeight: 60,
    width: "100%",
    fontWeight: "bold",
    fontSize: "1.25em",
  },
}));

export const EscolherMetodo: React.FC<Props> = ({ history }) => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
        <Logo texto="Solicitar Emprestimo" />
      </Container>
      <Container maxWidth="xs" style={{ textAlign: "center", padding: 16 }}>
        <Grid container justify="space-around" alignContent="center">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Button
              color="primary"
              variant="contained"
              className={classes.Button}
              onClick={() => history.push("pagamento")}
            >
              Cartão de Crédito
            </Button>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h6" color="textSecondary">
              Ou
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Button
              variant="contained"
              color="primary"
              disabled
              className={classes.Button}
            >
              Credito Consignado
            </Button>
            <Typography
              color="textSecondary"
              variant="subtitle2"
              style={{ textAlign: "right" }}
            >
              Em breve
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
