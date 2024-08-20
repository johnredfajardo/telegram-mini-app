'use client';

import WebApp from '@twa-dev/sdk';
import { useState, useEffect } from 'react';

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  user_name?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const user = WebApp.initDataUnsafe.user;
    if (user) {
      setUserData(user as UserData);
    }
  }, []);

  return (
    <main className="p-4">
      {userData ? (
        <>
          <h1 className="text-2xl font-bold mb-4">User Data</h1>
          <ul>
            <li>ID: {userData.id}</li>
            <li>First Name: {userData.first_name}</li>
            <li>Last Name: {userData.last_name ?? ''}</li>
            <li>Username: {userData.user_name ?? ''}</li>
            <li>Language Code: {userData.language_code}</li>
            <li>Is Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
          </ul>
        </>
      ) : (
        <span className="text-gray-700">No data</span>
      )}
    </main>
  );
}
