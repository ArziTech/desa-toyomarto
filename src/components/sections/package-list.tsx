// src/components/sections/package-list.tsx

import React from 'react';
import { Card as WideCard, Carousel as Widecarousel } from "@/components/ui/wide-carousel";
import { packages } from "@/constants/destinations";
import {getTranslations} from "next-intl/server";

const PackageList = async () => {
  const t = await getTranslations('PackageList');

  const packages_cards = packages.map((card, index) => (
      <WideCard key={card.src} card={card} bookingLink={card.bookingLink} index={index}/>
  ));

  return (
      <section className={'w-full'}>
        <div className={'container mx-auto py-16'}>
          <span>{t('sectionTag')}</span>
          <h2 className={'font-playfair text-5xl mb-2 text-accent'}>{t('title')}</h2>
          <p className={'lg:w-9/12'}>{t('description')}</p>
          <Widecarousel items={packages_cards}/>
        </div>
      </section>
  );
};

export default PackageList;
