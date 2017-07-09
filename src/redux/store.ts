import { createStore as store } from "redux";
import { rootReducer } from "./root_reducer";
import { DEFAULT_STATE } from "./state";
import { cloneDeep as clone } from "lodash";

export function createStore(state = clone(DEFAULT_STATE)) {
  return store(rootReducer, state);
}
