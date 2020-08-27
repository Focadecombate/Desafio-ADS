import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "./theme";
import { NavBar } from "./Components/navbar";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/index";
import { PersistGate } from "redux-persist/integration/react";
import { Routes } from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline>
            <BrowserRouter>
              <NavBar />
              <Routes />
            </BrowserRouter>
          </CssBaseline>
        </PersistGate>
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
