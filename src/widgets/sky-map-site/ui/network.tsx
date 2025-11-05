'use client';

import Image from 'next/image';
import Link from 'next/link';

interface kanalType {
  id: number;
  background: string;
  telegram: string;
  title: string;
}

const kanallar: kanalType[] = [
  {
    id: 1,
    title: 'Oila Tayanchi',
    background: '/oila.jpg',
    telegram: 'https://t.me/web_dasturlash_uz',
  },
  {
    id: 2,
    title: 'Oilada bola tarbiyasi',
    background: '/oila.jpg',
    telegram: 'https://t.me/javascript_master',
  },
  {
    id: 3,
    title: 'Bola boshidan',
    background: '/oila.jpg',
    telegram: 'https://t.me/react_dasturchilar',
  },
  {
    id: 4,
    title: 'Oilaga tayyorgarlik',
    background: '/oila.jpg',
    telegram: 'https://t.me/it_yangiliklari',
  },
];

export default function Network() {
  return (
    <div className="grid grid-cols-2 justify-center justify-items-center gap-5">
      {kanallar.map((kanal) => (
        <Link
          key={kanal.id}
          href={kanal.telegram}
          className="relative group max-w-[400px] w-full h-40 rounded-2xl"
        >
          <Image
            src={kanal.background}
            alt="image for background"
            width={400}
            height={400}
            className="w-full h-full absolute z-10 top-0 left-0 object-cover rounded-2xl"
          />
          <div className="absolute top-0 left-0 z-20 duration-75 transition-all bg-[#d9dbfa67] group-hover:w-full w-0 group-hover:h-full h-0 rounded-2xl backdrop-saturate-200 backdrop-blur-none"></div>
          <a className="hover:cursor-pointer absolute z-30 top-[40%] left-[40%] text-lg font-medium bg-[#1635e498] px-2 py-1 text-white">
            {kanal.title}
          </a>
        </Link>
      ))}
    </div>
  );
}
