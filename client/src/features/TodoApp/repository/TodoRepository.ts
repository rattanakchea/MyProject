import { Todo } from "./todo.model";

export interface TodoRepository {
  getTodos(): Promise<Todo[]>;
  createTodo(title: string): Promise<Todo>;
  updateTodo(todo: Todo): Promise<Todo | null>;
  deleteTodo(id: string): Promise<void>;
}
