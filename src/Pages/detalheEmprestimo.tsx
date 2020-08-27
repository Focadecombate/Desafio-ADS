import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import { Logo } from "../Components/logo";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { FileCopy } from "@material-ui/icons";
import { Props } from "../interfaces/PropsDef";

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: "#efefef",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
    width: "100%",
    minHeight: 208,
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
  red: {
    backgroundColor: theme.palette.error.main,
  },
}));

export const DetalheEmprestimo: React.FC<Props> = () => {
  const user = useSelector((state: RootState) => state.user);
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
        <Logo texto="Detalhe da Solicitação" />
        <Grid container spacing={2}>
          <Grid container spacing={2} item lg={6} md={6} sm={12} xs={12}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div className={classes.bg} style={{ minHeight: 40 }}>
                <Typography>Solicitação gerada por Sitema Blank</Typography>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className={classes.bg}>
                <Typography>Valor Total: {user.valores.valorFinal}</Typography>
                <Typography style={{ textAlign: "center" }}>
                  {user.valores.valorFinal}
                </Typography>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className={classes.bg}>
                <Typography>Valor a Depositar</Typography>
                <Typography style={{ textAlign: "center" }}>
                  {(parseInt(user.valores.valorFinal, 10) / 2).toFixed(2)}
                </Typography>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className={classes.bg}>
                <Typography>Frente do cartão</Typography>
                <FileCopy color="secondary" />
                <a href="detalhes">Valor Total</a>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className={classes.bg}>
                <Typography>Verso do cartão</Typography>
                <FileCopy color="secondary" />
                <a href="detalhes">Valor Total</a>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className={classes.bg}>
                <Typography>Selfie do cartão</Typography>
                <FileCopy color="secondary" />
                <a href="detalhes">Valor Total</a>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2} item lg={6} md={6} sm={12} xs={12}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div
                className={classes.bg}
                style={{
                  flexDirection: "row",
                  minHeight: 40,
                }}
              >
                <Typography>Fluxo de Solicitação:</Typography>
                <Typography color="primary" style={{ fontWeight: "bold" }}>
                  Manual
                </Typography>
              </div>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div className={classes.bg} style={{ minHeight: 40 }}>
                <Typography style={{ textAlign: "start" }}>
                  Modalidade
                </Typography>
                <Typography color="primary" style={{ fontWeight: "bold" }}>
                  Cartão de Credito
                </Typography>
                <Typography color="primary" style={{ fontWeight: "bold" }}>
                  Numero do cartão : {user.dadosCartao.CreditCard}
                </Typography>
                <Typography color="primary" style={{ fontWeight: "bold" }}>
                  Validade: {user.dadosCartao.Validade}
                </Typography>
                <Typography color="primary" style={{ fontWeight: "bold" }}>
                  CVC: {user.dadosCartao.CVV}
                </Typography>
                <Typography color="primary" style={{ fontWeight: "bold" }}>
                  Parcelas: {user.valores.parcela}
                </Typography>
                <Typography color="primary" style={{ fontWeight: "bold" }}>
                  Tabela: Teste Teste
                </Typography>
              </div>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div className={classes.bg} style={{ minHeight: 40 }}>
                <Typography style={{ textAlign: "start" }}>
                  Informações do Cliente
                </Typography>
                <Typography color="primary" style={{ fontWeight: "bold" }}>
                  CPF: {user.user.cpf}
                </Typography>
                <Typography color="primary" style={{ fontWeight: "bold" }}>
                  Agência: 55555
                </Typography>
                <Typography color="primary" style={{ fontWeight: "bold" }}>
                  Banco: 029 - Banco Itaú Consignado S.A.
                </Typography>
                <Typography color="primary" style={{ fontWeight: "bold" }}>
                  Tipo da Conta: Poupança
                </Typography>
                <Typography color="primary" style={{ fontWeight: "bold" }}>
                  Número da conta: 22225
                </Typography>
              </div>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div className={classes.bg} style={{ minHeight: 40 }}>
                <Typography style={{ textAlign: "start" }}>
                  Informações Gerais
                </Typography>
                <Typography color="primary" style={{ fontWeight: "bold" }}>
                  Data: 27/08/2020
                </Typography>
                <Grid container spacing={2} style={{ textAlign: "center" }}>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Button color="secondary" variant="contained">
                      Aguardando
                    </Button>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Button color="primary" variant="contained">
                      Pré Aprovar
                    </Button>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Button className={classes.red} variant="contained">
                      Reprovar
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
