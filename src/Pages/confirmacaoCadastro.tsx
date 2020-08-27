import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import { Logo } from "../Components/logo";
import { RootState } from "../redux/reducers";
import { useSelector } from "react-redux";
import { Props } from "../interfaces/PropsDef";

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: "#e8fee4",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "100%",
    width: "100%",
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

export const ConfimarCadastro: React.FC<Props> = ({ history }) => {
  const classes = useStyles();
  const user = useSelector((state: RootState) => state.user);
  return (
    <>
      <Container maxWidth="md">
        <Logo texto="Solicitar Emprestimo" />
        <Grid container spacing={2} justify="space-evenly">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography
              variant="h4"
              style={{ textAlign: "center" }}
              color="primary"
            >
              Solicitação Realizada com Sucesso!
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography color="primary" variant="h6">
              Resumo da Solicitação
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <div className={classes.bg}>
              <Typography variant="h6" color="primary">
                Nome : {user.user.nome}
              </Typography>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <div className={classes.bg}>
              <Typography variant="h6" color="primary">
                Taxa de Juros : {user.valores.juro}%
              </Typography>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <div className={classes.bg}>
              <Typography variant="h6" color="primary">
                Numero do Cartão : {user.dadosCartao.CreditCard}
              </Typography>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <div className={classes.bg}>
              <Typography variant="h6" color="primary">
                Parcelas : {user.valores.parcela}
              </Typography>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <div className={classes.bg}>
              <Typography variant="h6" color="primary">
                Valor Desejado : R$ {user.valorInicial.toFixed(2)}
              </Typography>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <div className={classes.bg}>
              <Typography variant="h6" color="primary">
                Valor da Parcela : {user.valores.parcela}
              </Typography>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <div className={classes.bg}>
              <Typography variant="h6" color="primary">
                Valor Total do Emprestimo : R$ {user.valores.valorFinal}
              </Typography>
            </div>
          </Grid>
          <Grid container justify="center" item lg={12} md={12} sm={12} xs={12}>
            <Button
              style={{
                height: "100%",
                minHeight: 80,
                width: "50%",
                fontSize: "1.25rem  ",
              }}
              color="primary"
              variant="contained"
              onClick={() => {
                history.push("/detalhes");
              }}
            >
              Detalhe da Solicitação
            </Button>
          </Grid>
          <Grid container justify="center" item lg={12} md={12} sm={12} xs={12}>
            <Typography color="primary" variant="body1">
              O credFica avaliará a solicitação.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
