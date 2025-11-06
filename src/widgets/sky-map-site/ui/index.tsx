// 'use client';

// // import { skyMapSites } from '../lib/data';
// // import SkyMapSiteCard from './SkyMapSiteCard';

// export default function SkyMapPage() {
//   return (
//     <div className="mx-auto p-2 space-y-2">
//       {/* <h1 className="text-md font-medium mb-2">Osmon xaritasi saytlar</h1>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
//         {skyMapSites.map((site) => (
//           <SkyMapSiteCard key={site.id} site={site} />
//         ))}
//       </div> */}

//     </div>
//   );
// }

/* eslint-disable react/no-unescaped-entities */

'use client';

import React from 'react';
import Image from 'next/image';
import { toEmbedUrl } from '@/widgets/video-lesson/ui';

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    question: 'Sinergiyani qanday boshlash mumkin?',
    answer:
      'Ochiq muloqotdan boshlang — haftalik oilaviy uchrashuvlar tashkil qiling.',
  },
  {
    question: 'Jamoada sinergiyani qanday kuchaytirish mumkin?',
    answer: 'Har bir a’zoning fikrini tinglash va qadrlash muhitini yarating.',
  },
  {
    question: 'Sinergiya uchun qanday qadriyatlar muhim?',
    answer:
      'Ishonch, hurmat va samimiy hamkorlik — bu sinergiyaning poydevori.',
  },
  {
    question: 'Oilada sinergiyani qanday saqlab qolish mumkin?',
    answer: 'Har kuni kichik, ammo doimiy muloqotni yo‘lga qo‘ying.',
  },
  {
    question:
      'Ish joyida sinergiyani yaratish uchun rahbar nima qilishi kerak?',
    answer:
      'Har bir xodimning kuchli tomonlarini aniqlab, ularni bir maqsadga yo‘naltirish kerak.',
  },
  {
    question: 'Sinergiya paydo bo‘lishi uchun nimalardan qochish kerak?',
    answer: 'Tanqid, ishonchsizlik va bir-birini tinglamaslikdan.',
  },
  {
    question: 'Sinergiya jamoa muvaffaqiyatiga qanday ta’sir qiladi?',
    answer:
      'Birgalikda fikr yuritish natijasida yaxshiroq g‘oyalar va tezroq yechimlar paydo bo‘ladi.',
  },
  {
    question: 'Sinergiyani boshlashda yetakchining roli qanday?',
    answer: 'U boshqalarni ilhomlantiruvchi va birlashtiruvchi bo‘lishi kerak.',
  },
  {
    question: 'Oilaviy sinergiyani bolalar bilan qanday shakllantirish mumkin?',
    answer:
      'Ularni qaror qabul qilish jarayoniga kichik rollar bilan qo‘shing.',
  },
  {
    question:
      'Sinergiyani mustahkamlovchi odatlarni qanday shakllantirish mumkin?',
    answer:
      'Har hafta kichik jamoaviy maqsadlar qo‘yib, ularni birgalikda bajarishni odat qiling.',
  },
];

