import React from 'react'
import Hero from "@/components/sections/hero";
import bgHero from "../../../public/hero_image_background.png";
import Testimonials from "@/components/sections/testimonials";

const Page = () => {
  return (
      <div className={'w-full'}>
        <Hero
            title={'Desa Wisata Toyomarto'}
            subtitle={'Berbagai keindahan potensi wisata didalamnya. Mulai dari wisata alam, buatan, dan budaya. Maksimalkan liburan anda bersama kami.'}
            image={bgHero}
        />
        <Testimonials />
      </div>
  )
}
export default Page
