import { useQuery } from "@tanstack/react-query";
import React from "react";

interface Item {
  id: number;
  title: string;
  description?: string;
  user: {
    name: string;
  };
}

export function ItemList({ items }: { items: Item[] }) {
  return (
    <div className="container">
      <h2>Items</h2>
      {items.length === 0 ? (
        <p>No items yet</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong> - {item.description}
              <br />
              <small>by {item.user.name}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
