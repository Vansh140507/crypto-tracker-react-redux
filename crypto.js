import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import Coincreate from "./coincreate";
import Head from "./Head";

function App(){
    return(
        <Provider store={store}>
            <Head></Head>
            <Coincreate></Coincreate>

        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("display")).render(<App></App>);
