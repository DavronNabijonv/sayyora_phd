// import { virtualLabs } from '@/widgets/sky-map-site/lib/data';
// import SkyMapSiteCard from '@/widgets/sky-map-site/ui/SkyMapSiteCard';
// import React from 'react';

// const page = () => {
//   return (
//     <div className="mx-auto p-2 space-y-2">
//       <h1 className="text-md font-medium mb-2">Virtual labaratoryalar</h1>
//       <div className="grid grid-cols-1 gap-2">
//         {virtualLabs.map((site) => (
//           <SkyMapSiteCard key={site.id} site={site} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;

'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  const cards = [
    {
      title: 'Doimiy o‘sish va o‘rganish',
      text: 'Rivojlanuvchi oilada har bir a’zo o‘z ustida ishlaydi. Ota-ona va farzandlar birgalikda o‘rganish orqali oila madaniyatini boyitadi.',
    },
    {
      title: 'Ochiq muloqot',
      text: 'Barcha fikr va his-tuyg‘ular erkin ifodalanadi. Oila a’zolari bir-birini tinglashni, tushunishni va hurmat qilishni o‘rganadi.',
    },
    {
      title: 'Moslashuvchan qadriyatlar',
      text: 'Oila qadriyatlari zamon bilan birga rivojlanadi. Eski an’analar saqlanadi, lekin yangiliklardan ham foydalaniladi.',
    },
    {
      title: 'Hamkorlikda rivojlanish',
      text: 'Oilaviy qarorlar birgalikda muhokama qilinadi. Bu jarayon bolalarda javobgarlik va mustaqil fikrlashni rivojlantiradi.',
    },
    {
      title: 'Ijobiy energiya muhiti',
      text: 'Oilada minnatdorchilik, rag‘bat va e’tirof ustun turadi. Har bir kichik yutuq qadrlanadi va ruhiy barqarorlikni oshiradi.',
    },
    {
      title: 'Tarbiya – ikki yo‘nalishli jarayon',
      text: 'Bola ota-onadan o‘rganadi, ota-ona esa bolaning dunyoqarashidan ilhom oladi. Har kim o‘zini qadrlangan his qiladi.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-16 px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-sky-700 mb-4">
          🌿 Rivojlanuvchi oila
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Rivojlanuvchi oila — bu o‘zgarishdan qo‘rqmaydigan, o‘sishga tayyor
          oila. Har bir a’zo o‘zining shaxsiy, axloqiy va hissiy rivojiga
          e’tibor beradi.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-sky-600 mb-3">
              {card.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-4xl mx-auto mt-16 bg-sky-100 rounded-2xl p-8 shadow-inner text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-sky-700 mb-4">
          🏡 Ideal rivojlanuvchi oila modeli
        </h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          “Oila — bu sevgi, muloqot va o‘zgarish orqali birga o‘sadigan makon.”
          Unda ota — yo‘l ko‘rsatuvchi, ona — mehr markazi, bola esa —
          o‘rganuvchi va o‘rgatuvchi shaxsdir.
        </p>
      </motion.div>
    </div>
  );
}
