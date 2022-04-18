import React, { ReactNode } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { RelayEnvironmentProvider } from "react-relay/hooks"
import { defaultEnvironment } from "@relay/defaultEnvironent"
import { GlobalStoreProvider } from "./store/GlobalStore"
import { NavStack } from "./navigation/NavStack"

const AppProviders = ({ children }: { children: ReactNode }) => (
  <RelayEnvironmentProvider enviroment={defaultEnvironment}>
    <SafeAreaProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </SafeAreaProvider>
  </RelayEnvironmentProvider>
)

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
