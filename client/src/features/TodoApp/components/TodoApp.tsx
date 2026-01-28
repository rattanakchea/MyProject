import { MockTodoRepository } from "../repository/mockTodoRepository";
import { TodoRepository } from "../repository/TodoRepository";
import { useTodos } from "../useTodos";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

// take a prop repo: TodoRepository
/**
 * TodoApp component that serves as the main container for the todo application.
 *
 * @param {Object} props - The component props
 * @param {TodoRepository} props.repo - The repository instance for managing todo data operations
 * @returns {JSX.Element} The rendered TodoApp component with a container, heading, and TodoList
 *
 * @note The `repo` parameter is currently unused. Consider using it to fetch todos or implement todo operations.
 */

// { repo } → object destructuring
export function TodoApp({ repo }: { repo: TodoRepository }) {
  const { state, addTodo } = useTodos(repo);
  const { todos, loading, error } = state;

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2> TodoApp Component</h2>

      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={() => {}} onDelete={() => {}} />
    </div>
  );
}
