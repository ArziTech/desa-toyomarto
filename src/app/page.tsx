import Hero from "@/components/sections/hero";
import bgHero from '../../public/hero_image_background.png'
import TourType from "@/app/_components/tour-type";
import Destinations from "@/components/sections/destinations";
import Blognarticles from "@/components/sections/blognarticles";
import Testimonials from "@/components/sections/testimonials";
import {destinations} from "@/constants/destinations";

export default function Home() {
  return (
   <div className={'w-full'}>
     <Hero
         title={'Desa Wisata Toyomarto'}
         subtitle={'Berbagai keindahan potensi wisata didalamnya. Mulai dari wisata alam, buatan, dan budaya. Maksimalkan liburan anda bersama kami.'}
         image={bgHero}
     />
     <TourType />
     <Destinations data={destinations} />
     <Blognarticles />
     <Testimonials />
   </div>
  );
}
