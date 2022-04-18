import React from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { StoreProvider, createStore, persist, createTypedHooks } from "easy-peasy"
import { GlobalStoreModel } from "./Models/GlobalStoreModel"

const STORE_VERSION = 0

const asyncStorage = {
  async getItem(key: String) {
    try {
      const res = await AsyncStorage.getItem(key)
      if (res) {
        return JSON.parse(res)
      }
    } catch (error) {
      throw error
    }
  },
  async setItem(key: string, data: string) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      throw error
    }
  },
  async removeItem(key: string) {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {
      throw error
    }
  },
}

const createGlobalStore = () => {
  const store = createStore(
    persist(GlobalStoreModel, {
      storage: asyncStorage,
    }),
    {
      name: "GlobalStore",
      version: STORE_VERSION,
      devTools: __DEV__,
    }
  )
  return store
}

let globalStoreInstance = createGlobalStore()

const hooks = createTypedHooks()

export const GlobalStore = {
  useAppState: hooks.useStoreState,
  get actions() {
    return globalStoreInstance.getActions()
  },
}

export const GlobalStoreProvider: React.FC<{}> = ({ children }) => {
  return <StoreProvider store={globalStoreInstance}>{children}</StoreProvider>
}
