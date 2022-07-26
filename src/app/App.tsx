import React from "react"
import { AppProviders } from "./AppProviders"
import { NavStack } from "./navigation/NavStack"

const Main: React.FC = () => {
  return <NavStack />
}

const App = () => {
  return (
    <AppProviders>
      <Main />
    </AppProviders>
  )
}

export default App
