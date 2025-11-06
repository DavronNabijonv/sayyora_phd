// import { skyMapApps } from '@/widgets/sky-map/lib/data';
// import SkyMapGrid from '@/widgets/sky-map/ui';

// const page = () => {
//   return (
//     <div className="p-2">
//       <h1 className="text-xl font-semibold mb-2">{`Astronomik oq'uv ilovalar`}</h1>
//       <SkyMapGrid data={skyMapApps} />
//     </div>
//   );
// };

// export default page;

/* eslint-disable react/no-unescaped-entities */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function page() {
  const sections = [
    {
      title: 'I bo‘lim. Umumiy qoidalar',
      desc: 'Oilaviy qonunchilikning asosiy tamoyillari — o‘zaro hurmat, ishonch, teng huquqlilik va oila mustahkamligini ta’minlashga qaratilgan.',
      link: 'https://lex.uz/docs/-104720',
    },
    {
      title: 'II bo‘lim. Nikoh',
      desc: 'Nikoh tuzish, shartlari va tartibi, er-xotin huquq va majburiyatlari, tenglik tamoyili va nikoh yoshiga doir me’yorlar bayon etilgan.',
      link: 'https://lex.uz/docs/-104720?ONDATE=08.05.2023#-158552',
    },
    {
      title: 'III bo‘lim. Er-xotinning shaxsiy huquq va majburiyatlari',
      desc: 'Er va xotin oila masalalarini birgalikda hal qiladi, teng huquqlarga ega bo‘lib, farzandlar tarbiyasida hamkorlikda qatnashadi.',
      link: 'https://lex.uz/docs/-104720?ONDATE=08.05.2023#-158552',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-16 px-6">
      {/* Header */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-14"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-sky-700 mb-4">
          O‘zbekiston Respublikasining Oila kodeksi
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Ushbu sahifada Oila kodeksining asosiy bo'limlari bilan tanishing. Har
          bir bo'lim uchun "Ko'proq o'qish" tugmasini bosish orqali rasmiy{' '}
          <strong>lex.uz</strong> manbaiga o'tishingiz mumkin.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sections.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl p-6 transition-all duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div>
              <h2 className="text-2xl font-semibold text-sky-700 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>

            <Link
              href={item.link}
              target="_blank"
              className="mt-6 inline-block text-center bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Ko'proq o'qish →
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Info section */}
      <motion.div
        className="max-w-4xl mx-auto mt-16 bg-sky-100 rounded-2xl p-8 shadow-inner text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-sky-700 mb-4">
          🏛️ Oila kodeksi haqida
        </h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          O'zbekiston Respublikasining Oila kodeksi — oilaviy munosabatlarni
          tartibga soluvchi asosiy hujjatdir. U oilaning mustahkamligi, onalik
          va otalikni himoya qilish, farzandlar manfaatini ta'minlash, er va
          xotin teng huquqliligini kafolatlaydi.
        </p>
      </motion.div>
    </div>
  );
}
