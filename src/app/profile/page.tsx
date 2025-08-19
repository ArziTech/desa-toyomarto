import React from 'react'
import Hero from "@/components/sections/hero";
import bgHero from "../../../public/hero_image_background.png";
import {destinations} from "@/constants/destinations";
import Destinations from "@/components/sections/destinations";
import Testimonials from "@/components/sections/testimonials";
import Blognarticles from "@/components/sections/blognarticles";

const Page = () => {
  return (
    <div className={'w-full'}>
      <Hero title={'Desa Wisata Toyomarto'}
            subtitle={'Berbagai keindahan potensi wisata didalamnya. Mulai dari wisata alam, buatan, dan budaya. Maksimalkan liburan anda bersama kami.'}
            image={bgHero}/>
      <Destinations data={destinations} />
      <Blognarticles />
      <Testimonials />
    </div>
  )
}
export default Page
