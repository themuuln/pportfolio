import Link from 'next/link';
import Logo from '../logo/Logo';
import { MdOutlineArrowForward } from 'react-icons/md';

const Header = () => {
  return (
    <header className='h-20 font-semibold uppercase sticky top-0 left-0 w-full border-[2px] border-border'>
      <div className='grid grid-cols-6 h-full'>
        <div className='col-span-1 flex justify-center items-center w-full h-full'>
          <Link className='flex gap-2 items-center hover:text-gray duration-150 transition-all hover:scale-110 text-4xl' href={'/'}>
            <MdOutlineArrowForward className='rotate-180' />
            <Logo />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
