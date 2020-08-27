import React, { createRef, useState } from "react";
import {
  Grid,
  TextField,
  makeStyles,
  Typography,
  Button,
  Container,
} from "@material-ui/core";
import { Logo } from "../Components/logo";
import Dropzone, { DropzoneRef } from "react-dropzone";
import { useForm, Controller } from "react-hook-form";
import { IDadosCartão } from "../interfaces/IDadosCartão";
import { useDispatch } from "react-redux";
import { setCartao } from "../reducers/user";
import InputMask from "react-input-mask";
import { Props } from "../interfaces/PropsDef";

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

export const DadosCartão: React.FC<Props> = ({ history }) => {
  const { handleSubmit, register, control } = useForm<IDadosCartão>();
  const classes = useStyles();
  const dispatch = useDispatch();
  const FrenteRef = createRef<DropzoneRef>();
  const VersoRef = createRef<DropzoneRef>();
  const SelfieRef = createRef<DropzoneRef>();
  const [CartaoFrente, setCartaoFrente] = useState("");
  const [CartaoVerso, setCartaoVerso] = useState("");
  const [SelfieCartao, setSelfieCartao] = useState("");
  return (
    <>
      <Container maxWidth="md">
        <Logo texto="Solicitar Emprestimo" />
      </Container>
      <form
        noValidate
        onSubmit={handleSubmit((data) => {
          if (data) {
            dispatch(setCartao({ cartao: data }));
            history.push("/revisao");
          }
        })}
      >
        <Container maxWidth="md">
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
                  required
                  inputRef={register}
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
                <Controller
                  as={InputMask}
                  control={control}
                  name="CreditCard"
                  mask="9999999999999999"
                  defaultValue=""
                  maskChar=" "
                >
                  {() => (
                    <TextField
                      name="CreditCard"
                      label="Cartão de Credito"
                      id="CreditCard"
                      required
                      className={classes.textField}
                      type="text"
                      inputRef={register}
                      color="primary"
                      placeholder="Digite o numero do seu cartão"
                      variant="filled"
                      fullWidth
                    />
                  )}
                </Controller>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Controller
                  as={InputMask}
                  control={control}
                  name="Validade"
                  mask="99/9999"
                  defaultValue=""
                  maskChar=" "
                >
                  {() => (
                    <TextField
                      name="Validade"
                      label="Validade"
                      id="Validade"
                      required
                      className={classes.textField}
                      type="text"
                      inputRef={register}
                      color="primary"
                      placeholder="Digite a validade do seu Cartão"
                      variant="filled"
                      fullWidth
                    />
                  )}
                </Controller>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Controller
                  as={InputMask}
                  control={control}
                  name="CVV"
                  mask="999"
                  defaultValue=""
                  maskChar=" "
                >
                  {() => (
                    <TextField
                      label="CVV"
                      id="CVV"
                      required
                      className={classes.textField}
                      type="text"
                      color="primary"
                      placeholder="Digite o CVV do seu Cartão"
                      variant="filled"
                      fullWidth
                    />
                  )}
                </Controller>
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
                        required
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
                        required
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
                        required
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
                <Typography
                  className={classes.text}
                  style={{ textAlign: "left" }}
                >
                  Atenção as fotos devem estar legiveis com todas as informações
                  do cartão
                </Typography>
              </Grid>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div className={classes.button}>
                <Button
                  type="submit"
                  color="primary"
                  size="large"
                  variant="contained"
                >
                  Continuar
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </form>
    </>
  );
};
