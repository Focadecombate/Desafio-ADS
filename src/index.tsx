import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, CssBaseline, Container } from "@material-ui/core";
import { theme } from "./theme";
import { NavBar } from "./Components/navbar";
import { ValorSolicitado } from "./Pages/valorSolicitado";
import { BuscarCpf } from "./Pages/buscarCpf";
import { EscolherMetodo } from "./Pages/escolherMetodo";
import { DadosCartão } from "./Pages/dadosCartao";

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <NavBar />
          <Container maxWidth="md">
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => <ValorSolicitado {...props} />}
              ></Route>
              <Route
                path="/emprestimo"
                exact
                render={(props) => <BuscarCpf {...props} />}
              ></Route>
              <Route
                path="/metodo"
                exact
                render={(props) => <EscolherMetodo {...props} />}
              ></Route>
              <Route
                path="/pagamento"
                exact
                render={(props) => <DadosCartão {...props} />}
              ></Route>
            </Switch>
          </Container>
        </BrowserRouter>
      </CssBaseline>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
