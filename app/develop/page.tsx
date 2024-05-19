import { Button } from '@/components/ui/button';
import Header from '../../components/header/Header';
import Link from 'next/link';

const Page = () => {
  const data = ['projects', 'experiences', 'about', 'contact'];
  return (
    <>
      <div className='h-screen w-screen'>
        <div className='absolute w-full '>
          <Header />
        </div>
        <div className='grid grid-cols-6 h-full'>
          <div className='col-span-1 flex flex-col border-2 justify-end items-start border-border h-full'>
            {data.map((item, index) => {
              return (
                <button key={index} className='uppercase font-bold text-4xl transition-all duration-150 hover:text-gray'>
                  {item}
                </button>
              );
            })}
          </div>
          <div className='col-span-5 flex justify-center flex-col gap-20 items-center h-full'>
            <h3 className='uppercase font-bold text-8xl'>under construction...</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
