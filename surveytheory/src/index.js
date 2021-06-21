import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import Loading from "./pages/Loading/loading";

ReactDOM.render(
    <div>
        <App />
        <Loading />
    </div>,
    document.getElementById("root")
);
