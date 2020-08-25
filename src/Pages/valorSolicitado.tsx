import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Table,
  makeStyles,
} from "@material-ui/core";
import { Logo } from "../Components/logo";
import { RouteChildrenProps } from "react-router-dom";

interface Props extends RouteChildrenProps {}

const useStyles = makeStyles(() => ({
  Flex: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

export const ValorSolicitado: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center" spacing={2}>
        <Grid lg={12} md={12} sm={12} xs={12} item style={{ display: "flex" }}>
          <Logo texto="Simulação de Taxas" />
        </Grid>
        <Grid
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{ textAlign: "center" }}
          item
        >
          <Typography variant="h4" color="primary">
            Valor Desejado
          </Typography>
        </Grid>
        <Grid lg={12} md={12} sm={12} xs={12} className={classes.Flex} item>
          <TextField style={{ width: "70%" }} variant="filled"></TextField>
          <Button
            color="secondary"
            style={{ height: "100%" }}
            variant="contained"
          >
            Calcular
          </Button>
        </Grid>
        <Grid item>
          <Table></Table>
        </Grid>
      </Grid>
    </>
  );
};
