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
      <div className='group desktop:flex mobile:hidden flex-col items-center'>
        <IoLogoDiscord
          className={`transition text-second group-hover:text-third group-hover:scale-110 w-[50px]`}
          size="40px"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {
          hover && (
            <div>
              <p className='transition group-hover:text-third group-hover:scale-110 text-[12px]'>dot.reges</p>
            </div>
          )
        }
      </div>
      <div className='group desktop:hidden mobile:flex flex-col items-center'>
        <IoLogoDiscord
          className={`transition text-second group-hover:text-third group-hover:scale-110`}
          size="40px"
        />
        <div>
          <p className='transition group-hover:text-third group-hover:scale-110 text-second text-[12px]'>dot.reges</p>
        </div>
      </div>

    </div>
  );
}

export default DiscordHover;