'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

const ClientProtectedPage = () => {
  const { data: session } = useSession({
    required: true,
  });
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>
          This is a client-side protected page
        </h1>
        <h2 className='mt-4 font-medium'>You are logged in as: </h2>
        <p className='mt-4'>{session?.user?.name}</p>
      </div>
    </section>
  );
};

export default ClientProtectedPage;
