import { Action } from "redux";
import { isString, isObject, has, get } from "lodash";

export enum ActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export interface Base<T extends ActionType, U> extends Action {
  type: T;
  payload: U;
}

export type AppAction =
  | Base<ActionType.DECREMENT, number>
  | Base<ActionType.INCREMENT, number>;

export function isAction(a: any): a is AppAction {
  if (isObject(a)) {
    let hasType = has(a, ("type" as keyof AppAction));
    let hasPayl = has(a, ("payload" as keyof AppAction));
    let typeIsString = isString(a.type);
    let typeisOK = !!ActionType[a.type];

    return (hasType && hasPayl && typeisOK && typeIsString);
  } else {
    return false;
  }
}
