import React from 'react'
import Image, {StaticImageData} from 'next/image'
import candi1 from '../../../public/candi1.png'
import article2 from '../../../public/article2.png'
import article3 from '../../../public/article3.png'
import article4 from '../../../public/article4.png'
import article5 from '../../../public/article5.png'
import Link from "next/link";

const Blognarticles = () => {
  return (
      <section className={'w-full'}>
        <div className={'container mx-auto'}>
          <span>Exploring</span>
          <h2 className={'font-playfair text-5xl mb-2 text-accent'}>Popular
            Blog & Articles</h2>
        </div>
        <div className={'container mx-auto flex gap-6 my-16'}>

          <div className={'w-1/2'}>
            {/*  left side*/}
            <Image src={candi1} alt={'image 1'}
                   className={'w-full mb-4 rounded-3xl'} width={550}
                   height={370}/>
            <div className="space-y-4">

              <h3 className={'font-bold  text-3xl'}>Tak Hanya Unik Ini Dia
                Fakta-Fakta Tentang Candi Singosari</h3>
              <p className={'text-xl'}>Temukan keindahan Candi Singosari, sebuah
                situs bersejarah yang terletak di Jawa Timur, Indonesia. Candi
                kuno ini, yang dibangun pada abad ke-13, adalah bukti kemegahan
                Kerajaan Singosari.</p>
              <Link href={'/'} className={'text-xl font-medium text-primary'}>Read
                Full Article</Link>
            </div>

          </div>
          <div className={'w-1/2 flex flex-col gap-4'}>
            {/*  right side*/}
            <SmallArticle
                title={'Menelusuri Pesona Wisata Desa Toyomarto: Keindahan Alam dan\n' + '                  Budaya yang Memikat'}
                dest={''} img={article2} buttonText={"19 September 2024"}/>
            <SmallArticle
                title={'Pesona Wisata Desa Toyomarto: Menyusuri Keindahan Alam dan Budaya Lokal'}
                dest={''} img={article3} buttonText={"19 September 2024"}/>
            <SmallArticle
                title={'Menjelajahi Keindahan Desa Toyomarto: Pesona Alam dan Budaya yang Menawan'}
                dest={''} img={article4} buttonText={"19 September 2024"}/>
            <SmallArticle
                title={'Menjelajahi Keindahan Desa Toyomarto: Surga Tersembunyi di Tengah Alam'}
                dest={''} img={article5} buttonText={"19 September 2024"}/>
          </div>
        </div>
      </section>)
}
export default Blognarticles

interface SmallArticleProps {
  img: string | StaticImageData;
  title: string;
  dest: string
  buttonText: string
}

const SmallArticle = ({img, title, buttonText}: SmallArticleProps) => {
  return (<div className={'flex gap-4'}>
        <Image src={img} alt={'gambar article 2'}
               className={'size-32 object-cover rounded-2xl'}/>
      <div className={'flex flex-col justify-between'}>
        <h3 className={'font-bold text-xl'}>{title}</h3>
        <Link href={'/'} className={'font-medium text-primary'}>{buttonText}</Link>
      </div>
    </div>
  )
}