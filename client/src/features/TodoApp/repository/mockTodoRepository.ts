import { createMockTodos, Todo } from "./todo.model";
import { TodoRepository } from "./TodoRepository";

// Delay decorator
function delayMethod(ms = 2000) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      await new Promise((resolve) => setTimeout(resolve, ms));
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}

export class MockTodoRepository implements TodoRepository {
  private todos: Todo[] = [];

  constructor() {
    this.todos = createMockTodos(2);
  }

  @delayMethod(1000)
  async getTodos(): Promise<Todo[]> {
    return this.todos;
  }

  //   @delayMethod()
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

  async updateTodo(todo: Todo) {
    this.todos = this.todos.map((t) =>
      t.id === todo.id ? { ...todo, updatedAt: Date.now() } : t,
    );
    return todo;
  }

  async deleteTodo(id: string) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
}
