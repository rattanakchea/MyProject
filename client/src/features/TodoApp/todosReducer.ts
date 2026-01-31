// To convert from useState to useReducer:
// a Reducer deals with state transitions based on action types

import { State } from "./repository/todo.model";

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
export function todosReducer(state: State, action: Action) {
  const { type, payload } = action;

  switch (type) {
    case "LOAD_START":
      return { ...state, ...payload };
    case "LOAD_SUCCESS":
      return { ...state, ...payload };
    case "ADD_OPTIMISTIC":
      return { ...state, todos: [...state.todos, payload.todo] };
    case "UPDATE":
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === payload.todo.id ? payload.todo : t,
        ),
      };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== payload.id),
      };
    default:
      return state;
  }
}
