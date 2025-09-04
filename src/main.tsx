import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { ConfigProvider } from "./context/ConfigContext.tsx"
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </BrowserRouter>,
)
