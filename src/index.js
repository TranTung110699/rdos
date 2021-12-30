import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor } from "./store";
import store from "./store";
import ModalTokenExpires from "./pages/Authentication/ModalTokenExpires";
import { SnackbarProvider } from "notistack";

const app = (
    <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
            <BrowserRouter>
                <SnackbarProvider maxSnack={3}>
                    <ModalTokenExpires />
                    <App/>
                </SnackbarProvider>
            </BrowserRouter>
        </Provider>
    </PersistGate>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
