// Input box
// List of users
// Typing filters users in real time
// Case-insensitive search
// Clean, readable React code

import { useEffect, useMemo, useState } from "react";

// static data, outside component to avoid re-render
// const USERS = ["Rattanak", "Saysomaly", "Sovandaro", "Devin", "Julina"];
const USERS = Array.from({ length: 100000 }, (_, i) => `User ${i}`);

export function UserSearch() {
  const [search, setSearch] = useState("");

  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const filteredUsers = useMemo(() => {
    return USERS.filter((user) =>
      user.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
  }, [debouncedSearch]);

  // const filteredUsers = USERS.filter((user) =>
  //   user.toLowerCase().includes(debouncedSearch.toLowerCase()),
  // );

  return (
    <div className="container">
      <h2>User Search</h2>

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
