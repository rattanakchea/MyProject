import { memo } from "react";
import { Todo } from "../useTodos";

export const TodoItem = memo(function TodoItem({
  todo,
  onToggle,
  onDelete,
}: {
  todo: Todo;
  onToggle: (todo: Todo) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo)}
      />
      {todo.title}
      <button onClick={() => onDelete(todo.id)}>x</button>
    </li>
  );
});
