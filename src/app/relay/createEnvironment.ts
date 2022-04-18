import { Environment, RecordSource, Store } from "relay-runtime"
const createEnvironment = () => {
  const source = new RecordSource()
  const store = new Store(source)
  return new Environment({
    store,
  })
}

export const defaultEnvironment = createEnvironment()
