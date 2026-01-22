import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ItemList } from "./ItemList";

interface Item {
  id: number;
  title: string;
  description?: string;
  user: {
    name: string;
  };
}

export function ItemsPage() {
  const {
    data: items = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await fetch("/api/items");
      if (!res.ok) throw new Error("Failed to fetch items");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading items...</p>;
  if (error) return <p>Error loading items: {error.message}</p>;

  return <ItemList items={items} />;
}
