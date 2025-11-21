'use client';

import React from 'react';

export default function SayyoraEntrancePage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 sm:p-12">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <header className="p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold">
              Azimova Sayyora Toshtemirovna
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              T.N. Qori Niyoziy nomidagi O&lsquo;zbekiston Pedagogika fanlari
              ilmiy-tadqiqot instituti — tayanch doktaranti
            </p>

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
                Tug&lsquo;ilgan yili: 30.05.1986
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
                Tug&lsquo;ilgan joyi: Samarqand vil., Poyariq tum.
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
                Millati: O&lsquo;zbek
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
                Partiyaviyligi: yo&lsquo;q
              </span>
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm">
              <a href="mailto:asayyora3005@gmail.com" className="underline">
                asayyora3005@gmail.com
              </a>
              <a
                href="https://t.me/sayyoraazi1"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                @sayyoraazi1 (Telegram)
              </a>
            </div>
          </div>
        </header>

        <div className="border-t border-gray-100 dark:border-gray-700 p-8 sm:p-12">
          <section className="mb-8">
            <h2 className="text-lg font-semibold">Hozirgi lavozim</h2>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              2023 yil 4 yanvardan — <strong>Tayanch doktarant</strong> at T.N.
              Qori Niyoziy nomidagi O&lsquo;zbekiston Pedagogika fanlari
              ilmiy-tadqiqot instituti.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold">Ma&lsquo;lumot</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>
                <strong>Mutaxassisligi:</strong> Pedagogika
              </li>
              <li>
                <strong>Oliy ta&lsquo;lim:</strong> 2010 — Nizomiy nomidagi
                Toshkent davlat pedagogika universiteti (bakalavr)
              </li>
              <li>
                <strong>Magistratura:</strong> 2012 — Nizomiy nomidagi Toshkent
                davlat pedagogika universiteti (magistratura)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold">Ish tajribasi</h2>
            <div className="mt-3 space-y-4 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <div className="font-medium">2014–2023</div>
                <div className="text-sm">
                  Nizomiy nomidagi Toshkent davlat pedagogika universiteti —
                  “Umumiy pedagogika” kafedrasi, stajyor o&lsquo;qituvchisi
                </div>
              </div>

              <div>
                <div className="font-medium">2013–2014</div>
                <div className="text-sm">
                  Toshkent pedagogika kollejida — psixolog
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              Qo&lsquo;shimcha ma&lsquo;lumot
            </h2>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              Agar sizga CV formatida eksport, chop etish uchun print-friendy
              sahifa yoki boshqa tilga tarjima kerak bo&lsquo;lsa, ayting — men
              yordam beraman.
            </p>
          </section>
        </div>

        <footer className="p-6 text-center text-xs text-gray-500 dark:text-gray-400">
          &copy; Sayyora Azimova — ma&lsquo;lumot yangilandi: 2023 yil 4 yanvar
          (sahifa shabloni)
        </footer>
      </div>
    </main>
  );
}
