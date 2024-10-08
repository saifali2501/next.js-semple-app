// app/page.tsx

"use client"; // Marks this file as a client component

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div>
      <h1>Authentication</h1>
      {status === "authenticated" ? (
        <p>Welcome, {session?.user?.name}!</p>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}
