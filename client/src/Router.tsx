import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./layouts/Navigation";
import App from "./App";
import { UserList } from "./components/UserList";
import { ItemsPage } from "./components/ItemsPage";
import { ComponentPage } from "./components/ComponentPage";
import { ComponentShowcase } from "./components/ComponentShowcase";
import SpeechReader from "./components/SpeechReader";
import { TodoApp } from "./features/TodoApp/components/TodoApp";
import { MockTodoRepository } from "./features/TodoApp/repository/mockTodoRepository";

const repo = new MockTodoRepository();

export function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/todoApp" element={<TodoApp repo={repo} />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/components" element={<ComponentPage />} />
        <Route path="/showcase" element={<ComponentShowcase />} />
      </Routes>
    </BrowserRouter>
  );
}
