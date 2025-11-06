'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Channel = {
  id: number;
  title: string;
  image: string;
  instagram: string;
};

const channels: Channel[] = [
  {
    id: 1,
    title: 'Baxtiyor oila',
    image: '/instagram_image1.jpg',
    instagram: 'https://instagram.com/family1',
  },
  {
    id: 2,
    title: 'Er-Hotin munosabati',
    image: '/insta.jpg',
    instagram: 'https://instagram.com/family2',
  },
];

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-16 px-6">
      {/* Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-sky-700 mb-4">
          🏡 Oila haqida Instagram kanallar
        </h1>
        <p className="text-gray-600 text-lg">
          Ushbu sahifada oilaviy tarbiya, ota-ona maslahatlari va farzand
          tarbiyasiga oid Instagram kanallarini topishingiz mumkin.
        </p>
      </motion.div>

      {/* Channels Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {channels.map((channel) => (
          <motion.div
            key={channel.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={channel.image}
              alt={channel.title}
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
            <h2 className="mt-4 text-lg font-semibold text-sky-700 text-center">
              {channel.title}
            </h2>
            <Link
              href={channel.instagram}
              target="_blank"
              className="mt-3 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
            >
              Instagramga o‘tish
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
