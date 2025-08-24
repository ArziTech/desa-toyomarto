// src/app/about/page.tsx
import React from 'react'
import Image from 'next/image'
import Hero from "@/components/sections/hero";
import bgHero from "@/public/hero_candi_background.png";
import Destinations from "@/components/sections/destinations";
import sumberawan from "@/public/about_candi_sumberawan.png"
import {destinations} from "@/constants/destinations";
import {getTranslations} from "next-intl/server";

const Page = async () => {
  const t = await getTranslations('About');
  return (
      <div className={'w-full'}>
        <Hero title={'Candi Sumberawan'}
              subtitle={t('subtitle')}
              image={bgHero}/>
        <div className="container mx-auto text-lg indent-8 text-justify flex flex-col gap-6 py-8">
          <p>{t('history_1')}</p>
          <Image
              src={sumberawan}
              alt={'Gambar dari candisumberawan'}
              className={'mx-auto'}
          />
          <p>{t('history_2')}</p>
          <p>{t('history_3')}</p>
        </div>
        <Destinations data={destinations}/>
      </div>
  )
}
export default Page