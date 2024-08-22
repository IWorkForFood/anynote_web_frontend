import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App/App.tsx";
import "./shared/UI/scss/index.scss"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
