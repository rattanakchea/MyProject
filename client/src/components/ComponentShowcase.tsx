import React, { useMemo, useState } from "react";
import * as Components from ".";

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
        return key;
        // const val: any = (Components as any)[key];
        // return (
        //   typeof val === "function" || (typeof val === "object" && val !== null)
        // );
      }),
    [],
  );

  const SelectedComponent: React.ComponentType<any> | undefined = (
    Components as any
  )[selected];

  return (
    <div style={{ display: "flex", flex: 1 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "0 0 15em",
        }}
      >
        <h3>Component Showcase</h3>
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

        <p style={{ marginTop: "auto" }}>built with love</p>
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
