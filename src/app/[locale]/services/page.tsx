import React from 'react'
import Hero from "@/components/sections/hero";
import bgHero from "@/public/hero_image_background.png";
import Testimonials from "@/components/sections/testimonials";
import {Card, Carousel} from "@/components/ui/apple-cards-carousel";
import { natural_tourism, tourists_attraction} from "@/constants/destinations";
import PackageList from "@/components/sections/package-list";

const Page = () => {
  const natural_tourism_cards = natural_tourism.map((card) => (
      <Card key={card.src} card={card} bookingLink={card.bookingLink} />
  ));

  const tourists_attraction_cards = tourists_attraction.map((card) => (
      <Card key={card.src} card={card} bookingLink={card.bookingLink} />
  ));

  return (<div className={'w-full'}>
    <Hero title={''}
          subtitle={''}
          image={bgHero}/>
    <section className={'w-full'}>
      <div className={'container mx-auto py-16'}>
        <span>Where to go?</span>
        <h2 className={'font-playfair text-5xl mb-2 text-accent'}>Wisata Alam</h2>
        <p className={'lg:w-9/12'}>Jelajahi pilihan kami yang telah disusun dari
          tempat-tempat wisata dalam daftar beragam tempat yang wajib dikunjungi
          ini. Kami telah mengumpulkan destinasi terbaik untuk membangkitkan
          semangat petualangan Anda.</p>
        <Carousel items={natural_tourism_cards}/>
      </div>
    </section>
    <section className={'w-full'}>
      <div className={'container mx-auto py-16'}>
        <span>Where to go?</span>
        <h2 className={'font-playfair text-5xl mb-2 text-accent'}>Atraksi Wisata</h2>
        <p className={'lg:w-9/12'}>Jelajahi pilihan kami yang telah disusun dari
          tempat-tempat wisata dalam daftar beragam tempat yang wajib dikunjungi
          ini. Kami telah mengumpulkan destinasi terbaik untuk membangkitkan
          semangat petualangan Anda.</p>
        <Carousel items={tourists_attraction_cards}/>
      </div>
    </section>
    <PackageList />
    <Testimonials/>
  </div>)
}
export default Page
