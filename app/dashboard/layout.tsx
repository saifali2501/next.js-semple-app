import React from "react";
import Link from "next/link";

// Define the props interface
interface LayoutProps {
  children: React.ReactNode;
}

// Correctly use the props in the function component
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <nav className="bg-black text-white py-5 px-5 flex justify-between">
        <h1 className="text-4xl font-bold ">Logo</h1>
        <ul className="flex items-center gap-8 text-2xl">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </nav>
      <div className="flex">
        <div className="h-screen bg-black w-[14vw] text-white text-2xl p-4">
          <ul className="pt-5 flex flex-col gap-5">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/dashboard/todos">Todos</Link>
            </li>
            <li>
              <Link href="/dashboard/user">Users</Link>
            </li>
            <li>
              <Link href="/dashboard/profile">Profile</Link>
            </li>
          </ul>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
