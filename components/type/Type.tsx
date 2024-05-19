'use client';

import { useEffect, useRef, useState } from 'react';
import { buttonData } from './data';
import { ETypes, IButtonData } from './types';
import Link from 'next/link';

const Type = ({ type, setType }: { type: ETypes; setType: (arg0: ETypes) => void }) => {
  const [hoverOffset, setHoverOffset] = useState({ type: ETypes.design, offset: 0, dWidth: 0 });
  const buttonsRef = useRef<HTMLDivElement>(null);
  const dRef = useRef<any>(null);

  useEffect(() => {
    if (hoverOffset.dWidth === 0) {
      setHoverOffset({ ...hoverOffset, dWidth: dRef.current.offsetWidth });
    }
  }, [dRef?.current?.offsetWidth]);

  const handleHover = (type: ETypes, event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    if (buttonsRef.current) {
      const offset = event.currentTarget.offsetTop - buttonsRef.current.offsetTop;
      if (offset === hoverOffset.offset) {
        return;
      }
      setHoverOffset((prev) => ({ ...prev, type, offset }));
    }
  };

  const Buttons = ({ data }: { data: IButtonData }) => (
    <Link
      href={data.type === ETypes.design ? '/design' : '/develop'}
      onClick={() => {
        setType(data.type);
      }}
      onMouseEnter={(event) => handleHover(data.type, event)}
      className={`flex cursor-pointer transition-all duration-150 hover:text-white`}
      style={{
        marginLeft: hoverOffset.dWidth,
      }}
    >
      {data.label}
    </Link>
  );

  return (
    <div className='text-6xl'>
      <p>you want me to</p>
      <div className='text-8xl flex relative'>
        <p
          ref={dRef}
          className='absolute uppercase cursor-pointer transition-transform duration-150 text-white'
          style={{ transform: `translateY(${hoverOffset.offset}px)` }}
        >
          d
        </p>
        <div ref={buttonsRef} className='flex flex-col'>
          {buttonData.map((x, index) => (
            <Buttons key={index} data={x} />
          ))}
        </div>
      </div>
      <p>your project</p>
    </div>
  );
};

export default Type;
