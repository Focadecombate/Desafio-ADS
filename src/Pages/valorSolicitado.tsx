import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  makeStyles,
  Container,
} from "@material-ui/core";
import { Logo } from "../Components/logo";
import { RouteChildrenProps } from "react-router-dom";
import { CTables } from "../Components/table";
import { Valores } from "../Components/Valores";
import { Footer } from "../Components/footer";

interface Props extends RouteChildrenProps {}

const useStyles = makeStyles(() => ({
  Flex: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  Root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
}));

export const ValorSolicitado: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [Valor, setValor] = useState<number>(0);
  const [Selecionada, setSelecionada] = useState<Valores>();
  const [Open, setOpen] = useState(false);
  return (
    <>
      <div className={classes.Root}>
        <Container maxWidth="md" style={{ flexGrow: 1 }}>
          <Grid container justify="center" spacing={2}>
            <Grid
              lg={12}
              md={12}
              sm={12}
              xs={12}
              item
              style={{ display: "flex" }}
            >
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
              <TextField
                style={{ width: "70%" }}
                name="Valor"
                placeholder="Digite o valor desejado"
                label="Valor"
                variant="filled"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setValor(parseInt(e.target.value, 10));
                }}
              ></TextField>
              <Button
                color="secondary"
                style={{ height: "100%" }}
                variant="contained"
                onClick={() => {
                  setOpen(true);
                }}
              >
                Calcular
              </Button>
            </Grid>
            {Valor > 0 && Open ? (
              <>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <CTables
                    valorInicial={Valor}
                    setState={setSelecionada}
                  ></CTables>
                </Grid>
              </>
            ) : null}
          </Grid>
        </Container>
        <Footer {...props} Selecionada={Selecionada} Valor={Valor} />
      </div>
    </>
  );
};
