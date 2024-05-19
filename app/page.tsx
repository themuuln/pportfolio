'use client';

import { useState } from 'react';
import { Container, Type } from '../components';
import { ETypes } from '../components/type/types';

export default function Home() {
  const [type, setType] = useState(ETypes.default);

  return (
    <>
      <Container>
        <main className='flex min-h-screen justify-center items-center'>
          <div className='font-bold uppercase text-gray'>
            <Type type={type} setType={setType} />
          </div>
        </main>
      </Container>
    </>
  );
}
