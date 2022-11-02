import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { ContainerApp } from "./ContainerApp.styles"
import { Router } from "./Router/Router"
import { defaultColors } from "./styles/defaultColors"
import { GloboStyle } from "./styles/global.styles"

function App() {

  return (
    <ThemeProvider theme={defaultColors}>
      <ContainerApp>
        <BrowserRouter>
          <Sidebar />
          <Router />
        </BrowserRouter>
      </ContainerApp>
      <GloboStyle />
    </ThemeProvider>
  )
}

export default App
