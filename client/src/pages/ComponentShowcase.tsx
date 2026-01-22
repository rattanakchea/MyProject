import React, { useMemo, useState } from "react";
import * as Components from "../components";
console.log("typeof component:", typeof Components);

const mockUsers = [
  { id: 1, name: "Alice Example", email: "alice@example.com" },
  { id: 2, name: "Bob Example", email: "bob@example.com" },
];

const mockItems = [
  {
    id: 1,
    title: "Item One",
    description: "First item",
    user: { name: "Alice" },
  },
  {
    id: 2,
    title: "Item Two",
    description: "Second item",
    user: { name: "Bob" },
  },
];
// minimal props mapping for components that need mock data
const mockProps: Record<string, any> = {
  UserList: { users: mockUsers },
  ItemList: { items: mockItems },
};

export function ComponentShowcase() {
  const [selected, setSelected] = useState("");

  // derive available component names from exports in components/index.ts
  const componentNames = useMemo(
    () =>
      Object.keys(Components).filter((key) => {
        const val: any = (Components as any)[key];
        return (
          typeof val === "function" || (typeof val === "object" && val !== null)
        );
      }),
    [],
  );

  const SelectedComponent: React.ComponentType<any> | undefined = (
    Components as any
  )[selected];

  console.log("componentNames:", componentNames);
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          width: "300px",
          padding: "10px",
          borderRight: "1px solid #ccc",
        }}
      >
        <h2>Component Showcase</h2>
        <label>
          Select component:
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {componentNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div
        style={{
          flex: 1,
          marginTop: 20,
          backgroundColor: "#f9f9f9",
          padding: "10px",
        }}
      >
        {SelectedComponent ? (
          <SelectedComponent {...(mockProps[selected] || {})} />
        ) : (
          <p>No component selected</p>
        )}
      </div>
    </div>
  );
}
