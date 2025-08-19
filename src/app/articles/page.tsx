import React from 'react'
import Hero from "@/components/sections/hero";
import bgHero from "../../../public/hero_image_background.png";
import Blognarticles from "@/components/sections/blognarticles";
import Destinations from "@/components/sections/destinations";
import {destinations} from "@/constants/destinations";

const Page = () => {
  return (
    <div className={'w-full'}>
      <Hero title={'Desa Wisata Toyomarto'}
            subtitle={'Berbagai keindahan potensi wisata didalamnya. Mulai dari wisata alam, buatan, dan budaya. Maksimalkan liburan anda bersama kami.'}
            image={bgHero}/>
      <Blognarticles />
      {/**/}
      {/*PUT SOMETHING HERE*/}
      {/**/}
      <Destinations data={destinations} />
    </div>
  )
}
export default Page
