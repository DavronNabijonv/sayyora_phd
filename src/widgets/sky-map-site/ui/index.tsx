// &aposuse client&apos;

// // import { skyMapSites } from &apos../lib/data&apos;
// // import SkyMapSiteCard from &apos./SkyMapSiteCard&apos;

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

'use client';

import React from 'react';
import Image from 'next/image';

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
              Ota va onaning uyg&aposun hamkorligi — farzand uchun ishonchli,
              hissiy va axloqiy muhit yaratadi. Bu sahifada konsept, amaliy
              maslahatlar, taqqoslamalar va multimedia resurslari jamlangan.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#definition"
                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:shadow-md"
              >
                To&aposliq ta&aposrif
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
              src="/telegram_baxtli_hayot.jpg"
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
                natijasidan ko&aposproq kuchga ega bo&aposladi.
              </p>
            </div>
          </div>
        </header>

        {/* DEFINITION */}
        <section
          id="definition"
          className="bg-white rounded-2xl p-8 shadow mb-8"
        >
          <h2 className="text-2xl font-bold">Oddiy ta&aposrif</h2>
          <p className="mt-3 text-neutral-600">
            Ota-ona sinergiyasi — bu ota va onaning o&aposzaro hamkorligi, fikr,
            qaror va harakatlaridagi uyg&aposunlik orqali farzandga barqaror
            psixologik, hissiy va axloqiy muhit yaratishidir.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-semibold">Asosiy g&aposoya</h4>
              <p className="text-sm text-neutral-600 mt-2">
                Sinergiya orqali ota-ona tarbiyada bir yo&aposlni tanlab, oilada
                barqarorlikni ta&aposminlaydi.
              </p>
            </div>

            <div className="p-4 bg-emerald-50 rounded-lg">
              <h4 className="font-semibold">Nega muhim?</h4>
              <p className="text-sm text-neutral-600 mt-2">
                Uyg&aposun tarbiya bola ruhiyatini mustahkamlaydi, xavfsizlik va
                barqaror o&aposqish muhitini beradi.
              </p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold">Esda tuting</h4>
              <p className="text-sm text-neutral-600 mt-2">
                Sinergiya ota va onaning rollarini to&aposg&aposri taqsimlash
                orqali mustahkamlanadi.
              </p>
            </div>
          </div>
        </section>

        {/* MEANING + BULLETS */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Sinergiya so&aposzining ma&aposnosi
            </h3>
            <p className="text-neutral-600">
              Sinergiya — bir nechta kuch birlashganda ularning umumiy natijasi
              alohida kuchlarning yig&aposindisidan ko&aposproq bo&aposlishi
              hodisasi.
            </p>
            <p className="mt-4 text-sm text-neutral-500">
              Qisqasi: <strong>1 + 1 = 3</strong> — ya&aposni ota va ona
              birgalikda farzand tarbiyasida kuchli ta&apossir qoldiradi.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Asosiy belgilar</h3>
            <ul className="space-y-2 text-neutral-600">
              <li>• Bir xil yo&aposnalishda tarbiya</li>
              <li>• Farzand oldida qarama-qarshi gapirmaslik</li>
              <li>• Bir-birini hurmat qilish</li>
              <li>• Rolni to&aposg&aposri taqsimlash</li>
              <li>• Qo&aposllab-quvvatlash</li>
            </ul>
          </div>
        </section>

        {/* COMPARISON */}
        <section
          id="comparison"
          className="bg-white p-6 rounded-2xl shadow mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">
            Sinergiya mavjud vs sinergiya yo&aposq
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
              <h4 className="font-semibold text-rose-700">
                Sinergiya yo&aposq
              </h4>
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
              <strong>Muloqotni yo&aposlga qo&aposying:</strong> oila
              majlislarini haftada bir o&apostkazib, tarbiya va qoidalarni
              muhokama qiling.
            </li>
            <li>
              <strong>Qoida va chegara:</strong> farzand bilan bog&aposliq
              qoidalar bir xil bo&aposlishi kerak — ota va ona orasida kelishuv
              bo&aposlsin.
            </li>
            <li>
              <strong>Hissiy qo&aposllab-quvvatlash:</strong> bir-biringizni
              qo&aposllab-quvvatlang, farzand oldida iroda va hurmatni saqlang.
            </li>
            <li>
              <strong>Yaxshi namuna:</strong> ota-onalar o&aposzaro hurmatni
              ko&aposrsatsa, bola shuni o&aposrganadi.
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
                src="https://www.youtube.com/embed/VIDEO_ID?rel=0&modestbranding=1"
                title="Ota-Ona sinergiyasi video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-lg overflow-hidden h-28">
                <Image
                  src="/telegram_baxtli_hayot.jpg"
                  width={400}
                  height={300}
                  alt="family-1"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-28">
                <Image
                  src="/telegram_baxtli_hayot.jpg"
                  width={400}
                  height={300}
                  alt="family-2"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-28">
                <Image
                  src="/telegram_baxtli_hayot.jpg"
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
        <section className="bg-white p-6 rounded-2xl shadow mb-12">
          <h2 className="text-2xl font-bold mb-4">Savollar va javoblar</h2>
          <details className="mb-3">
            <summary className="font-medium cursor-pointer">
              Sinergiyani qanday boshlash mumkin?
            </summary>
            <p className="mt-2 text-neutral-600">
              Ochiq muloqotdan boshlang: haftalik oilaviy uchrashuvlar tashkil
              qiling.
            </p>
          </details>
          <details className="mb-3">
            <summary className="font-medium cursor-pointer">
              Agar ota va ona fikri farq qilsa?
            </summary>
            <p className="mt-2 text-neutral-600">
              Avvalo muammo haqida ochiq suhbat qiling va uchinchi taraf
              (maslahatchi) jalb qiling.
            </p>
          </details>

          <div className="mt-6 text-center">
            <a
              href="#"
              className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg"
            >
              Ko&aposproq resurslar
            </a>
          </div>
        </section>

        <footer className="text-center text-sm text-neutral-500 py-6">
          © {new Date().getFullYear()} Ota-Ona Sinergiyasi — Ta&aposlim resursi
        </footer>
      </div>
    </main>
  );
}
