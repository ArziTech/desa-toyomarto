import React from 'react'
import Hero from "@/components/sections/hero";
import bgHero from "../../../../../public/hero_candi_background.png";
import Image from "next/image";
import sumberawan from "../../../../../public/about_candi_sumberawan.png";

const Page = () => {
  return (<div className={'w-full'}>
        <Hero title={'Candi Sumberawan'}
              subtitle={'Lebih dari sekadar keindahan candi, jendela pengetahuan  menuju sejarah dan kebudayaan kuno Indonesia.'}
              image={bgHero}/>
        <div
            className="container mx-auto text-lg indent-8 text-justify flex flex-col gap-6 py-8">
          <p>Candi Sumberawan merupakan salah satu warisan budaya dan sejarah
            yang penting di Indonesia. Terletak di Desa Toyomarto, Kecamatan
            Singosari, Kabupaten Malang, Jawa Timur, candi ini menawarkan lebih
            dari sekadar keindahan candinya, ia juga memberi kita jendela
            pengetahuan menuju sejarah dan kebudayaan kuno Indonesia. Candi
            Sumberawan merupakan salah satu candi Buddha yang terletak di Desa
            Toyomarto, Kecamatan Singosari, Kabupaten Malang, Jawa Timur,
            Indonesia. Meskipun informasi mengenai asal-usul dan sejarah
            pembangunannya belum sepenuhnya diketahui, candi ini umumnya
            diperkirakan dibangun pada abad ke-14 Masehi. Ada beberapa teori
            mengenai siapa yang bertanggung jawab atas pembangunan Candi
            Sumberawan salah satunya adalah bahwa candi ini mungkin berhubungan
            dengan Kerajaan Singhasari, yang berkuasa dari abad ke-13 hingga
            ke-14, atau mungkin juga dengan Kerajaan Majapahit, yang
            menggantikan Singhasari dan berlangsung hingga akhir abad
            ke-15. </p>
          <Image src={sumberawan} alt={'Gambar dari candisumberawan'}
                 className={'mx-auto'}/>
          <p>
            Candi Sumberawan unik karena lokasinya yang berada di dataran
            tinggi, dekat dengan kaki Gunung Arjuno. Suasana yang tenang dan
            pemandangan alam yang indah membuatnya menjadi tempat yang istimewa.
            Salah satu karakteristik yang menarik dari Candi Sumberawan adalah
            keberadaan sebuah sumber mata air di dekatnya, yang mungkin menjadi
            alasan mengapa candi ini diberi nama &#34;Sumberawan&#34;. Air dari
            mata air ini dianggap keramat oleh masyarakat setempat dan sering
            digunakan dalam berbagai upacara keagamaan dan ritual. Struktur
            candi ini terbuat dari batu andesit dan mencakup beberapa elemen
            arsitektural khas candi Buddha, termasuk stupa dan patung Buddha.
            Sayangnya, karena kerusakan dan perusakan sepanjang waktu, sejumlah
            elemen asli candi telah hilang atau rusak. Namun, itu tidak
            mengurangi pentingnya situs ini sebagai bagian dari warisan sejarah
            dan kebudayaan Indonesia.
            Selama berabad-abad, Candi Sumberawan mengalami berbagai tahap
            restorasi dan renovasi. Upaya pelestarian ini penting untuk
            memastikan bahwa generasi mendatang juga dapat menikmati dan belajar
            dari situs sejarah ini. Meskipun belum sepopuler candi-candi besar
            seperti Borobudur atau Prambanan, Candi Sumberawan menarik perhatian
            para ahli sejarah, arkeolog, dan wisatawan yang berkeinginan
            memahami lebih dalam mengenai peradaban dan kebudayaan kuno di
            Indonesia. Hingga saat ini, Candi Sumberawan tetap menjadi tujuan
            wisata sejarah dan keagamaan. Pengunjung sering merasakan sensasi
            mistis dan spiritual saat berkunjung ke sini, yang mungkin memang
            merupakan bagian dari daya tarik khusus candi ini. Karena alasan
            inilah, Candi Sumberawan tidak hanya penting sebagai situs
            arkeologi, tetapi juga sebagai pusat kegiatan keagamaan dan
            spiritual yang tetap hidup dan dinamis. Juga bisa menambah apresiasi
            terhadap kekayaan budaya dan tradisi yang masih berlangsung hingga
            hari ini. </p>
          <p>Candi Sumberawan unik karena lokasinya yang berada di dataran
            tinggi, dekat dengan kaki Gunung Arjuno. Suasana yang tenang dan
            pemandangan alam yang indah membuatnya menjadi tempat yang istimewa.
            Salah satu karakteristik yang menarik dari Candi Sumberawan adalah
            keberadaan sebuah sumber mata air di dekatnya, yang mungkin menjadi
            alasan mengapa candi ini diberi nama &#34;Sumberawan&#34;. Air dari
            mata air ini dianggap keramat oleh masyarakat setempat dan sering
            digunakan dalam berbagai upacara keagamaan dan ritual. Struktur
            candi ini terbuat dari batu andesit dan mencakup beberapa elemen
            arsitektural khas candi Buddha, termasuk stupa dan patung Buddha.
            Sayangnya, karena kerusakan dan perusakan sepanjang waktu, sejumlah
            elemen asli candi telah hilang atau rusak. Namun, itu tidak
            mengurangi pentingnya situs ini sebagai bagian dari warisan sejarah
            dan kebudayaan Indonesia.
            Selama berabad-abad, Candi Sumberawan mengalami berbagai tahap
            restorasi dan renovasi. Upaya pelestarian ini penting untuk
            memastikan bahwa generasi mendatang juga dapat menikmati dan belajar
            dari situs sejarah ini. Meskipun belum sepopuler candi-candi besar
            seperti Borobudur atau Prambanan, Candi Sumberawan menarik perhatian
            para ahli sejarah, arkeolog, dan wisatawan yang berkeinginan
            memahami lebih dalam mengenai peradaban dan kebudayaan kuno di
            Indonesia. Hingga saat ini, Candi Sumberawan tetap menjadi tujuan
            wisata sejarah dan keagamaan. Pengunjung sering merasakan sensasi
            mistis dan spiritual saat berkunjung ke sini, yang mungkin memang
            merupakan bagian dari daya tarik khusus candi ini. Karena alasan
            inilah, Candi Sumberawan tidak hanya penting sebagai situs
            arkeologi, tetapi juga sebagai pusat kegiatan keagamaan dan
            spiritual yang tetap hidup dan dinamis. Juga bisa menambah apresiasi
            terhadap kekayaan budaya dan tradisi yang masih berlangsung hingga
            hari ini.</p>
        </div>
      </div>)
}
export default Page
