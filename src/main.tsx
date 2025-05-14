import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App";

const element = document.getElementById("root")!;
const root = createRoot(element);
root.render(
    <App/>
)