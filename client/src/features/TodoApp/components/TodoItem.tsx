import { memo } from "react";
import { Todo } from "../repository/todo.model";

export const TodoItem = memo(function TodoItem({
  todo,
  onToggle,
  onDelete,
}: {
  todo: Todo;
  onToggle: (todo: Todo) => void;
  onDelete: (id: string | number) => void;
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo)}
      />
      {todo.title}
      <button
        className="delete-button"
        style={{ padding: "3px", margin: "0 5px" }}
        onClick={() => onDelete(todo.id)}
      >
        x
      </button>
    </li>
  );
});
