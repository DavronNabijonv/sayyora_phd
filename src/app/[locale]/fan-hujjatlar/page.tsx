// 'use client';
// import { lectureSections } from '@/widgets/file-list/lib/data';
// import LectureTable from '@/widgets/file-list/ui';
// import LectureDetail from '@/widgets/file-list/ui/FileDetail';

// export default function Page() {
//   const basePath = '/fan-hujjatlar/glossary';
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

import React from 'react';
import Image from 'next/image';

export default function InnovatsionOilaPage() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 text-gray-900">
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* HERO */}
          <header className="grid gap-8 md:grid-cols-2 items-center mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Innovatsion oila
              </h1>
              <p className="mt-4 text-gray-600 text-lg">
                An';analarni saqlagan holda yangiliklarni qabul qiladigan va
                farzandlarni texnologiya hamda ijodga tayyorlaydigan oila
                modelining to';liq tasviri va amaliy tavsiyalari.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#definition"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Ta';rif
                </a>
                <a
                  href="#benefits"
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg"
                >
                  Afzalliklar
                </a>
              </div>
            </div>

            <div className="w-full md:w-96 rounded-2xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/telegram_baxtli_hayot.jpg"
                width={600}
                height={400}
                alt="Innovative family"
                className="object-cover w-full h-64"
              />
              <div className="p-4">
                <h3 className="font-semibold">
                  Infografika: Innovatsion oilaning asoslari
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Oila ichida bilim, texnologiya va madaniyat uyg';unligi.
                </p>
              </div>
            </div>
          </header>

          {/* DEFINITION */}
          <section
            id="definition"
            className="bg-white rounded-2xl p-6 shadow mb-6"
          >
            <h2 className="text-2xl font-semibold">Oddiy ta';rif</h2>
            <p className="mt-3 text-gray-700">
              Innovatsion oila — bu yangi g';oyalar va texnologiyalarni
              ongli ravishda hayotga joriy etuvchi, farzandlarini ijodkor va
              zamonaviy fikrlaydigan insonlar qilib tarbiyalaydigan oila.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold">Fikr erkinligi</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Farzand fikrini ochiq aytadi va ota-ona tinglaydi.
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold">Texnologiyani qo';llash</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Qurilmalar va xizmatlar ta';lim va ijodda vosita sifatida
                  ishlatiladi.
                </p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold">Growth mindset</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Xato — o';rganish uchun imkoniyat, o';sishga
                  yo';naltirilgan yondashuv.
                </p>
              </div>
            </div>
          </section>

          {/* BENEFITS */}
          <section id="benefits" className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold">
                Innovatsion oilaning foydalari
              </h3>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
                <li>Mustaqil va ijodkor farzandlar</li>
                <li>Ota-onaning doimiy rivojlanishi (lifelong learning)</li>
                <li>Jamiyatga ijobiy ta';sir — innovatsion salohiyat</li>
                <li>Texnologiya orqali o';quv resurslarga kirish</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold">Asosiy ustunliklar</h3>
              <ol className="mt-4 list-decimal list-inside space-y-2 text-gray-700">
                <li>EQ (hissiy intellekt) va IQ muvozanati</li>
                <li>Uyda muammolarni hal qilish madaniyati</li>
                <li>
                  Yoshlarni startap, ilm va kreativlikka yo';naltirish
                </li>
              </ol>
            </div>
          </section>

          {/* PRACTICAL TIPS */}
          <section className="bg-white p-6 rounded-2xl shadow mb-6">
            <h2 className="text-2xl font-semibold mb-4">Amaliy tavsiyalar</h2>
            <ul className="list-decimal list-inside space-y-3 text-gray-700">
              <li>
                Har hafta oilaviy &quot;learning hour&quot; o';tkazing —
                birga yangi mavzuni o';rganing.
              </li>
              <li>
                Farzand bilan birgalikda kodlash, robototexnika yoki ilmiy
                tajribalar qiling.
              </li>
              <li>
                Texnologiya qoidalarini yozma holda belgilang (masalan, ekran
                vaqti, xavfsizlik).
              </li>
              <li>
                Ilmiy va kreativ kurslarga investitsiya qiling — bu bolalarning
                kelajagiga sarmoya.
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-white p-6 rounded-2xl shadow text-center mb-12">
            <h3 className="text-2xl font-semibold mb-3">
              Boshlang — Innovatsion oilani shakllantiring
            </h3>
            <p className="text-gray-700 mb-4">
              Kichik qadamlar katta natija beradi. Bugun oilaviy learning hour
              tashkil eting.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href="#"
                className="px-5 py-2 bg-blue-600 text-white rounded-lg"
              >
                Resurslar
              </a>
              <a
                href="#"
                className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg"
              >
                Seminarlar
              </a>
            </div>
          </section>

          <footer className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Innovatsion oila — Ta'lim resursi
          </footer>
        </div>
      </main>
    </>
  );
}
