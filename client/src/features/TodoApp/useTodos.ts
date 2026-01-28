import { useEffect, useReducer } from "react";
import { todosReducer } from "./todosReducer";
import { TodoRepository } from "./repository/TodoRepository";
import { createMockTodos, State } from "./repository/todo.model";

const intialState: State = {
  todos: [],
  loading: false,
  error: null,
};
// hook
export function useTodos(repo: TodoRepository) {
  // dispatch(object) => void
  const [state, dispatch] = useReducer(todosReducer, intialState);

  // fetchTodos function to load todos from an API
  useEffect(() => {
    dispatch({ type: "LOAD_START", payload: { loading: true, error: null } });
    repo.getTodos().then((todos) => {
      console.log("Fetched todos:", todos);
      dispatch({
        type: "LOAD_SUCCESS",
        payload: { todos, loading: false, error: null },
      });
    });
  }, [repo]);

  const addTodo = async (title: string) => {};

  return { state, addTodo };
}
