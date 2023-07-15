import React from "react";
import { ReactDOM } from "react-dom/client";

const child = React.createElement("h2",{},"Hello from h2")

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(child)