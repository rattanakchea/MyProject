import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import App from "./App";
import { UserList } from "./components/UserList";
import { ItemsPage } from "./pages/ItemsPage";
import { ComponentPage } from "./pages/ComponentPage";
import { ComponentShowcase } from "./pages/ComponentShowcase";

export function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users" element={<UserList users={[]} />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/components" element={<ComponentPage />} />
        <Route path="/showcase" element={<ComponentShowcase />} />
      </Routes>
    </BrowserRouter>
  );
}
