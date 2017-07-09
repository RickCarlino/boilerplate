import {
  AppAction,
  ActionType,
  isAction
} from "./actions";
import { State } from "./state";
import { Reducer } from "redux";

export let rootReducer: Reducer<State> = (s, a) => {
  if (isAction(a)) {
    return reducerBase(s, a);
  } else {
    console.dir(a);
    throw new Error("Got a bad action.");
  }
};

function reducerBase(s: Readonly<State>,
  a: Readonly<AppAction>): State {
  switch (a.type) {
    case ActionType.DECREMENT:
      return { ...s, count: s.count - 1 };
    case ActionType.INCREMENT:
      return { ...s, count: s.count + 1 };
    default:
      return s;
  }
}
