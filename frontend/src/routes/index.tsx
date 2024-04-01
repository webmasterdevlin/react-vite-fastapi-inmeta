import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { api } from '../http-client/api-config.ts';

export const Route = createFileRoute('/')({
  component: IndexComponent,
});

function IndexComponent() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('hello/devlin').then(res => {
      setMessage(res.data.message);
    });
  }, []);

  return (
    <div className={'flex h-screen flex-col items-center justify-center'}>
      {message !== '' && <h1>{message}!</h1>}
      <h2>React Vite + FastAPI</h2>
    </div>
  );
}
