import React from 'react'
import {Facebook, Instagram, Youtube} from "lucide-react";
import Image from 'next/image'
import logoColor from '../../../public/logo_desa_color.svg'
import arzilogo from '../../../public/arzi-logo.svg'
import Link from "next/link";

const Footer = () => {
  return (
      <footer className={'w-full bg-[#F5F5F5]'}>
        <div className={'container flex flex-col gap-2 items-center mx-auto py-8'}>
          <div className={'flex flex-col md:flex-row item-center' +
              ' justify-center text-center gap-4 text-xl'}>
            <Link href={'/'}>Home</Link>
            <Link href={'/profile'}>Profile</Link>
            <Link href={'/services'}>Services</Link>
            <Link href={'/articles'}>Articles</Link>
            <Link href={'/about'}>About</Link>
          </div>
          <Image src={logoColor} alt={'Logo Desa Wisata Toyomart'} />
          <div className="flex gap-2">
            <Link href={'https://instagram.com/'}>
              <Instagram />
            </Link>
            <Link href={'https://facebook.com/'}>
              <Facebook />
            </Link>
            <Link href={'https://youtube.com/'}>
              <Youtube />
            </Link>
          </div>
          <div className={'w-full border-t-1 border-black h-px'} />
          <div className={'text-center'}>

            <Link href={'https://arzi.vercel.app'}
                  className={'flex items-center justify-center'}>
              <Image src={arzilogo} alt={'developed by arzi'} width={48}
                     height={48}/><span>developer info </span>
            </Link>
            <p>
              Copyright &copy; {new Date().getFullYear()}. All rights
              Reserved. </p>
          </div>

        </div>
      </footer>)
}
export default Footer
