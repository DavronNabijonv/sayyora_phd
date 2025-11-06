// import { researchPlatforms } from '@/widgets/sky-map-site/lib/data';
// import SkyMapSiteCard from '@/widgets/sky-map-site/ui/SkyMapSiteCard';
// import React from 'react';

// const page = () => {
//   return (
//     <div className="mx-auto p-2 space-y-2">
//       <h1 className="text-md font-medium mb-2">Ilmiy onlayn ilovalar</h1>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
//         {researchPlatforms.map((site) => (
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
      title: 'Raqamli pedagogika',
      text: 'Oilada texnologiyani to‘g‘ri yo‘naltirish: bolalar uchun foydali ilovalar, onlayn loyihalar va ta’limiy kontentlardan birgalikda foydalanish.',
    },
    {
      title: 'Hissiy intellekt (EQ)',
      text: 'Bola his-tuyg‘ularini anglaydi, boshqaradi va ifoda etadi. Ota-ona jazolash o‘rniga muloqotni tanlaydi.',
    },
    {
      title: 'Hamkorlikdagi tarbiya',
      text: 'Ota-ona va bola o‘rtasida o‘rganish sheriklik asosida kechadi. Tarbiya — ikki tomonlama jarayon.',
    },
    {
      title: 'Moslashuvchan qadriyatlar',
      text: 'An’anani saqlab, zamon talabiga moslashish. Oila qadriyatlari o‘sish va yangilanishga ochiq bo‘ladi.',
    },
    {
      title: 'Ijodkorlik va tanqidiy fikr',
      text: 'Farzand o‘z fikrini erkin bildiradi, ijodiy yechim topishni o‘rganadi va har bir g‘oya qadrlanadi.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
          🌱 Tarbiyaviy innovatsiya
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Tarbiyaviy innovatsiya — bu oilada tarbiya jarayonini yangicha uslubda
          tashkil etish, texnologiya, hissiy yondashuv va ijodkorlikni
          uyg‘unlashtirish orqali bolani zamon bilan birga o‘stirishdir.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              {card.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-4xl mx-auto mt-16 bg-indigo-100 rounded-2xl p-8 shadow-inner text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
          💡 Ideal innovatsion oila modeli
        </h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          “Oila — bu eng samimiy innovatsion makon.” Unda ota — yo‘l
          ko‘rsatuvchi, ona — motivator, bola esa — ijodkor shaxsdir. Har kuni
          yangilik sinovdan o‘tadi, har g‘oya esa oila qadriyatiga aylanadi.
        </p>
      </motion.div>
    </div>
  );
}
