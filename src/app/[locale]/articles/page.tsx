import React from 'react'
import Hero from "@/components/sections/hero";
import bgHero from "@/public/hero_image_background.png";
import Blognarticles from "@/components/sections/blognarticles";
import {Card, CardContent} from "@/components/ui/card";
import Image, {StaticImageData} from 'next/image'
import {Button} from "@/components/ui/button";
import Link from "next/link";

import article6 from "@/public/articles/article6.png";
import article7 from "@/public/articles/article7.png";
import article8 from "@/public/articles/article8.png";
import article9 from "@/public/articles/article9.png";

const Page = () => {
  return (<div className={'w-full'}>
        <Hero title={''}
              subtitle={''}
              image={bgHero}/>
        <Blognarticles isButtonShow={false}/>
        {/**/}
        {/*PUT SOMETHING HERE*/}

        <section className={'w-full my-16'}>
          <div className={'container mx-auto mb-8'}>
            <h3 className={'text-accent font-playfair text-3xl mb-4'}>Artikel Lainnya...</h3>
            <div className={'w-full flex flex-col gap-4'}>
              <MoreArticle
                  title={'3 Alasan Kenapa Kamu Harus  Liburan ke Bukit Kuneer'}
                  slug={'article-6'}
                  preview={'Liburan ke Bukit Kuneer adalah pilihan yang sangat tepat dan menyenangkan! Pertama-tama, pemandangan alamnya yang menakjubkan akan memanjakan mata setiap pengunjung. Dari hamparan hijau yang luas hingga pegunungan yang menjulang tinggi, setiap sudutnya menawarkan keindahan yang luar biasa. Selain itu, udara segar dan sejuk di Bukit Kuneer akan membuatmu merasa segar dan revitalisasi. Kamu bisa merasakan betapa segarnya udara pegunungan yang jauh dari polusi. Yang tak kalah menarik, ada banyak aktivitas seru yang bisa kamu nikmati.'}
                  img={article6}
              />
              <MoreArticle
                  title={'Desa Toyomarto Hadirkan Inovasi Peternakan'}
                  slug={'article-7'}
                  preview={'Desa Toyomarto kini menjadi pionir dalam inovasi pertanian. Dengan teknologi modern, petani setempat meningkatkan hasil panen secara signifikan. Program pelatihan dan pendampingan juga diluncurkan untuk membantu petani mengadopsi metode baru. Inisiatif ini diharapkan dapat meningkatkan kesejahteraan masyarakat dan ketahanan pangan.'}
                  img={article7}
              />
              <MoreArticle
                  title={'5 Destinasi Desa Toyomarto yang Harus Kamu Kunjungi Setidaknya Sekali'}
                  slug={'article-8'}
                  preview={'Desa Toyomarto menawarkan lima destinasi menarik yang wajib dikunjungi. Nikmati keindahan alamnya, pelajari inovasi pertanian modern, dan rasakan keramahan penduduknya. Jangan lewatkan program pelatihan yang bermanfaat dan kesempatan untuk mencicipi hasil panen segar. Kunjungi Toyomarto dan temukan pesonanya!'}
                  img={article8}
              />
              <MoreArticle
                  title={'7 Fakta Unik Tentang Candi Sumberawan Singosari yang Sedikit Orang Tahu'}
                  slug={'article-9'}
                  preview={'Candi Sumberawan di Singosari menyimpan banyak fakta menarik. Pertama, candi ini dibangun pada abad ke-13. Kedua, arsitekturnya terinspirasi dari budaya Hindu-Buddha. Ketiga, terdapat relief unik yang menggambarkan kehidupan sehari-hari. Keempat, candi ini dikelilingi oleh pemandangan alam yang menakjubkan. Kelima, sering dijadikan lokasi penelitian arkeologi. Keenam, candi ini memiliki nilai sejarah yang tinggi. Ketujuh, masih banyak misteri yang menunggu untuk diungkap.'}
                  img={article9}
              />
            </div>
          </div>
        </section>
      </div>)
}
export default Page

interface MoreArticleProps {
 title:string;
 slug:string;
 preview: string;
 img: StaticImageData;
}

const MoreArticle = ({title, slug,preview, img}:MoreArticleProps) => {
  return (
    <Card className={'w-full'}>
      <CardContent className={'flex gap-4 w-full'}>
        <Image  src={img}
                className={'object-cover'}
               alt={`Gambari dari artikel ${title}`}/>
        <div className={'flex flex-col  w-full justify-between'}>
          <h3 className={'font-playfair text-xl mb-2 font-medium'}>{title}</h3>
          <p className={'text-justify line-clamp-3 mb-2'}>{preview}</p>
          <Button asChild className={'ms-auto mt-auto '}>
            <Link href={`/articles/${slug}`}>Baca
              Selengkapnya</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
