import ReactDOM  from "react-dom/client";
import { App } from "./App";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./index.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

let root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>)