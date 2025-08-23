import React from 'react'
import {
  Card as WideCard,
  Carousel as Widecarousel
} from "@/components/ui/wide-carousel";
import {packages} from "@/constants/destinations";

const PackageList = () => {
  const packages_cards = packages.map((card, index) => (
      <WideCard key={card.src} card={card} bookingLink={card.bookingLink}  index={index}/>
  ));
  return (<section className={'w-full'}>
        <div className={'container mx-auto py-16'}>
          <span>Where to go?</span>
          <h2 className={'font-playfair text-5xl mb-2 text-accent'}>Paket
            Wisata</h2>
          <p className={'lg:w-9/12'}>Jelajahi pilihan kami yang telah disusun
            dari
            tempat-tempat wisata dalam daftar beragam tempat yang wajib
            dikunjungi
            ini. Kami telah mengumpulkan destinasi terbaik untuk membangkitkan
            semangat petualangan Anda.</p>
          <Widecarousel items={packages_cards}/>
        </div>
      </section>)
}
export default PackageList
