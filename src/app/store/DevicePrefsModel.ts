import { GlobalStoreModel } from "./GlobalStoreModel"
import { computed, Computed, action, Action } from "easy-peasy"
import { Appearance } from "react-native"

export interface DevicePrefsModel {
  colorScheme: Computed<this, "light" | "dark", GlobalStoreModel>
  usingSystemColorScheme: boolean
  forcedColorScheme: "light" | "dark"
  setUsingSystemColorScheme: Action<this, this["usingSystemColorScheme"]>
  setForcedColorScheme: Action<this, this["forcedColorScheme"]>
}

export const getDevicePrefsModel = (): DevicePrefsModel => ({
  colorScheme: computed([(_, store) => store], (store) => {
    return store.devicePrefs.usingSystemColorScheme
      ? Appearance.getColorScheme() ?? "light"
      : store.devicePrefs.forcedColorScheme
  }),
  usingSystemColorScheme: false,
  forcedColorScheme: "light",
  setUsingSystemColorScheme: action((state, option) => {
    state.usingSystemColorScheme = option
  }),
  setForcedColorScheme: action((state, option) => {
    state.forcedColorScheme = option
  }),
})
