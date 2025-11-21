// import Welcome from '@/widgets/welcome';
// //import { redirect } from 'next/navigation';

// export default async function Home() {
//   //redirect('/uz/fan-hujjatlar');
//   return <Welcome/>
// }

'use client';

import React from 'react';
import { statCardData } from '@/widgets/stat-card/lib/data';
import StatCard from '@/widgets/stat-card/ui';
import { tasks } from '@/widgets/task-card/lib/data';
import TaskCard from '@/widgets/task-card/ui';

export default function OilaMaktabiEntrance() {
  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Oila Maktabiga Xush kelibsiz
        </h1>
        <p className="mt-3 max-w-3xl text-base sm:text-lg text-gray-100">
          Oila — inson tarbiyasining birlamchi maskani. Milliy qadriyatlar,
          zamonaviy tarbiya yondashuvlari va o‘zbek oilasining zamonaviy modeli
          haqida chuqur bilim va amaliy ko‘nikmalar beruvchi ta`lim platformasi.
        </p>
      </section>

      {/* National + Modern Uzbek Family Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Milliy va Zamonaviy O‘zbek Oilasi
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          O‘zbek oilasi qadimdan mustahkam qadriyatlarga ega: hurmat,
          mehr-oqibat, kattalarga ehtirom, bolalarga mehribonlik, mehnatsevarlik
          va odob-axloq mezonlari. Ajdodlarimizdan meros bo‘lgan bu an`analar
          bugungi globallashuv davrida ham o‘z ahamiyatini yo‘qotmagan.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Zamonaviy o‘zbek oilasi esa milliy qadriyatlar bilan bir qatorda
          innovatsion fikrlash, psixologik savodxonlik, sog‘lom muloqot,
          mediaxavfsizlik va farzandlar tarbiyasida zamonaviy yondashuvlarni
          o‘zida mujassam etadi. Bu uyg‘unlik farzandlarning ma`naviy,
          intellektual va psixologik barkamol bo‘lib ulg‘ayishida muhim o‘rin
          tutadi.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Ushbu platforma sizga aynan shu yo‘nalishlarda: ma`naviyat, tarbiya,
          psixologiya, ota-ona madaniyati, bolalar bilan ishlash, oilaviy
          muloqot va media savodxonlik bo‘yicha amaliy va nazariy materiallarni
          taqdim etadi.
        </p>
      </section>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {statCardData.map((data, idx) => (
          <StatCard key={idx} {...data} />
        ))}
      </div>

      {/* Tasks Section */}
      <section className="p-[15px] border rounded-md shadow-sm bg-white dark:bg-gray-800">
        <h2 className="text-xl font-semibold mb-2">Fan topshiriqlari</h2>
        <div className="grid grid-cols-1 gap-4">
          {tasks.map((task, index) => (
            <TaskCard key={index} {...task} />
          ))}
        </div>
      </section>
    </div>
  );
}
