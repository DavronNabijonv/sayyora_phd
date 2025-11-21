/* eslint-disable react/no-unescaped-entities */

'use client';

import React from 'react';
import Image from 'next/image';
import { toEmbedUrl } from '@/widgets/video-lesson/ui';

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
                An'analarni saqlagan holda yangiliklarni qabul qiladigan va
                farzandlarni texnologiya hamda ijodga tayyorlaydigan oila
                modelining to'liq tasviri va amaliy tavsiyalari.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#definition"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Ta'rif
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
                src="/baxtiyior.jpg"
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
                  Oila ichida bilim, texnologiya va madaniyat uyg'unligi.
                </p>
              </div>
            </div>
          </header>

          {/* DEFINITION */}
          <section
            id="definition"
            className="bg-white rounded-2xl p-6 shadow mb-6"
          >
            <h2 className="text-2xl font-semibold">Oddiy ta'rif</h2>
            <p className="mt-3 text-gray-700">
              Innovatsion oila — bu yangi g'oyalar va texnologiyalarni ongli
              ravishda hayotga joriy etuvchi, farzandlarini ijodkor va zamonaviy
              fikrlaydigan insonlar qilib tarbiyalaydigan oila.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold">Fikr erkinligi</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Farzand fikrini ochiq aytadi va ota-ona tinglaydi.
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold">Texnologiyani qo'llash</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Qurilmalar va xizmatlar ta'lim va ijodda vosita sifatida
                  ishlatiladi.
                </p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold">Growth mindset</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Xato — o'rganish uchun imkoniyat, o'sishga yo'naltirilgan
                  yondashuv.
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
                <li>Jamiyatga ijobiy ta'sir — innovatsion salohiyat</li>
                <li>Texnologiya orqali o'quv resurslarga kirish</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold">Asosiy ustunliklar</h3>
              <ol className="mt-4 list-decimal list-inside space-y-2 text-gray-700">
                <li>EQ (hissiy intellekt) va IQ muvozanati</li>
                <li>Uyda muammolarni hal qilish madaniyati</li>
                <li>Yoshlarni startap, ilm va kreativlikka yo'naltirish</li>
              </ol>
            </div>
          </section>

          {/* PRACTICAL TIPS */}
          <section className="bg-white p-6 rounded-2xl shadow mb-6">
            <h2 className="text-2xl font-semibold mb-4">Amaliy tavsiyalar</h2>
            <ul className="list-decimal list-inside space-y-3 text-gray-700">
              <li>
                Har hafta oilaviy &quotlearning hour&quot o'tkazing — birga
                yangi mavzuni o'rganing.
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
              Eskicha: "Sen bu narsani bilmaysan"
              <br />
              Yangilanish: "Keling, birgalikda bilib olaylik"
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
              src={toEmbedUrl(
                'https://youtu.be/-0tcfMhqms8?si=c5_7iSM5YjsVdKLh',
              )}
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
