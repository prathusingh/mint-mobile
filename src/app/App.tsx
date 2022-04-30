import React from "react"
import { AppProviders } from "./AppProviders"
import { GlobalStoreProvider } from "./store/GlobalStore"
import { NavStack } from "./navigation/NavStack"

const App = () => {
  return (
    <GlobalStoreProvider>
      <AppProviders>
        <NavStack />
      </AppProviders>
    </GlobalStoreProvider>
  )
}

export default App
