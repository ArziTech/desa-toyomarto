import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo_desa_white.svg'
import Link from "next/link";

const Navbar = () => {
  return (
      <nav className={'w-full fixed z-[100] bg-black/40 backdrop-blur'}>
        <div className={'container flex justify-between mx-auto text-center'}>
          <Image src={logo} alt={'logo desa toyomarto'}></Image>
          <div className={'text-white items-center  flex gap-4 text-xl'}>
            <Link href={'/'}>Home</Link>
            <Link href={'/profile'}>Profile</Link>
            <Link href={'/services'}>Services</Link>
            <Link href={'/articles'}>Article</Link>
            <Link href={'/about'}>About</Link>

          </div>
        </div>
      </nav>
  )
}
export default Navbar
