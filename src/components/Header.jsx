import React from 'react';
import { AiFillTwitterSquare, AiFillLinkedin} from 'react-icons/ai';

const Header = () => {
  return (
    <header className="bg-white text-[173e26] pl-6 pr-6 flex justify-between">
      <div className="container mx-auto flex">
        <div className='flex'><AiFillTwitterSquare color='#173e26' size={25}/> <AiFillLinkedin color='#173e26' size={25}/></div>
        <div className="text-[12px] space-x-2 ml-auto font-semibold text-right flex w-fit">Ethio-China St, KT 12 Building, 6th Floor, Suite 601, P.O.Box 2255, Addis Ababa, Ethiopia</div>
      </div>
    </header>
  );
};

export default Header;
