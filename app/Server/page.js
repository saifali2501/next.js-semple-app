// app/users/page.jsx
import React from 'react';

// This is a server component by default in the `app` directory
export default async function Page() {
  // Fetch data directly inside the component
  const res = await fetch('https://dummyjson.com/users', { cache: 'no-store' }); // cache: 'no-store' ensures fresh data

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  console.log("Fetched Data:===>", data);

  return (
    <div>
      <h1>Users (SSR)</h1>
      {data.users.length > 0 ? (
        <ul>
          {data.users.map((user) => (
            <li key={user.id}>
              {user.firstName} {user.lastName} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}
