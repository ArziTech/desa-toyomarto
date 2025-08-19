import React from 'react'
import {Facebook, Instagram, Youtube} from "lucide-react";
import Image from 'next/image'
import logoColor from '../../../public/logo_desa_color.svg'
import Link from "next/link";

const Footer = () => {
  return (
      <footer className={'w-full bg-[#F5F5F5]'}>
        <div className={'container flex flex-col gap-2 items-center mx-auto py-8'}>
          <div className={'flex gap-4 text-xl'}>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Profile</Link>
            <Link href={'/'}>Services</Link>
            <Link href={'/'}>Articles</Link>
            <Link href={'/'}>About</Link>
          </div>
          <Image src={logoColor} alt={'Logo Desa Wisata Toyomart'} />
          <div className="flex gap-2">
            <Instagram />
            <Facebook />
            <Youtube />
          </div>
          <div className={'w-full border-t-1 border-black h-px'} />
          <div className={'text-center'}>
            <p>
              Copyright &copy; {new Date().getFullYear()}. All rights Reserved.
            </p>
            <Link href={'https://arzi.vercel.app'}>
              <p>developer info!</p>
            </Link>
          </div>

        </div>
      </footer>
  )
}
export default Footer
