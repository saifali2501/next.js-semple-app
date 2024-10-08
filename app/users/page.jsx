"use client";
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
import style from "../user.module.css"

// Define the fetcher function
const fetcher = (url) => fetch(url).then(res => res.json());

export default function Page() {
  // Use SWR to fetch data
  const { data, error } = useSWR('https://dummyjson.com/users', fetcher);

  if (error) {
    return <h1>Error happened: {error.message || 'An unexpected error occurred'}</h1>;
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 className="text-4xl">Hello Saif</h1>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>
            {/* Make sure the URL is correct to pass the user ID */}
            <Link href={`/users/${user.id}`}>
             <div className={style.text}> {user.firstName}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}






 // const [users, setUsers] = useState([]); // Use User[] type for state
  // console.log("=======>", users);

  // useEffect(() => {
  //   async function fetchUsers() {
  //     try {
  //       const response = await fetch("https://dummyjson.com/users");
  //       const data = await response.json();
  //       setUsers(data.users); // Ensure data.users matches the User[] type
  //     } catch (error) {
  //       console.error("Failed to fetch users:", error);
  //     }
  //   }
  //   fetchUsers();
  // }, []);