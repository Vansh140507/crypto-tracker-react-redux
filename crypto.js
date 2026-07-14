import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import Coincreate from "./coincreate";

function App(){
    return(
        <Provider store={store}>
            <Coincreate></Coincreate>

        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("display")).render(<App></App>);
