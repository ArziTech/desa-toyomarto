import React from 'react'
import Image, { StaticImageData } from "next/image";

interface Props {
//
  image: StaticImageData
  title: string
  subtitle: string
}

const Hero = ({image, title, subtitle} : Props) => {
  return (
      <div className={'relative w-full h-[942px] overflow-hidden'}>
        <Image
            src={image}
            className={'w-full -z-10 object-cover absolute'}
            fill
            alt={'hero background image'}
        />
        <div className={'relative container mx-auto h-full text-white text-center md:text-right px-4 flex flex-col justify-center'}>

        <h1 className={'text-7xl mb-4 font-playfair relative '}>{title}</h1>
        <p className={'text-xl max-w-3xl ms-auto'}>{subtitle}</p>
        </div>
      </div>
  )
}
export default Hero
