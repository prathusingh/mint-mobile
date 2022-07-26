import React, { ReactNode } from "react"
import { combineProviders } from "./utils/combineProviders"
import { LogBox } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { RelayEnvironmentProvider } from "react-relay"
import { defaultEnvironment } from "./relay/createEnvironment"
import { Theme } from "./palette/themes"
import { GlobalStoreProvider, GlobalStore } from "./store/GlobalStore"
import { ProvideScreenDimensions } from "./shared/hooks/useScreenDimensions"

LogBox.ignoreLogs(["Expected style "])

export const AppProviders = ({ children }: { children: ReactNode }) =>
  combineProviders(
    [
      // please be careful of the provider orders here
      GlobalStoreProvider,
      SafeAreaProvider,
      ProvideScreenDimensions,
      RelayDefaultEnvProvider,
      ThemeProvider,
    ],
    children
  )

// relay needs the default environment
const RelayDefaultEnvProvider = (props: { children?: ReactNode }) => (
  <RelayEnvironmentProvider environment={defaultEnvironment} {...props} />
)

// theme with dark mode support
const ThemeProvider = ({ children }: { children?: ReactNode }) => {
  const darkMode = GlobalStore.useAppState((state) => state.devicePrefs.colorScheme)
  return <Theme theme={darkMode === "dark" ? "v1dark" : "v1"}>{children}</Theme>
}
