import React from "react"
import { AppProviders } from "./AppProviders"
import { NavStack } from "./navigation/NavStack"
import { GlobalStore } from "./store/GlobalStore"

const Main: React.FC = () => {
  const isHydrated = GlobalStore.useAppState((state) => state.sessionState.isHydrated)
  if (!isHydrated) {
    return <NavStack />
  }

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
