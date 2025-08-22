import React from 'react'
import Hero from "@/components/sections/hero";
import bgHero from "../../../public/hero_image_background.png";
import profile from "../../../public/profile.png";
import map_profile from "../../../public/map_profile.png";
import {destinations} from "@/constants/destinations";
import Destinations from "@/components/sections/destinations";
import Testimonials from "@/components/sections/testimonials";
import Blognarticles from "@/components/sections/blognarticles";
import Image from 'next/image'

const Page = () => {
  return (<div className={'w-full'}>
    <Hero title={''}
          subtitle={''}
          image={bgHero}/>

    {/* MAIN CONTENT */}

    <section className={'w-full'}>
      <div className="container pt-16">
        <h2 className={'font-sans font-bold text-5xl'}>Profil <span
            className={'text-primary'}>Desa Toyomarto</span></h2>
          <div className={'border-t-2 border-primary w-1/2 my-2'}/>

      </div>
      <div className={'container mx-auto pb-16 flex flex-col lg:flex-row' +
          ' gap-8'}>
        <div className={'flex flex-col gap-2 lg:w-1/2'}>
          <p className={'text-xl text-justify indent-8'}><span className={'text-xl' +
              'italic text-3xl font-bold text-primary'}><i>Desa Wisata Toyomarto</i></span> adalah
            sebuah desa yang terletak di
            Kecamatan Singosari, Kabupaten Malang, Jawa Timur. Desa ini
            berada di kawasan dataran tinggi dengan pemandangan yang indah
            serta udara yang sejuk, karena lokasinya yang tidak jauh dari
            lereng Gunung Arjuno. Suasana pedesaan di desa ini masih sangat
            asri, dengan hamparan sawah, kebun, dan pepohonan yang
            mendominasi lanskapnya. Toyomarto diambil dari kata Toyo dan
            Marto dalam bahasa Jawa Toyo berarti Air dan Marto/Amarta (A =
            tidak, Marta = Mati) diartikan sebagai Ari Kehidupan.</p>
        </div>
        <Image src={profile} alt={'Gambar Desa Toyomarto'}
               className={'lg:w-1/2 object-cover w-full max-lg:order-first'}/>
      </div>
      <div className="container pt-16">
          <h2 className={'font-sans font-bold text-5xl'}>Kondisi <span
              className={'text-primary'}>Geografis</span></h2>
      </div>
      <div className={'container mx-auto pb-16 flex flex-col lg:flex-row' +
          ' gap-8'}>
        <div className="lg:w-1/2 ">
          <div className={'border-t-2 border-primary w-1/2 my-2'}/>
          <Image src={map_profile} alt={'Gambar Peta Desa Toyomarto'}
                 className={'w-full object-cover'}/>
        </div>
        <div className={'flex flex-col gap-6  lg:w-1/2 indent-8'}>
          <p className={'text-xl text-justify'}><span className={'text-xl' +
              'italic text-3xl font-bold text-primary'}><i>Desa Toyomarto</i></span> yang terletak di Kecamatan
            Singosari, Kabupaten Malang, secara geografis berada di dataran
            tinggi. Ketinggiannya berkisar antara 400 hingga 700 meter di atas
            permukaan laut. Keadaan ini membuat desa Toyomarto memiliki iklim
            yang sejuk, dengan suhu rata-rata tahunan yang nyaman.</p>
          <p className={'text-xl text-justify'}>Secara topografi, desa ini
            terdiri dari perbukitan, lembah, dan lereng-lereng. Keberadaan
            sungai-sungai kecil dan mata air alami juga melengkapi bentang alam
            desa Toyomarto, yang berfungsi sebagai sumber irigasi bagi
            lahan-lahan pertanian di sekitarnya. Sebagian besar wilayah desa ini
            berupa persawahan, kebun, dan ladang. Kondisi geografis ini juga
            memengaruhi mata pencarian utama penduduknya yang mayoritas adalah
            petani dan peternak.</p>
          <p className={'text-xl text-justify'}>Terletak di jalur wisata menuju
            Gunung Arjuno, desa ini memiliki posisi strategis. Lokasinya yang
            berdekatan dengan Candi Singosari menjadikannya daya tarik tambahan
            bagi wisatawan. Oleh karena itu, selain pertanian, potensi wisata
            juga dikembangkan oleh masyarakat Toyomarto.</p>
        </div>

      </div>
    </section>

    {/**/}
    <Destinations data={destinations}/>
    <Blognarticles/>
    <Testimonials/>
  </div>)
}
export default Page
