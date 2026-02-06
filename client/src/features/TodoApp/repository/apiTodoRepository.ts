import { TodoRepository } from "./TodoRepository";
import { Todo, createMockTodos } from "./todo.model";

type ApiTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const API_BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export class ApiTodoRepository implements TodoRepository {
  async getTodos(): Promise<Todo[]> {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch todos: ${response.statusText}`);
    }
    const todos = await response.json();
    console.log("api: ", todos);
    return todos;
    // return apiTodos.map((todo) => this.mapApiTodoToTodo(todo));
  }

  async createTodo(title: string): Promise<Todo> {
    return createMockTodos(1);
  }

  async updateTodo(todo: Todo): Promise<Todo | null> {
    return null;
  }

  async deleteTodo(id: string) {}
}
