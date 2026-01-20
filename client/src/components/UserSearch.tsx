// Input box
// List of users
// Typing filters users in real time
// Case-insensitive search
// Clean, readable React code

import { useState } from "react";

// static data, outside component to avoid re-render
const USERS = ["Rattanak", "Saysomaly", "Sovandaro", "Devin", "Julina"];

export function UserSearch() {
  const [search, setSearch] = useState("");

  const filteredUsers = USERS.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container">
      <h2>User Search</h2>

      <ul>
        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
}
