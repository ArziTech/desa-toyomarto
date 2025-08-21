import React from 'react'
import Image, {StaticImageData} from 'next/image'
import candi1 from '../../../public/candi1.png'
import article2 from '../../../public/article2.png'
import article3 from '../../../public/article3.png'
import article4 from '../../../public/article4.png'
import article5 from '../../../public/article5.png'
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Blognarticles = ({isButtonShow = true}:{isButtonShow? :boolean}) => {
  return (
      <section className={'w-full my-16'}>
        <div className={'container mx-auto mb-8'}>
          <span>Exploring</span>
          <h2 className={'font-playfair text-5xl mb-2 text-accent'}>Popular
            Blog & Articles</h2>
        </div>
        <div className={'container mx-auto flex flex-col lg:flex-row gap-6'}>
          <div className={'w-full lg:w-1/2'}>
            {/*  left side*/}
            <Image src={candi1} alt={'image 1'}
                   className={'w-full mb-4'} width={550}
                   height={370}/>
            <div className="space-y-4">

              <h3 className={'font-bold  text-3xl'}>Tak Hanya Unik Ini Dia
                Fakta-Fakta Tentang Candi Singosari</h3>
              <p className={'text-xl'}>Temukan keindahan Candi Singosari, sebuah
                situs bersejarah yang terletak di Jawa Timur, Indonesia. Candi
                kuno ini, yang dibangun pada abad ke-13, adalah bukti kemegahan
                Kerajaan Singosari.</p>
              <Link href={'/articles/article-1'} className={'text-xl font-medium text-primary'}>Read
                Full Article</Link>
            </div>

          </div>
          <div className={'w-full lg:w-1/2 flex flex-col gap-6'}>
            {/*  right side*/}
            <SmallArticle
                title={'Menelusuri Pesona Wisata Desa Toyomarto: Keindahan Alam dan\n' + '                  Budaya yang Memikat'}
                 img={article2} slug={'article-2'}/>
            <SmallArticle
                title={'Pesona Wisata Desa Toyomarto: Menyusuri Keindahan Alam dan Budaya Lokal'}
                 img={article3} slug={'article-3'}/>
            <SmallArticle
                title={'Menjelajahi Keindahan Desa Toyomarto: Pesona Alam dan Budaya yang Menawan'}
                 img={article4} slug={'article-4'}/>
            <SmallArticle
                title={'Menjelajahi Keindahan Desa Toyomarto: Surga Tersembunyi di Tengah Alam'}
                 img={article5} slug={'article-5'}/>
            {
              isButtonShow &&
              <Button className={'mt-auto '}>
                <Link href={'/articles'}>See more articles</Link>
              </Button>
            }
          </div>

        </div>
      </section>)
}
export default Blognarticles

interface SmallArticleProps {
  img: string | StaticImageData;
  title: string;
  slug: string
}

const SmallArticle = ({img, title, slug}: SmallArticleProps) => {
  return (<div className={'flex gap-4'}>
        <Image src={img} alt={'gambar article 2'}
               className={'size-32 object-cover '}/>
      <div className={'flex flex-col justify-between'}>
        <h3 className={'font-bold text-xl'}>{title}</h3>
        <Button className={'w-fit ms-auto'}
                asChild>
          <Link href={`/articles/${slug}`} >Baca Selengkapnya</Link>
        </Button>

      </div>
    </div>
  )
}