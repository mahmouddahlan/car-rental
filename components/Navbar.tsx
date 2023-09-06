import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
      <Image
          src='/logo3.svg'
          width={5}
          height={5}
          className='absolute w-[50px] h-[50px] ml-40'
          alt='car model'
        />
        <h1 className="text-2xl font-extrabold tracking-widest  sm:text-[24px] text-[30px]">CarLink</h1>
      </Link>
      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles="bg-primary-blue text-white rounded-full mt-3"
      />
    </nav>
  </header>
);

export default NavBar;
