"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';

// Define the fetcher function
const fetcher = (url) => fetch(url).then(res => res.json());

export default function UserInfoPage({ params }) {
  // Destructure the id from the params to use it in the fetcher
  const { id } = params;

  // Use SWR to fetch data based on the id
  const { data, error } = useSWR(`https://dummyjson.com/users/${id}`, fetcher);

  if (error) {
    return <h1>Error occurred: {error.message || 'An unexpected error occurred'}</h1>;
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p><strong>First Name:</strong> {data.firstName}</p>
      <p><strong>Last Name:</strong> {data.lastName}</p>
      {/* Add more user details as needed */}
    </div>
  );
}
