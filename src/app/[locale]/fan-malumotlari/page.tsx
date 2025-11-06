// 'use client';
// import { lectureSections } from '@/widgets/file-list/lib/data';
// import LectureTable from '@/widgets/file-list/ui';
// import LectureDetail from '@/widgets/file-list/ui/FileDetail';

// export default function Page() {
//   const basePath = '/fan-malumotlari/mustaqil';
//   const section = lectureSections.find((s) => s.basePath === basePath);

//   if (!section) return <div className="p-4">Malumot topilmadi</div>;

//   if (section.type === 'table') {
//     return <LectureTable data={section.data} basePath={section.basePath} />;
//   }

//   if (section.type === 'single') {
//     return (
//       <LectureDetail
//         data={section.data}
//         basePath={section.basePath}
//         type="single"
//       />
//     );
//   }

//   return null;
// }

/* eslint-disable react/no-unescaped-entities */

'use client';

import { toEmbedUrl } from '@/widgets/video-lesson/ui';
import React from 'react';
//import Image from "next/image";

export default function TarbiyaviyTransformatsiya() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-100 text-gray-800">
      {/* HEADER SECTION */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Tarbiyaviy Transformatsiya
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          Tarbiya va ta'lim jarayonida zamonaviy yondashuvlar orqali farzandning
          fikrlash, o‘zini anglash va rivojlanish jarayonini yangilash.
        </p>
      </section>

      {/* IMAGE SECTION */}
      {/* <section className="flex justify-center">
        <Image
          src="/telegram_baxtli_hayot.jpg"
          alt="Tarbiyaviy Transformatsiya"
          width={800}
          height={500}
          className="rounded-2xl shadow-xl w-11/12 md:w-3/4 lg:w-2/3"
        />
      </section> */}

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-8 space-y-6">
        {/* Definition */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🔹 Tarif
          </h2>
          <p className="text-gray-700 leading-relaxed">
            “Tarbiyaviy transformatsiya” — bu tarbiya va ta’lim jarayonida
            chuqur o‘zgarishlar yuzaga kelishi, an’anaviy yondashuvlardan
            zamonaviy, innovativ va moslashuvchan metodlarga o‘tishidir. Bu
            jarayon bolalarda faqat bilim emas, balki mustaqil fikrlash, o‘zini
            anglash va mas’uliyatni shakllantiradi.
          </p>
        </div>

        {/* Key Points */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🔹 Asosiy jihatlar
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              O‘qituvchi markazidan o‘quvchi markaziga o‘tish — faol o‘rganish.
            </li>
            <li>Texnologiya va raqamli vositalarni tarbiyaga kiritish.</li>
            <li>
              Nazorat o‘rniga mustaqil fikrlash va muhokama madaniyatini
              rivojlantirish.
            </li>
          </ul>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🔹 Foydalari
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Farzandlar o‘z fikrini bildira oladigan shaxsga aylanadi.</li>
            <li>
              Tarbiya jarayonlari samarali — o‘rganish ma’noga ega bo‘ladi,
              nafaqat yodlashga.
            </li>
            <li>
              Yoshlar o‘zgaruvchan hayot sharoitiga moslasha oladigan bo‘ladi.
            </li>
          </ul>
        </div>

        {/* Steps */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🔹 Qanday amalga oshiriladi?
          </h2>
          <ol className="list-decimal ml-6 text-gray-700 space-y-2">
            <li>
              Tarbiya modelini yangilash — rahbarlikdan yo‘l-yo‘naltirishga
              o‘tish.
            </li>
            <li>Interaktiv va hamkorlikka asoslangan muhit yaratish.</li>
            <li>
              Yangi pedagogik metodlardan foydalanish — loyiha asosida
              o‘rganish.
            </li>
            <li>
              Texnologiyalarni ongli tarzda qo‘llash — tarbiyaviy vosita
              sifatida.
            </li>
          </ol>
        </div>

        {/* Video Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🎥 Video Tavsif
          </h2>
          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src={toEmbedUrl(
                'https://youtu.be/cUCUnvYWUNg?si=nG6vXozgusDfwWVs',
              )}
              title="Tarbiyaviy Transformatsiya Videosi"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-700 text-white py-6 text-center">
        <p>© 2025 Tarbiyaviy Transformatsiya | Rivojlanish sari birgalikda</p>
      </footer>
    </main>
  );
}
