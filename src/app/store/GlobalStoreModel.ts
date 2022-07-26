import { Action, State, action } from "easy-peasy"
import { Versions } from "./migrations"
import { DevicePrefsModel, getDevicePrefsModel } from "./DevicePrefsModel"

interface GlobalStoreStateModel {
  version: number
  sessionState: {
    isHydrated: boolean
  }
  devicePrefs: DevicePrefsModel
}

export interface GlobalStoreModel extends GlobalStoreStateModel {
  rehydrate: Action<this>

  // for dev only
  _setVersion: Action<this, number>
}

export const getGlobalStoreModel = (): GlobalStoreModel => ({
  version: Versions.AppVersion,
  sessionState: {
    isHydrated: true,
  },
  rehydrate: action((state) => {
    if (state.sessionState.isHydrated) {
      console.error("The store was already hydrated.")
      return
    }
    state.sessionState.isHydrated = true
  }),
  devicePrefs: getDevicePrefsModel(),

  // for dev only
  _setVersion: action((state, newVersion) => {
    state.version = newVersion
  }),
})

export type GlobalStoreState = State<GlobalStoreModel>
