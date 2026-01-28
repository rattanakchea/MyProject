export type Todo = {
  id: number | string;
  title: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number;
};

export type State = {
  todos: Todo[];
  loading: boolean;
  error: string | null;
};

export function createMockTodos(count = 5): Todo[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Mock task ${i + 1}`,
    completed: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }));
}
