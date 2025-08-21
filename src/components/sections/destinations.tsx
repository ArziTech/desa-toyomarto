"use client";
import {Carousel, Card, CardProps} from "@/components/ui/apple-cards-carousel";

const Destinations = ({data}: {data: CardProps[]}) => {
  const cards = data.map((card) => (
      <Card key={card.src} card={card} bookingLink={card.bookingLink} />
  ));

  return (
    <section className={'w-full'}>
      <div className={'container mx-auto py-16'}>
        <span>Where to go?</span>
        <h2 className={'font-playfair text-5xl mb-2 text-accent'}>Popular Destinations</h2>
        <p className={'lg:w-9/12'}>Jelajahi pilihan kami yang telah disusun dari tempat-tempat wisata dalam daftar beragam tempat yang wajib dikunjungi ini. Kami telah mengumpulkan destinasi terbaik untuk membangkitkan semangat petualangan Anda.</p>
        <Carousel items={cards} />
      </div>
    </section>
  )
}
export default Destinations