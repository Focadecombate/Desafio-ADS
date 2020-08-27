import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import { Logo } from "../Components/logo";
import { RouteChildrenProps } from "react-router-dom";
import { CTables } from "../Components/table";
import Selector from "../Components/select";
import { Valores } from "../Components/Valores";
import { Check } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

interface Props extends RouteChildrenProps {}

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: theme.palette.grey[200],
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "100%",
    minHeight: 80,
    padding: 8,
  },
  bgBranco: {
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    height: "100%",
    fontSize: "1.5rem",
  },
}));

export const RevisarDados: React.FC<Props> = ({ history }) => {
  const classes = useStyles();
  const [Valor, setValor] = useState<number>(0);
  const ReduxValor = useSelector((state: RootState) => state.user.valorInicial);
  useEffect(() => {
    setValor(ReduxValor);
  }, [ReduxValor]);
  const [Selecionada, setSelecionada] = useState<Valores>();
  const options = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Logo texto="Solicitar Emprestimo" />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className={classes.bg}>
              <Typography color="primary" variant="h6">
                Tabela
              </Typography>
              <div className={classes.bgBranco}>
                <Selector options={["Padrão"]} />
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className={classes.bg} style={{ backgroundColor: "#e8fee4" }}>
              <Typography color="primary" variant="h6">
                Valor desejado
              </Typography>
              <Typography
                className={classes.bgBranco}
                color="primary"
                variant="h6"
              >
                R$ {Valor.toFixed(2)}
              </Typography>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className={classes.bg} style={{ backgroundColor: "#e8fee4" }}>
              <Typography color="primary" variant="h6">
                Valor Total do Empréstimo
              </Typography>
              <Typography
                className={classes.bgBranco}
                color="primary"
                variant="h6"
              >
                R$ {Selecionada ? Selecionada.valorFinal : ""}
              </Typography>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className={classes.bg}>
              <Typography color="primary" variant="h6">
                Parcelas
              </Typography>
              <div className={classes.bgBranco}>
                <Selector options={options} />
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className={classes.bg}>
              <Typography color="primary" variant="h6">
                Valor da Parcela
              </Typography>
              <Typography
                className={classes.bgBranco}
                color="primary"
                variant="h6"
              >
                R$ {Selecionada ? Selecionada.valorParcela : ""}
              </Typography>
            </div>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h6" color="primary">
              {" "}
              Escolha o tipo de contrato
            </Typography>
          </Grid>
          <Grid
            container
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            justify="space-between"
          >
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <Button
                className={classes.button}
                color="primary"
                variant="contained"
              >
                Automático
              </Button>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <Button className={classes.button} color="primary">
                Manual
              </Button>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} style={{ minHeight: 80 }}>
            <Button
              color="primary"
              variant="contained"
              style={{ height: "100%", width: "100%", fontSize: "1.5em" }}
              onClick={() => {
                if (Selecionada) {
                  history.push("/confirmar");
                }
              }}
            >
              <Check fontSize="large" style={{ marginRight: 10 }} />
              Concluir
            </Button>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <CTables valorInicial={Valor} setState={setSelecionada}></CTables>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
