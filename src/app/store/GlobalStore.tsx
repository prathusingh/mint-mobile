import React from "react"
import { Middleware } from "redux"
import { StoreProvider, createStore, createTypedHooks } from "easy-peasy"
import { GlobalStoreModel, getGlobalStoreModel } from "./GlobalStoreModel"

function createGlobalStore() {
  const middleware: Middleware[] = []
  const store = createStore(getGlobalStoreModel(), {
    middleware,
  })
  return store
}

let _globalStoreInstance: ReturnType<typeof createGlobalStore> | undefined
const globalStoreInstance = (): ReturnType<typeof createGlobalStore> => {
  if (_globalStoreInstance === undefined) {
    _globalStoreInstance = createGlobalStore()
  }
  return _globalStoreInstance
}

const hooks = createTypedHooks<GlobalStoreModel>()

export const GlobalStore = {
  useAppState: hooks.useStoreState,
  get actions() {
    return globalStoreInstance().getActions()
  },
}

export const GlobalStoreProvider: React.FC<{}> = ({ children }) => {
  return <StoreProvider store={globalStoreInstance()}>{children}</StoreProvider>
}
