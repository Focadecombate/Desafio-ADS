import React from "react";
import { ValorSolicitado } from "./Pages/valorSolicitado";
import { BuscarCpf } from "./Pages/buscarCpf";
import { EscolherMetodo } from "./Pages/escolherMetodo";
import { DadosCartão } from "./Pages/dadosCartao";
import { RevisarDados } from "./Pages/revisaoDados";
import { ConfimarCadastro } from "./Pages/confirmacaoCadastro";
import { DetalheEmprestimo } from "./Pages/detalheEmprestimo";
import { Route, Switch } from "react-router-dom";

export const Routes = () => (
  <Switch>
    <Route
      path="/valores"
      exact
      render={(props) => <ValorSolicitado {...props} />}
    ></Route>
    <Route path="/" exact render={(props) => <BuscarCpf {...props} />}></Route>
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
    <Route
      path="/revisao"
      exact
      render={(props) => <RevisarDados {...props} />}
    ></Route>
    <Route
      path="/confirmar"
      exact
      render={(props) => <ConfimarCadastro {...props} />}
    ></Route>
    <Route
      path="/detalhes"
      exact
      render={(props) => <DetalheEmprestimo {...props} />}
    ></Route>
  </Switch>
);
