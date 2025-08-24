import React from 'react';
import { FlameKindling, Mountain, Tent, Map } from "lucide-react";
import {getTranslations} from "next-intl/server";

const TourType = async () => {
  const t = await getTranslations('TourType');
  return (
      <section className={'bg-[#D1FFD7] py-16 w-full'}>
        <div className={'container mx-auto'}>
          <span>{t('sectionTitle')}</span>
          <h2 className={'font-playfair text-5xl mb-2 text-accent'}>{t('mainTitle')}</h2>
          <p className={'lg:w-9/12'}>{t('description')}</p>
          <div className={'mt-16 flex flex-wrap justify-center gap-8'}>
            <div className={'flex items-center flex-col text-center'}>
              <Mountain className={'size-24'}/>
              <p className={'text-3xl font-playfair text-accent'}>{t('camping.title')}</p>
              <p className={'w-[268px]'}>{t('camping.description')}</p>
            </div>
            <div className={'flex items-center flex-col text-center'}>
              <Tent className={'size-24'}/>
              <p className={'text-3xl font-playfair text-accent'}>{t('trekking.title')}</p>
              <p className={'w-[268px]'}>{t('trekking.description')}</p>
            </div>
            <div className={'flex items-center flex-col text-center'}>
              <FlameKindling className={'size-24'}/>
              <p className={'text-3xl font-playfair text-accent'}>{t('campfire.title')}</p>
              <p className={'w-[268px]'}>{t('campfire.description')}</p>
            </div>
            <div className={'flex items-center flex-col text-center'}>
              <Map className={'size-24'}/>
              <p className={'text-3xl font-playfair text-accent'}>{t('culture.title')}</p>
              <p className={'w-[268px]'}>{t('culture.description')}</p>
            </div>
          </div>
        </div>
      </section>
  );
}

export default TourType;
