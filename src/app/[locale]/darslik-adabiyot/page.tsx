// 'use client';
// import { lectureSections } from '@/widgets/file-list/lib/data';
// import LectureTable from '@/widgets/file-list/ui';
// import LectureDetail from '@/widgets/file-list/ui/FileDetail';

// export default function Page() {
//   const basePath = '/darslik-adabiyot';
//   const section = lectureSections.find((s) => s.basePath === basePath);

//   if (!section) return <div className="p-4">Malumot topilmadi</div>;

//   if (section.type === 'table') {
//     return <LectureTable data={section.data} basePath={section.basePath} />;
//   }

//   if (section.type === 'single') {
//     return <LectureDetail data={section.data} basePath={section.basePath} />;
//   }

//   return null;
// }

// pages/pedagogik-yangilanish.tsx
//import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */

"use client"

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 text-gray-800 px-4 sm:px-6 lg:px-20 py-10">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Pedagogik Yangilanish (Oilaga Fokus)
        </h1>

        {/* Oilaviy rasm */}
        {/* <div className="flex justify-center mb-10">
          <Image
            src="/family-education.jpg"
            alt="Oilaviy tarbiya"
            width={800}
            height={450}
            className="rounded-lg shadow-lg object-cover"
          />
        </div> */}

        {/* Matn bo‘limi */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {/* Oddiy ta’rif */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">Oddiy ta’rif</h2>
            <p>
              Pedagogik yangilanish — bu tarbiya va ta’lim jarayonini zamonaviy
              ijtimoiy, texnologik va psixologik o‘zgarishlarga moslashtirish.
              Bolani zamon bilan hamnafas tarbiyalash, eskicha yondashuvlarni
              yangicha fikrlash bilan almashtirish jarayonidir.
            </p>
          </div>

          {/* Oila kontekstida */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">Oila kontekstida</h2>
            <p>
              Pedagogik yangilanish faqat maktabga emas, oila muhitidan
              boshlanadi. Ota-onaning yangicha pedagogik fikrlash uslubi:
              muloqot orqali tarbiya, nazorat o‘rniga ishonch, jazolash o‘rniga
              tahlil va tushuntirish.
            </p>
          </div>

          {/* Asosiy yo‘nalishlar */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">
              Yangilanish yo‘nalishlari
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Kommunikatsiya madaniyati</li>
              <li>Raqamli muhitda tarbiya</li>
              <li>Moslashuvchanlik va zamonaviy qadriyatlar</li>
              <li>Hamkorlikdagi o‘rganish</li>
            </ul>
          </div>

          {/* Foydalari */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">Foydalari</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Farzand o‘zini tinglaydigan oilada ulg‘ayadi</li>
              <li>Ota-onalar o‘rtasida tarbiyaviy sinergiya</li>
              <li>Bola mustaqil va mas’uliyatli shaxsga aylanadi</li>
              <li>Oila — “mini ta’lim ekotizimi”</li>
              <li>Zamon bilan hamnafas, hissiy jihatdan sog‘lom muhit</li>
            </ul>
          </div>

          {/* Misol */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">Misol</h2>
            <p>
              Eskicha: 'Sen bu narsani bilmaysan'
              <br />
              Yangilanish: 'Keling, birgalikda bilib olaylik'
            </p>
          </div>

          {/* Ideal model */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">Ideal oila modeli</h2>
            <p>
              Oila — sevgi asosida o‘rganiladigan maktab. Ota — yo‘l
              ko‘rsatuvchi, ona — hissiy tayanch, bola — o‘suvchi va o‘rganuvchi
              shaxs.
            </p>
          </div>
        </section>

        {/* YouTube video bo‘limi */}
        <section className="flex justify-center mb-10">
          <div className="w-full max-w-3xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Pedagogik yangilanish video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
}