export default function SkyMapPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* HERO */}
        <header className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Ota-Ona <span className="text-indigo-600">Sinergiyasi</span>
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Ota va onaning uyg'un hamkorligi — farzand uchun ishonchli, hissiy
              va axloqiy muhit yaratadi. Bu sahifada konsept, amaliy
              maslahatlar, taqqoslamalar va multimedia resurslari jamlangan.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#definition"
                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:shadow-md"
              >
                To'liq ta'rif
              </a>
              <a
                href="#comparison"
                className="inline-block px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg"
              >
                Taqqoslash
              </a>
            </div>
          </div>

          <div className="w-full md:w-96 rounded-2xl overflow-hidden shadow-lg bg-white">
            <Image
              src="/sinergiya.jpg"
              width={600}
              height={400}
              alt="Family"
              className="object-cover w-full h-64"
            />
            <div className="p-4">
              <h3 className="font-semibold">
                Infografika: Nega sinergiya muhim?
              </h3>
              <p className="text-sm text-neutral-500 mt-2">
                1 + 1 = 3 tamoyili: birgalikdagi tarbiya yakka tarbiya
                natijasidan ko'proq kuchga ega bo'ladi.
              </p>
            </div>
          </div>
        </header>

        {/* DEFINITION */}
        <section
          id="definition"
          className="bg-white rounded-2xl p-8 shadow mb-8"
        >
          <h2 className="text-2xl font-bold">Oddiy ta'rif</h2>
          <p className="mt-3 text-neutral-600">
            Ota-ona sinergiyasi — bu ota va onaning o'zaro hamkorligi, fikr,
            qaror va harakatlaridagi uyg'unlik orqali farzandga barqaror
            psixologik, hissiy va axloqiy muhit yaratishidir.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-semibold">Asosiy g'oya</h4>
              <p className="text-sm text-neutral-600 mt-2">
                Sinergiya orqali ota-ona tarbiyada bir yo'lni tanlab, oilada
                barqarorlikni ta'minlaydi.
              </p>
            </div>

            <div className="p-4 bg-emerald-50 rounded-lg">
              <h4 className="font-semibold">Nega muhim?</h4>
              <p className="text-sm text-neutral-600 mt-2">
                Uyg'un tarbiya bola ruhiyatini mustahkamlaydi, xavfsizlik va
                barqaror o'qish muhitini beradi.
              </p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold">Esda tuting</h4>
              <p className="text-sm text-neutral-600 mt-2">
                Sinergiya ota va onaning rollarini to'g'ri taqsimlash orqali
                mustahkamlanadi.
              </p>
            </div>
          </div>
        </section>

        {/* MEANING + BULLETS */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Sinergiya so'zining ma'nosi
            </h3>
            <p className="text-neutral-600">
              Sinergiya — bir nechta kuch birlashganda ularning umumiy natijasi
              alohida kuchlarning yig'indisidan ko'proq bo'lishi hodisasi.
            </p>
            <p className="mt-4 text-sm text-neutral-500">
              Qisqasi: <strong>1 + 1 = 3</strong> — ya'ni ota va ona birgalikda
              farzand tarbiyasida kuchli ta'sir qoldiradi.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Asosiy belgilar</h3>
            <ul className="space-y-2 text-neutral-600">
              <li>• Bir xil yo'nalishda tarbiya</li>
              <li>• Farzand oldida qarama-qarshi gapirmaslik</li>
              <li>• Bir-birini hurmat qilish</li>
              <li>• Rolni to'g'ri taqsimlash</li>
              <li>• Qo'llab-quvvatlash</li>
            </ul>
          </div>
        </section>

        {/* COMPARISON */}
        <section
          id="comparison"
          className="bg-white p-6 rounded-2xl shadow mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">
            Sinergiya mavjud vs sinergiya yo'q
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg border border-emerald-100">
              <h4 className="font-semibold text-emerald-800">
                Sinergiya mavjud
              </h4>
              <ul className="mt-3 text-neutral-600 space-y-2">
                <li>• Barqaror ruhiy muhit</li>
                <li>• Ishtirokchi va hurmatli bola</li>
                <li>• Oila ichida izchillik</li>
              </ul>
            </div>
            <div className="p-5 rounded-lg border border-red-100">
              <h4 className="font-semibold text-rose-700">Sinergiya yo'q</h4>
              <ul className="mt-3 text-neutral-600 space-y-2">
                <li>• Beqaror tarbiya</li>
                <li>• Bola manipulyatsion yoki isyonkor</li>
                <li>• Ziddiyat va aralash xabarlar</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PRACTICAL TIPS */}
        <section className="bg-white p-6 rounded-2xl shadow mb-8">
          <h2 className="text-2xl font-bold">Amaliy maslahatlar</h2>
          <ol className="mt-3 list-decimal ml-5 text-neutral-600 space-y-3">
            <li>
              <strong>Muloqotni yo'lga qo'ying:</strong> oila majlislarini
              haftada bir o'tkazib, tarbiya va qoidalarni muhokama qiling.
            </li>
            <li>
              <strong>Qoida va chegara:</strong> farzand bilan bog'liq qoidalar
              bir xil bo'lishi kerak — ota va ona orasida kelishuv bo'lsin.
            </li>
            <li>
              <strong>Hissiy qo'llab-quvvatlash:</strong> bir-biringizni
              qo'llab-quvvatlang, farzand oldida iroda va hurmatni saqlang.
            </li>
            <li>
              <strong>Yaxshi namuna:</strong> ota-onalar o'zaro hurmatni
              ko'rsatsa, bola shuni o'rganadi.
            </li>
          </ol>
        </section>

        {/* MEDIA: IMAGE GALLERY + VIDEO */}
        <section className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">
              Multimedia: Video va rasm
            </h3>

            <div className="aspect-video w-full rounded-lg overflow-hidden shadow mb-4">
              {/* YouTube iframe */}
              <iframe
                className="w-full h-full"
                src={toEmbedUrl(
                  'https://youtu.be/mSlyeGv6aws?si=_nHafnkGr5i7ONg6',
                )}
                title="Ota-Ona sinergiyasi video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-lg overflow-hidden h-28">
                <Image
                  src="/sinergiya2.jpg"
                  width={400}
                  height={300}
                  alt="family-1"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-28">
                <Image
                  src="/sinergiya3.jpg"
                  width={400}
                  height={300}
                  alt="family-2"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-28">
                <Image
                  src="/sinergiya4.jpg"
                  width={400}
                  height={300}
                  alt="family-3"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <aside className="bg-white p-6 rounded-2xl shadow">
            <h4 className="text-lg font-semibold mb-3">Tezkor resurslar</h4>
            <ul className="text-neutral-600 space-y-2">
              <li>
                •{' '}
                <a className="text-indigo-600" href="#">
                  Kitob: Ota-ona hamkorligi
                </a>
              </li>
              <li>• Seminarlar va maslahatlar (lokal guruhlar)</li>
              <li>• Maksimal fokus: muloqot</li>
            </ul>
          </aside>
        </section>

        {/* FAQ + CTA */}
        <section className="bg-white p-6 rounded-2xl shadow mb-12 flex flex-col gap-5">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Savollar va Javoblar
          </h2>

          {faqItems.map((item, idx) => (
            <details key={idx} className="mb-3 group">
              <summary className="text-xl font-medium cursor-pointer list-none flex justify-between items-center">
                {item.question}
                <span className="transition-transform duration-300 group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-2 text-neutral-600 text-xl">{item.answer}</p>
            </details>
          ))}

          <div className="mt-6 text-center">
            <a
              href="#"
              className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
            >
              Ko'proq resurslar
            </a>
          </div>
        </section>

        <footer className="text-center text-sm text-neutral-500 py-6">
          © {new Date().getFullYear()} Ota-Ona Sinergiyasi — Ta'lim resursi
        </footer>
      </div>
    </main>
  );
}
