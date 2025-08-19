import React from 'react'
import {FlameKindling, Mountain, Tent, Map} from "lucide-react";

const TourType = () => {
  return (
      <section className={'bg-[#D1FFD7] py-16 w-full'}>
        <div className={'container mx-auto'}>
          <span>Tour Types</span>
          <h2 className={'font-playfair text-5xl mb-2 text-accent'}>Adventure & Acitivities</h2>
          <p className={'lg:w-9/12'}>Jelajahi destinasi mendebarkan yang akan membuat jantung Anda berdebar. Dari pegunungan yang terjal hingga hutan lebat, mulailah perjalanan tak terlupakan yang akan menguji batasan Anda dan menciptakan kenangan abadi. Selami yang tidak dikenal, taklukkan tantangan alam, dan tulis kisah epik petualangan Anda sendiri.</p>
          <div className={'mt-16 flex justify-center gap-8'}>
            <div className={'flex  items-center' +
                ' flex-col text-center'}>
              <Mountain className={'size-24'} />
              <p className={'text-3xl font-playfair text-accent'}>Camping</p>
              <p className={'w-[268px]'}>Nikmati alam bebas, rasakan petualangan
                tak terlupakan, dan buat kenangan indah</p>
            </div>
            <div className={'flex  items-center' +
                ' flex-col text-center'}>
              <Tent className={'size-24'}/>
              <p className={'text-3xl font-playfair text-accent'}>Trekking</p>
              <p className={'w-[268px]'}>Pemandangan yang menakjubkan, jalur tersembunyi, desa terpencil, keindahan alam</p>
            </div>
            <div className={'flex  items-center' +
                ' flex-col text-center'}>
              <FlameKindling className={'size-24'} />
              <p className={'text-3xl font-playfair text-accent'}>Campfire</p>
              <p className={'w-[268px]'}>Keseruan dan kehangatan api unggun di tengah alam yang membuat pengalaman tidak terlupakan</p>
            </div>
            <div className={'flex  items-center' +
                ' flex-col text-center'}>
              <Map className={'size-24'} />
              <p className={'text-3xl font-playfair text-accent'}>Culture</p>
              <p className={'w-[268px]'}>Nikmati alam bebas, rasakan petualangan
                tak terlupakan, dan buat kenangan indah</p>
            </div>
          </div>
        </div>
      </section>)
}
export default TourType
