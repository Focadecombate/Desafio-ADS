import React, { createRef, useState } from "react";
import {
  Grid,
  TextField,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import { RouteChildrenProps } from "react-router-dom";
import { Logo } from "../Components/logo";
import Dropzone, { DropzoneRef } from "react-dropzone";

interface Props extends RouteChildrenProps {}

const useStyles = makeStyles((theme) => ({
  textField: {
    padding: 8,
  },
  Root: {
    padding: 16,
  },
  text: {
    textAlign: "center",
    color: theme.palette.primary.main,
    fontStyle: "italic",
  },
  button: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const DadosCartão: React.FC<Props> = () => {
  const classes = useStyles();
  const FrenteRef = createRef<DropzoneRef>();
  const VersoRef = createRef<DropzoneRef>();
  const SelfieRef = createRef<DropzoneRef>();
  const [CartaoFrente, setCartaoFrente] = useState("");
  const [CartaoVerso, setCartaoVerso] = useState("");
  const [SelfieCartao, setSelfieCartao] = useState("");
  return (
    <>
      <Logo texto="Solicitar Empréstimo" />
      <Grid
        container
        spacing={2}
        justify="space-around"
        className={classes.Root}
      >
        <Grid container item lg={6} md={6} sm={6} xs={6}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography className={classes.text}>
              Insira os Dados do Cartão
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <TextField
              label="Nome"
              color="primary"
              className={classes.textField}
              name="nome"
              id="Nome"
              type="text"
              placeholder="Digite Seu Nome"
              fullWidth
              variant="filled"
            ></TextField>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <TextField
              label="Cartão de Credito"
              name="CreditCard"
              id="CreditCard"
              color="primary"
              className={classes.textField}
              type="text"
              placeholder="Digite o numero do seu cartão"
              fullWidth
              variant="filled"
            ></TextField>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <TextField
              label="Validade"
              name="Validade"
              id="Validade"
              color="primary"
              className={classes.textField}
              type="text"
              placeholder="Digite a validade do seu Cartão"
              fullWidth
              variant="filled"
            ></TextField>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <TextField
              label="CVV"
              name="CVV"
              id="CVV"
              color="primary"
              className={classes.textField}
              type="text"
              placeholder="Digite o CVV do seu Cartão"
              fullWidth
              variant="filled"
            ></TextField>
          </Grid>
        </Grid>
        <Grid container item lg={6} md={6} sm={6} xs={6}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography className={classes.text}>
              Faça Upload dos anexos do Cartão
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Dropzone ref={FrenteRef}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input id="CartãoFrente" {...getInputProps()}></input>
                  <TextField
                    label="Cartão Frente"
                    name="Cartão Frente"
                    id="CartãoFrente"
                    color="primary"
                    value={CartaoFrente ? CartaoFrente : undefined}
                    inputRef={() => {
                      const input = document.getElementById(
                        "CartãoFrente"
                      ) as HTMLInputElement;
                      setCartaoFrente(input.value ? input.value : "");
                      return input;
                    }}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: <Button>Adicionar</Button>,
                    }}
                    placeholder="Cartão de Credito(Frente)"
                    fullWidth
                    variant="filled"
                  ></TextField>
                </div>
              )}
            </Dropzone>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Dropzone ref={VersoRef}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input id="CartãoVerso" {...getInputProps()}></input>
                  <TextField
                    label="Cartão Verso"
                    name="Cartão Verso"
                    id="CartãoVerso"
                    color="primary"
                    value={CartaoVerso ? CartaoVerso : undefined}
                    inputRef={() => {
                      const input = document.getElementById(
                        "CartãoVerso"
                      ) as HTMLInputElement;
                      setCartaoVerso(input.value ? input.value : "");
                      return input;
                    }}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: <Button>Adicionar</Button>,
                    }}
                    placeholder="Cartão de Credito(Verso)"
                    fullWidth
                    variant="filled"
                  ></TextField>
                </div>
              )}
            </Dropzone>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Dropzone ref={SelfieRef}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input id="CartãoSelfie" {...getInputProps()}></input>
                  <TextField
                    label="Cartão Selfie"
                    name="Cartão Selfie"
                    id="CartãoSelfie"
                    color="primary"
                    value={SelfieCartao ? SelfieCartao : undefined}
                    inputRef={() => {
                      const input = document.getElementById(
                        "CartãoSelfie"
                      ) as HTMLInputElement;
                      setSelfieCartao(input.value ? input.value : "");
                      return input;
                    }}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: <Button>Adicionar</Button>,
                    }}
                    placeholder="Selfie com o Cartão de Credito"
                    fullWidth
                    variant="filled"
                  ></TextField>
                </div>
              )}
            </Dropzone>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography className={classes.text} style={{ textAlign: "left" }}>
              Atenção as fotos devem estar legiveis com todas as informações do
              cartão
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div className={classes.button}>
            <Button color="primary" size="large" variant="contained">
              Continuar
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
