// src/app/services/page.tsx
import React from 'react';
import Hero from "@/components/sections/hero";
import bgHero from "@/public/hero_image_background.png";
import Testimonials from "@/components/sections/testimonials";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { natural_tourism, tourists_attraction } from "@/constants/destinations";
import PackageList from "@/components/sections/package-list";
import { getTranslations } from "next-intl/server";

const Page = async () => {
  const t = await getTranslations('Services');

  const natural_tourism_cards = natural_tourism.map((card) => (
      <Card key={card.src} card={card} bookingLink={card.bookingLink} />
  ));

  const tourists_attraction_cards = tourists_attraction.map((card) => (
      <Card key={card.src} card={card} bookingLink={card.bookingLink} />
  ));

  return (
      <div className={'w-full'}>
        <Hero
            title={''}
            subtitle={''}
            image={bgHero}
        />
        <section className={'w-full'}>
          <div className={'container mx-auto py-16'}>
            <span>{t('naturalTourism.sectionTag')}</span>
            <h2 className={'font-playfair text-5xl mb-2 text-accent'}>{t('naturalTourism.title')}</h2>
            <p className={'lg:w-9/12'}>{t('naturalTourism.description')}</p>
            <Carousel items={natural_tourism_cards} />
          </div>
        </section>
        <section className={'w-full'}>
          <div className={'container mx-auto py-16'}>
            <span>{t('touristAttractions.sectionTag')}</span>
            <h2 className={'font-playfair text-5xl mb-2 text-accent'}>{t('touristAttractions.title')}</h2>
            <p className={'lg:w-9/12'}>{t('touristAttractions.description')}</p>
            <Carousel items={tourists_attraction_cards} />
          </div>
        </section>
        <PackageList />
        <Testimonials />
      </div>
  );
};

export default Page;
