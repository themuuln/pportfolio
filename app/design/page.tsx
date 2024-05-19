import { Button } from '@/components/ui/button';
import Header from '../../components/header/Header';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <div className='h-screen w-screen'>
        <div className='absolute w-full '>
          <Header />
        </div>
        <div className='grid grid-cols-6 h-full'>
          <div className='col-span-1 border-2 flex items-end border-border h-full'>hi</div>
          <div className='col-span-5 flex justify-center flex-col gap-20 items-center h-full'>
            <h3 className='uppercase font-bold text-8xl'>still learning</h3>
            <Link href={'/develop'}>
              <Button size={'lg'} className='uppercase'>
                <div className=''>
                  <span className='text-gray'>navigate to</span> develop
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
