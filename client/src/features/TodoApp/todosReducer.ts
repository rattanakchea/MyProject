// To convert from useState to useReducer:
// Dispatch actions from event handlers.
// Write a reducer function that returns the next state for a given state and action.
// Replace useState with useReducer.

type TodoActionType =
  | "ADD_OPTIMISTIC"
  | "DELETE"
  | "UPDATE"
  | "LOAD_START"
  | "LOAD_SUCCESS"
  | "ERROR";

type Action = { type: TodoActionType; payload: { [key: string]: any } };

// todo Reducer
// action is any object with a type property
export function todosReducer(state: any, action: Action) {
  const { type, payload } = action;

  switch (type) {
    case "LOAD_START":
      return { ...state, ...payload };
    case "LOAD_SUCCESS":
      return { ...state, ...payload };
    default:
      return state;
  }
}
