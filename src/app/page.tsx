import Hero from "@/components/sections/hero";
import bgHero from '../../public/hero_image_background.png'
import TourType from "@/app/_components/tour-type";
import Destinations from "@/components/sections/destinations";
import {CardProps} from "@/components/ui/apple-cards-carousel";
import Blognarticles from "@/components/sections/blognarticles";
import Testimonials from "@/components/sections/testimonials";

const data: CardProps[] = [
  {
    title: "Stupa Sumberawan",
    src: "/destinations/stupa_sumberawan.png",
    // content: <DummyContent />,
  },

  {
    title: "Bukit Kuneer",
    src: "/destinations/bukit_kuneer.png",
    // content: <DummyContent />,
  },
  {
    title: "Griya Anggrek",
    src: "/destinations/anggrek.png",
    // content: <DummyContent />,
  },
  {
    title: "Budug Asu",
    src: "/destinations/budug_asu.png",
    // content: <DummyContent />,
  },
];

export default function Home() {
  return (
   <div className={'w-full'}>
     <Hero
         title={'Desa Wisata Toyomarto'}
         subtitle={'Berbagai keindahan potensi wisata didalamnya. Mulai dari wisata alam, buatan, dan budaya. Maksimalkan liburan anda bersama kami.'}
         image={bgHero}
     />
     <TourType />
     <Destinations data={data} />
     <Blognarticles />
     <Testimonials />
   </div>
  );
}
