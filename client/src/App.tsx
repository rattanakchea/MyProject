import React from "react";
import { useQuery } from "@tanstack/react-query";
import { UserList } from "./components/UserList";
import { ItemList } from "./components/ItemList";

function App() {
  const { data: users = [], isLoading: usersLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("/api/users");
      if (!res.ok) throw new Error("Failed to fetch users");
      return res.json();
    },
  });

  const { data: items, isLoading: itemsLoading } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await fetch("/api/items");
      console.log("Fetch /api/items response:", res);
      if (!res.ok) throw new Error("Failed to fetch items");
      return res.json();
    },
  });

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>📱 Full-Stack App</h1>
      <p>This is your full-stack monorepo project!</p>

      <hr />

      {usersLoading ? <p>Loading users...</p> : <UserList users={users} />}

      {itemsLoading ? (
        <p>Loading items...</p>
      ) : (
        <ItemList items={items || []} />
      )}
    </div>
  );
}

export default App;
