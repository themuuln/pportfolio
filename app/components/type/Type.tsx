'use client';

import { useEffect, useRef, useState } from 'react';
import { buttonData } from './data';
import { ETypes, IButtonData } from './types';

const Type = () => {
  const [hoverOffset, setHoverOffset] = useState({ type: ETypes.design, offset: 0, dWidth: 0 });
  const buttonsRef = useRef<HTMLDivElement>(null);
  const dRef = useRef<any>(null);

  useEffect(() => {
    if (hoverOffset.dWidth === 0) {
      setHoverOffset({ ...hoverOffset, dWidth: dRef.current.offsetWidth });
    }
  }, [dRef?.current?.offsetWidth]);

  const handleHover = (type: ETypes, event: any) => {
    if (buttonsRef.current) {
      const offset = event.currentTarget.offsetTop - buttonsRef.current.offsetTop;
      const dWidth = dRef.current.offsetWidth;
      setHoverOffset({ type, offset, dWidth });
    }
  };

  const Buttons = ({ data }: { data: IButtonData }) => (
    <p
      onMouseEnter={(event) => handleHover(data.type, event)}
      className={`flex ${data.type === hoverOffset.type ? 'text-white' : 'text-gray'}  cursor-pointer`}
      style={{
        marginLeft: hoverOffset.dWidth,
      }}
    >
      {data.label}
    </p>
  );

  return (
    <main className='flex font-bold uppercase min-h-screen flex-col text-gray justify-center items-center'>
      <div className='text-6xl'>
        <p>you want me to</p>
        <div className='text-8xl flex relative'>
          <p
            ref={dRef}
            className='absolute transition-transform duration-300 text-white'
            style={{ transform: `translateY(${hoverOffset.offset}px)` }}
          >
            D
          </p>
          <div ref={buttonsRef} className='flex flex-col'>
            {buttonData.map((x, index) => (
              <Buttons key={index} data={x} />
            ))}
          </div>
        </div>
        <p>your project</p>
      </div>
    </main>
  );
};

export default Type;
