import React, { ReactNode } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { RelayEnvironmentProvider } from "react-relay/hooks"
import { defaultEnvironment } from "./relay/createEnvironment"
import { Theme } from "palette"

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <RelayEnvironmentProvider environment={defaultEnvironment}>
    <SafeAreaProvider>
      <Theme>
        <NavigationContainer>{children}</NavigationContainer>
      </Theme>
    </SafeAreaProvider>
  </RelayEnvironmentProvider>
)
