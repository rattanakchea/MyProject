import { createMockTodos, Todo } from "./todo.model";
import { TodoRepository } from "./TodoRepository";

export class MockTodoRepository implements TodoRepository {
  private todos: Todo[] = [];

  constructor() {
    this.todos = createMockTodos(2);
  }

  async getTodos(): Promise<Todo[]> {
    return this.todos;
  }

  async createTodo(title: string): Promise<Todo> {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.todos.unshift(newTodo);
    return newTodo;
  }

  async updateTodo(todo: Todo): Promise<Todo> {
    return todo;
  }

  async deleteTodo(id: string): Promise<void> {}
}
