import React from 'react'

const Explore2 = () => {
  return (<section className={'w-full min-h-full'}>
    <div className={'container'}>
      <div className="font-serif">
        <div className={'pb-1'}>
          <p className={'text-accent text-3xl font-semibold'}>540 k / pax <span className={'text-base text-black'}>min
            6 pax</span></p>
        </div>
        <div className="flex gap-8">
          <div className={'w-full'}>
            <p className={'text-xl font-medium'}>Destinasi Wisata</p>
            <ol className={'list-inside font-serif  list-disc'}>
              <li>Candi Singosari</li>
              <li>Candi Sumberawan</li>
              <li>Pentungan Sari</li>
              <li>Griya Anggrek</li>
              <li>Batik Sekar Kamulyan</li>
              <li>Cobek Batu</li>
            </ol>
          </div>
          <div className={'w-full'}>
            <p className={'text-xl font-medium'}>Fasilitas</p>
            <ol className={'list-inside font-serif  list-disc'}>
              <li>Tour Guide</li>
              <li>Photographer</li>
              <li>Transportasi</li>
              <li>Snack Food</li>
              <li>Breakfast</li>
              <li>Lunch</li>
              <li>Signature Drink</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>)
}
export default Explore2
