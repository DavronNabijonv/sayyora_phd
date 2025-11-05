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
    title: 'Baxtli hayot',
    background: '/telegram_baxtli_hayot.jpg',
    telegram: 'https://t.me/Psixologmaslaxati',
  },
  {
    id: 2,
    title: 'Farzand tarbiyasi',
    background: '/telegram_farzand_tarbiyasi.jpg',
    telegram: 'https://t.me/Farzand_tarbiyasi_uzb',
  },
  {
    id: 3,
    title: 'Sog`lom oila',
    background: '/telegram_soglom_oila.jpg',
    telegram: 'https://t.me/soglom_oila_psixologiyasi',
  },
  {
    id: 4,
    title: 'Oilaga tayyorgarlik',
    background: '/telegram_oilaviy_psixolog.jpg',
    telegram: 'https://t.me/PsixologMirzayeva',
  },
];

export default function Network() {
  return (
    <div className="grid grid-cols-2 justify-center justify-items-center gap-5">
      {kanallar.map((kanal) => (
        <Link
          key={kanal.id}
          href={kanal.telegram}
          className="relative group hover:scale-102 max-w-[500px] w-full h-80 rounded-2xl"
        >
          <Image
            src={kanal.background}
            alt="image for background"
            width={600}
            height={600}
            className="w-full h-full absolute z-10 top-0 left-0 object-fill rounded-2xl"
          />
          <div
            className="
          absolute top-0 left-0 z-20 duration-75 transition-all bg-[#ffffffa3] 
          group-hover:opacity-100 opacity-0 w-full h-full rounded-2xl 
          backdrop-blur-none
          "
          ></div>
          <a className="rounded-xl hover:cursor-pointer absolute z-30 top-[40%] left-[40%] text-lg font-medium bg-[#1635e4d3] px-2 py-1 text-white">
            {kanal.title}
          </a>
        </Link>
      ))}
    </div>
  );
}
