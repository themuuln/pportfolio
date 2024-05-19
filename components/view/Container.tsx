import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex h-full max-w-full justify-center'>
      <div className='container'>{children}</div>
    </div>
  );
};

export default Container;
