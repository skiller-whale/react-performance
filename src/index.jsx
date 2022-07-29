import { createRoot } from "react-dom/client"
import App from "./App"
// import App from "./measuring/App"
// import App from "./reducing_renders/App"
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
