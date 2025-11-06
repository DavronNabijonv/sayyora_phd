// import { videoLessons } from '@/widgets/video-lesson/lib/data';
// import VideoLessonGrid from '@/widgets/video-lesson/ui';

// const VideoDarslarPage = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-semibold mb-4">Video darslar</h1>
//       <VideoLessonGrid lessons={videoLessons} />
//     </div>
//   );
// };

// export default VideoDarslarPage;

/* eslint-disable react/no-unescaped-entities */

'use client';

import React from 'react';
//import Head from "next/head";
import Image from 'next/image';

export default function VideoDarslarPage() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold">
              Avlodlar nazariyasi
            </h1>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
              X, Y (Millennials), Z va Alfa (B) avlodlari: tarixiy kontekst,
              asosiy xususiyatlar, texnologiyaga munosabat va zamonaviy
              O'zbek oilasiga ta'siri.
            </p>
          </header>

          {/* Overview cards */}
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <article className="bg-white p-5 rounded-2xl shadow">
              <h3 className="font-semibold">X Avlod</h3>
              <p className="text-sm text-gray-600 mt-2">
                1965–1980 • 45–60 yosh (2025)
              </p>
              <p className="mt-3 text-sm text-gray-700">
                Barqarorlik, sadoqat, an'anaviy qadriyatlar.
              </p>
            </article>

            <article className="bg-white p-5 rounded-2xl shadow">
              <h3 className="font-semibold">Y Avlod (Millennials)</h3>
              <p className="text-sm text-gray-600 mt-2">
                1981–1996 • 29–44 yosh
              </p>
              <p className="mt-3 text-sm text-gray-700">
                Kreativ, moslashuvchan, texnologiyaga ochiq.
              </p>
            </article>

            <article className="bg-white p-5 rounded-2xl shadow">
              <h3 className="font-semibold">Z Avlod</h3>
              <p className="text-sm text-gray-600 mt-2">
                1997–2012 • 13–28 yosh
              </p>
              <p className="mt-3 text-sm text-gray-700">
                Digital native, tez o'rganadi, ijtimoiy tarmoqlar bilan
                uyg'un.
              </p>
            </article>

            <article className="bg-white p-5 rounded-2xl shadow">
              <h3 className="font-semibold">Alfa (B) Avlod</h3>
              <p className="text-sm text-gray-600 mt-2">
                2013–hozirgacha • 0–12 yosh
              </p>
              <p className="mt-3 text-sm text-gray-700">
                AI, AR/VR, smart-davr — texnologiya bilan tug'ilgan.
              </p>
            </article>
          </section>

          {/* Detailed sections */}
          <section className="space-y-10">
            {/* Generation X */}
            <article className="bg-white rounded-2xl shadow p-6">
              <div className="md:flex md:items-start md:gap-6">
                <div className="md:flex-1">
                  <h2 className="text-2xl font-semibold">
                    1. X Avlod (Generation X)
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Tug'ilgan yillar: <strong>1965–1980</strong>
                  </p>
                  <p className="mt-4 text-gray-700">
                    Bu avlod Sovet davri yoki siyosiy o‘tish davrida ulg‘aygan.
                    Ularning bolaligi va yoshlik yillari iqtisodiy va siyosiy
                    beqarorlik davriga to‘g‘ri kelgan. Shu sababli, ular
                    mehnatsevar, ehtiyotkor va intizomli insonlar sifatida
                    shakllangan.
                  </p>

                  <h3 className="mt-4 font-medium">Asosiy xususiyatlari</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li>
                      Hayotda barqarorlik, xavfsizlik va ishonchni qadrlaydi.
                    </li>
                    <li>
                      Mehnatni oliy qadriyat deb biladi; uzoq muddat bir joyda
                      ishlashga moyil.
                    </li>
                    <li>
                      Ota-onalik va oilaviy qadriyatlarni birinchi o‘ringa
                      qo‘yadi.
                    </li>
                  </ul>

                  <h3 className="mt-4 font-medium">Texnologiyaga munosabati</h3>
                  <p className="text-gray-700 mt-2">
                    Kompyuter va internet ularning hayotiga keyinroq kirgan.
                    Ular texnologiyani o'rganib ishlatadi — amaliy va
                    pragmatik yondashuv.
                  </p>

                  <h3 className="mt-4 font-medium">Ishdagi qadriyatlari</h3>
                  <p className="text-gray-700 mt-2">
                    Mehnatsevarlik, intizom, sadoqat, rahbarlikka hurmat va
                    tajriba yuqori baholanadi.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:w-44 md:flex-shrink-0">
                  <Image
                    src="/telegram_baxtli_hayot.jpg"
                    width={176}
                    height={176}
                    alt="Gen X"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </article>

            {/* Generation Y */}
            <article className="bg-white rounded-2xl shadow p-6">
              <div className="md:flex md:items-start md:gap-6">
                <div className="md:flex-1">
                  <h2 className="text-2xl font-semibold">
                    2. Y Avlod (Millennials)
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Tug'ilgan yillar: <strong>1981–1996</strong>
                  </p>
                  <p className="mt-4 text-gray-700">
                    Y avlod — Internetning rivojlanish davrida ulg‘aygan
                    birinchi avloddir. Ular uchun mobil telefon, kompyuter,
                    ijtimoiy tarmoqlar hayotning ajralmas qismi bo‘lib qolgan.
                  </p>

                  <h3 className="mt-4 font-medium">Asosiy xususiyatlari</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li>Erkin fikrlovchi, kreativ va moslashuvchan.</li>
                    <li>
                      Ishda ma’no, motivatsiya va o‘sish imkoniyatini qidiradi.
                    </li>
                    <li>
                      Puldan ko‘ra tajriba va hayot sifatini afzal ko‘radi.
                    </li>
                  </ul>

                  <h3 className="mt-4 font-medium">Texnologiyaga munosabati</h3>
                  <p className="text-gray-700 mt-2">
                    Y avlod texnologiyani “yangi imkoniyat” deb biladi —
                    internet o‘qish, ish, biznes va ko‘ngilochar platforma
                    sifatida ishlatiladi.
                  </p>

                  <h3 className="mt-4 font-medium">Ishdagi qadriyatlari</h3>
                  <p className="text-gray-700 mt-2">
                    Moslashuvchan grafik, motivatsion muhit, jamoaviy ishlash va
                    rahbar bilan do‘stona munosabatni qadrlaydi.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:w-44 md:flex-shrink-0">
                  <Image
                    src="/telegram_baxtli_hayot.jpg"
                    width={176}
                    height={176}
                    alt="Millennials"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </article>

            {/* Generation Z */}
            <article className="bg-white rounded-2xl shadow p-6">
              <div className="md:flex md:items-start md:gap-6">
                <div className="md:flex-1">
                  <h2 className="text-2xl font-semibold">
                    3. Z Avlod (Generation Z)
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Tug'ilgan yillar: <strong>1997–2012</strong>
                  </p>
                  <p className="mt-4 text-gray-700">
                    Z avlod — raqamli dunyoda tug‘ilgan birinchi avlod.
                    Smartfon, ijtimoiy tarmoqlar va onlayn kontent ularning
                    kundalik hayotining ajralmas qismi.
                  </p>

                  <h3 className="mt-4 font-medium">Asosiy xususiyatlari</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li>Tez o‘zgaruvchan muhitga oson moslashadi.</li>
                    <li>
                      E'tibor oralig'i qisqa; video va qisqa formatni
                      afzal ko‘radi.
                    </li>
                    <li>
                      O‘z fikrini erkin bildiradi, mustaqil qaror qabul qiladi.
                    </li>
                  </ul>

                  <h3 className="mt-4 font-medium">Texnologiyaga munosabati</h3>
                  <p className="text-gray-700 mt-2">
                    Ular digital native — texnologiya ularning ona tiliga
                    o‘xshaydi. TikTok, YouTube kabi platformalar kundalik
                    muloqot va o‘rganish vositasi.
                  </p>

                  <h3 className="mt-4 font-medium">Ishdagi qadriyatlari</h3>
                  <p className="text-gray-700 mt-2">
                    Erkinlik, ijod va natijaga yo‘naltirilgan ish uslubi;
                    kompaniya qadriyatlariga e'tibor beradi.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:w-44 md:flex-shrink-0">
                  <Image
                    src="/telegram_baxtli_hayot.jpg"
                    width={176}
                    height={176}
                    alt="Gen Z"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </article>

            {/* Generation Alpha */}
            <article className="bg-white rounded-2xl shadow p-6">
              <div className="md:flex md:items-start md:gap-6">
                <div className="md:flex-1">
                  <h2 className="text-2xl font-semibold">4. Alfa (B) Avlod</h2>
                  <p className="mt-2 text-gray-600">
                    Tug'ilgan yillar: <strong>2013–hozirgacha</strong>
                  </p>
                  <p className="mt-4 text-gray-700">
                    Alfa avlod sun'iy intellekt, robotika va AR/VR davrida
                    tug'ilgan va raqamli qurilmalar bilan erta tanishadi.
                  </p>

                  <h3 className="mt-4 font-medium">Asosiy xususiyatlari</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li>Raqamli texnologiyasiz hayotni bilmaydi.</li>
                    <li>
                      O‘yin va interaktiv format orqali o‘rganadi
                      (gamification).
                    </li>
                    <li>
                      Virtual va haqiqiy dunyo chegarasi noaniq bo‘lishi mumkin.
                    </li>
                  </ul>

                  <h3 className="mt-4 font-medium">
                    Kelajakdagi ish qadriyatlari
                  </h3>
                  <p className="text-gray-700 mt-2">
                    AI bilan hamkorlik, yangi kasblar va avtomatlashtirilgan ish
                    tizimlari. Tez o‘rganish va yangilanish qobiliyati yuqori.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:w-44 md:flex-shrink-0">
                  <Image
                    src="/telegram_baxtli_hayot.jpg"
                    width={176}
                    height={176}
                    alt="Gen Alpha"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </article>

            {/* Comparative table */}
            <article className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Avlodlar taqqoslash jadvali
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full table-auto text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3">Avlod</th>
                      <th className="p-3">Tug'ilgan yillar</th>
                      <th className="p-3">Asosiy vosita</th>
                      <th className="p-3">Texnologiyaga munosabat</th>
                      <th className="p-3">Ishdagi qadriyatlar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-3">X</td>
                      <td className="p-3">1965–1980</td>
                      <td className="p-3">TV, radio, gazeta</td>
                      <td className="p-3">Keyin o'rgangan, pragmatik</td>
                      <td className="p-3">Barqarorlik, sadoqat</td>
                    </tr>
                    <tr className="border-t bg-gray-50">
                      <td className="p-3">Y (Millennials)</td>
                      <td className="p-3">1981–1996</td>
                      <td className="p-3">Internet, mobil</td>
                      <td className="p-3">Internet bilan ulg'aygan</td>
                      <td className="p-3">Moslashuvchanlik, motivatsiya</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3">Z</td>
                      <td className="p-3">1997–2012</td>
                      <td className="p-3">Smartfon, ijtimoiy tarmoqlar</td>
                      <td className="p-3">Digital native</td>
                      <td className="p-3">Erkinlik, ijod</td>
                    </tr>
                    <tr className="border-t bg-gray-50">
                      <td className="p-3">Alfa (B)</td>
                      <td className="p-3">2013–hozir</td>
                      <td className="p-3">AI, AR/VR, smart</td>
                      <td className="p-3">Texnologiyasiz hayotni bilmaydi</td>
                      <td className="p-3">Innovatsiya, avtomatlashtirish</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* Uzbek family analysis */}
            <article className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-2xl font-semibold mb-3">
                Hozirgi O'zbek oilasiga ta'siri
              </h2>
              <p className="text-gray-700">
                Kirish: Zamonaviy o'zbek oilasida bir vaqtning o'zida
                turli avlod vakillari yashab kelmoqda. Har bir avlod
                o'zining dunyoqarashi, qadriyat tizimi va texnologiyaga
                munosabati bilan ajralib turadi.
              </p>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-medium">X avlod</h3>
                  <p className="text-gray-700 mt-1">
                    An'anaviy qadriyatlarni saqlovchi, tartib va intizomni
                    targ'ib qiladi. Oila ichida axloqiy va ma'naviy
                    rolni bajaradi.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Y avlod</h3>
                  <p className="text-gray-700 mt-1">
                    Muloqotga va hissiy yaqinlikka urg'u beradi; an'ana
                    va zamonaviylikni uyg'unlashtirishga intiladi.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Z avlod</h3>
                  <p className="text-gray-700 mt-1">
                    Erkin fikrlash, texnologiya bilan o'sgan va global
                    dunyoqarashni olib kiradi; muloqot madaniyatini yangilaydi.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Alfa avlod</h3>
                  <p className="text-gray-700 mt-1">
                    Raqamli vositalar bilan erta tanishadi; onlayn va offline
                    muhitning sintezi oilaviy hayotni yangilaydi.
                  </p>
                </div>
              </div>

              <h3 className="mt-6 font-semibold">Integratsiya va tavsiyalar</h3>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
                <li>
                  Avlodlararo muloqotni kuchaytirish — oilaviy uchrashuvlar va
                  ochiq suhbatlar.
                </li>
                <li>
                  Qadriyatlar uzluksizligini ta'minlash — an'analarni
                  moslashtirish bilan saqlab qolish.
                </li>
                <li>
                  Texnologiyani tarbiya vositasi sifatida yo'naltirish —
                  o'qituvchi va ota-onalar uchun raqamli resurslar.
                </li>
              </ul>
            </article>

            {/* CTA and resources */}
            <article className="bg-white rounded-2xl shadow p-6 text-center">
              <h2 className="text-2xl font-semibold mb-3">
                Qo'shimcha resurslar
              </h2>
              <p className="text-gray-700 mb-4">
                Kitoblar, maqolalar va seminarlar orqali avlodlararo muvozanatni
                chuqurroq o'rganing.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="#"
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Kitoblar ro'yxati
                </a>
                <a
                  href="#"
                  className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg"
                >
                  Seminarlar va treninglar
                </a>
              </div>
            </article>
          </section>

          <footer className="mt-12 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Generational Theory — Ma'lumot
            manbai: StartUP-Invest
          </footer>
        </div>
      </main>
    </>
  );
}
