'use client'

import React from 'react';
import { IoLogoDiscord } from 'react-icons/io5'

const DiscordHover: React.FC = () => {
  const [hover, setHover] = React.useState<boolean>(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className='flex flex-col items-center'>
      <IoLogoDiscord
        className={`transition text-second hover:text-third hover:scale-110`} 
        size="32px"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {
        hover && (
          <div style={{ position: 'absolute', bottom: '145px' }} className='animate-slide'>
            <p className='transition text-third text-[12px]'>dot.reges</p>
          </div>
        )
      }
    </div>
  );
}

export default DiscordHover;