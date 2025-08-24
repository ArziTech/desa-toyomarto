// src/app/page.tsx atau src/app/page.jsx
import Image from 'next/image';

// Import komponen dan gambar Anda
import Hero from "@/components/sections/hero";
import bgHero from "@/public/hero_image_background.png";
import profile from "@/public/profile.png";
import map_profile from "@/public/map_profile.png";
import { destinations } from "@/constants/destinations";
import Destinations from "@/components/sections/destinations";
import Testimonials from "@/components/sections/testimonials";
import Blognarticles from "@/components/sections/blognarticles";
import {getTranslations} from "next-intl/server";

// Tambahkan 'use client' karena `useTranslations` adalah client-side hook
const Page = async () => {
  // Inisialisasi hook terjemahan
  const t = await getTranslations('Profile');

  return (
      <div className={'w-full'}>
        <Hero title={''}
              subtitle={''}
              image={bgHero}/>

        {/* MAIN CONTENT */}
        <section className={'w-full'}>
          <div className="container pt-16">
            <h2 className={'font-sans font-bold text-5xl'}>
              {t('profile.title')} <span className={'text-primary'}>{t('profile.desaName')}</span>
            </h2>
            <div className={'border-t-2 border-primary w-1/2 my-2'}/>
          </div>
          <div className={'container mx-auto pb-16 flex flex-col lg:flex-row gap-8'}>
            <div className={'flex flex-col gap-2 lg:w-1/2'}>
              <p className={'text-xl text-justify indent-8'}>
                            <span className={'text-xl italic text-3xl font-bold text-primary'}>
                                <i>{t('profile.description_1_highlight')}</i>
                            </span>
                {t('profile.description_1').substring(t('profile.description_1_highlight').length)}
              </p>
            </div>
            <Image src={profile} alt={'Gambar Desa Toyomarto'}
                   className={'lg:w-1/2 object-cover w-full max-lg:order-first'}/>
          </div>

          <div className="container pt-16">
            <h2 className={'font-sans font-bold text-5xl'}>
              {t('geography.title')} <span className={'text-primary'}>{t('geography.subtitle')}</span>
            </h2>
          </div>
          <div className={'container mx-auto pb-16 flex flex-col lg:flex-row gap-8'}>
            <div className="lg:w-1/2 ">
              <div className={'border-t-2 border-primary w-1/2 my-2'}/>
              <Image src={map_profile} alt={'Gambar Peta Desa Toyomarto'}
                     className={'w-full object-cover'}/>
            </div>
            <div className={'flex flex-col gap-6 lg:w-1/2 indent-8'}>
              <p className={'text-xl text-justify'}>
                            <span className={'text-xl italic text-3xl font-bold text-primary'}>
                                <i>{t('geography.description_1_highlight')}</i>
                            </span>
                {t('geography.description_1').substring(t('geography.description_1_highlight').length)}
              </p>
              <p className={'text-xl text-justify'}>{t('geography.description_2')}</p>
              <p className={'text-xl text-justify'}>{t('geography.description_3')}</p>
            </div>
          </div>
        </section>

        {/* Komponen lain yang tidak diubah */}
        <Destinations data={destinations}/>
        <Blognarticles/>
        <Testimonials/>
      </div>
  );
};

export default Page;