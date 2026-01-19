import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import App from "./App";
import { UserList } from "./components/UserList";
import { ItemList } from "./components/ItemList";

export function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users" element={<UserList users={[]} />} />
        <Route path="/items" element={<ItemList items={[]} />} />
      </Routes>
    </BrowserRouter>
  );
}
