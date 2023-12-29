import { createStore } from "@reduxjs/toolkit";
import { rootreducer } from "./reduser/root-reducer";
import { loadState, setState } from "../store/reduser/localStorage";

export const configureStore = () => {
  const state = loadState()

  const store = createStore(
    rootreducer,
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),)

  store.subscribe(() => {
    setState(store.getState())
  })

  return store
}