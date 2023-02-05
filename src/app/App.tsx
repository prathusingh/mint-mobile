import React from "react"
import { AppProviders } from "./AppProviders"
import { NavStack } from "./navigation/NavStack"
import { GlobalStore } from "./store/GlobalStore"
import { Onboarding } from "./Scenes/Onboarding/Onboarding"

const Main: React.FC = () => {
  const isHydrated = GlobalStore.useAppState((state) => state.sessionState.isHydrated)
  const isLoggedIn = GlobalStore.useAppState((state) => state.authModel.userAccessToken)
  const onboardingState = GlobalStore.useAppState((state) => state.authModel.onboardingState)

  if (!isHydrated) {
    return <NavStack />
  }

  if (!isLoggedIn || onboardingState === "incomplete") {
    return <Onboarding />
  }

  return <NavStack />
}

const App: React.FC = () => {
  return (
    <AppProviders>
      <Main />
    </AppProviders>
  )
}

export default App
