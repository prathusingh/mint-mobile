import React, { ReactNode } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { RelayEnvironmentProvider } from "react-relay/hooks"
import { defaultEnvironment } from "./relay/createEnvironment"

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <RelayEnvironmentProvider environment={defaultEnvironment}>
    <SafeAreaProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </SafeAreaProvider>
  </RelayEnvironmentProvider>
)
