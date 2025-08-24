import React from 'react';
import { Carousel, Card, CardProps } from "@/components/ui/apple-cards-carousel";
import {getTranslations} from "next-intl/server";

const Destinations = async ({ data }: { data: CardProps[] }) => {
  const t = await getTranslations('Destinations');

  const cards = data.map((card) => (
      <Card key={card.src} card={card} bookingLink={card.bookingLink} />
  ));

  return (
      <section className={'w-full'}>
        <div className={'container mx-auto py-16'}>
          <span>{t('sectionTag')}</span>
          <h2 className={'font-playfair text-5xl mb-2 text-accent'}>{t('title')}</h2>
          <p className={'lg:w-9/12'}>{t('description')}</p>
          <Carousel items={cards} />
        </div>
      </section>
  );
};

export default Destinations;
