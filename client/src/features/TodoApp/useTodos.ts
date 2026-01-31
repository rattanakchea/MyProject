import { useEffect, useReducer } from "react";
import { todosReducer } from "./todosReducer";
import { TodoRepository } from "./repository/TodoRepository";
import { State, Todo } from "./repository/todo.model";

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
    console.log("Fetched usedTodo:");

    dispatch({ type: "LOAD_START", payload: { loading: true, error: null } });
    repo.getTodos().then((todos) => {
      // tood when this line run twice?
      dispatch({
        type: "LOAD_SUCCESS",
        payload: { todos, loading: false, error: null },
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repo]); // Only run on mount, not when repo changes

  const addTodo = async (title: string) => {
    try {
      await repo.createTodo(title);
      // Reload all todos from repository
      const todos = await repo.getTodos();
      dispatch({
        type: "LOAD_SUCCESS",
        payload: { todos, loading: false, error: null },
      });
    } catch (error) {
      dispatch({ type: "ERROR", payload: { error } });
    }
  };

  const toggleTodo = async (todo: Todo) => {
    const updated = { ...todo, completed: !todo.completed };
    dispatch({ type: "UPDATE", payload: { todo: updated } });
    await repo.updateTodo(updated);
  };

  const deleteTodo = async (id: string) => {
    dispatch({ type: "DELETE", payload: { id } });
    await repo.deleteTodo(id);
  };

  return { state, addTodo, toggleTodo, deleteTodo };
}
