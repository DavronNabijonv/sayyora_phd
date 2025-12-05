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
import Image from 'next/image';

export default function Page() {
  const cards = [
    {
      title: 'Raqamli pedagogika',
      text: 'Oilada texnologiyani to‘g‘ri va sokin ritmda yo‘naltirish: bolalar uchun foydali ilovalar, birgalikda onlayn tajribalar va ta’limiy kontentlardan izchil foydalanish.',
    },
    {
      title: 'Hissiy intellekt (EQ)',
      text: 'Bola his-tuyg‘ularini tushunadi, boshqaradi va erkin ifoda etadi. Ota-ona jazodan ko‘ra, sokin muloqotni tanlaydi.',
    },
    {
      title: 'Hamkorlikdagi tarbiya',
      text: 'Tarbiya — bir tomonlama nazorat emas, balki sheriklik. O‘rganish jarayoni qulay, tinch va iliq muhitda kechadi.',
    },
    {
      title: 'Moslashuvchan qadriyatlar',
      text: 'An’analar saqlanadi, zamon talabi bilan uyg‘unlashadi. Oila qadriyatlari tinch rivojlanishga intiladi.',
    },
    {
      title: 'Ijodkorlik va tanqidiy fikr',
      text: 'Farzand o‘z fikrini erkin bildiradi, ijod qiladi va g‘oyalar qadrlanadi. Har bir savol — yangi kashfiyot.',
    },
  ];

  return (
    <div className="relative min-h-screen py-20 px-6">
      <div className="absolute top-0 left-0 w-full h-full -z-0">
        <Image
          src="/oila3.jpg"
          alt="back image"
          fill
          className="object-cover object-bottom"
        />
      </div>

      <motion.div
        className="max-w-5xl mx-auto text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#2b5876] mb-6 drop-shadow-sm">
          🌤️ Tarbiyaviy Innovatsiya
        </h1>
        <p className="text-xl md:text-2xl text-[#4a7080] leading-relaxed max-w-3xl mx-auto">
          Ushbu sahifa sizni tinchlantirish uchun yaratilgan. Yumshoq ranglar,
          sokin animatsiyalar va foydali ma&rdquo;lumotlar orqali siz nafaqat
          o&rdquo;qiysiz — dam ham olasiz.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-8 border border-white hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-2xl font-semibold text-[#2b5876] mb-4">
              {card.title}
            </h2>
            <p className="text-[#4a7080] leading-relaxed text-lg">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-4xl mx-auto mt-24 bg-gradient-to-br from-[#cde7ff] to-[#eaf6ff] rounded-3xl p-10 shadow-xl text-center border border-white/60 backdrop-blur-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold text-[#2b5876] mb-6">
          ✨ Ideal sokin innovatsion oila
        </h3>
        <p className="text-[#4a7080] leading-relaxed text-xl max-w-2xl mx-auto">
          &rdquo;Oila — insonning eng sokin va eng ilhom beruvchi makoni.&rdquo;
          Bu yerda ota — yo&rdquo;l ko&rdquo;rsatuvchi, ona — ruhlantiruvchi,
          bola esa — kashfiyotchi shaxs. Har bir kun tinch innovatsiyalar bilan
          boyib boradi.
        </p>
      </motion.div>
    </div>
  );
}
