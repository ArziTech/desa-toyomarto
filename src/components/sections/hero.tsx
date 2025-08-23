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
      <div className={'relative w-full h-fit  overflow-hidden'}>
        <Image
            src={image}
            className={'-z-10 mt-16 lg:mt-0 mx-auto object-cover relative'}
            alt={'hero background image'}
        />
        <div className={' container mx-auto absolute inset-0' +
            ' text-white text-center md:text-right px-8 flex flex-col' +
            ' justify-center'}>

          <h1 className={'text-7xl mb-4 font-playfair relative '}>{title}</h1>
          <p className={'text-xl max-w-3xl ms-auto'}>{subtitle}</p>
        </div>
      </div>
  )
}
export default Hero
