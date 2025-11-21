'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: ReactNode }) {
  const locale = useLocale();
  const pathname = usePathname(); // <-- GET CURRENT URL

  const routes = [
    { id: 1, path: `/${locale}/fan-hujjatlar/muallif`, name: 'Muallif haqida' },
    {
      id: 2,
      path: `/${locale}/fan-hujjatlar/ota_ona_malumot`,
      name: 'Bolam baxtli bo`lsin desangiz',
    },
    {
      id: 3,
      path: `/${locale}/fan-hujjatlar/xorij_tarbiya`,
      name: 'Xorij oilasidagi tarbiyaviy hayot',
    },
    {
      id: 4,
      path: `/${locale}/fan-hujjatlar/mediaxavfsizlik`,
      name: 'Ota-ona mediaxavfsizlik bo`yicha 30 ta tavsiya',
    },
    {
      id: 5,
      path: `/${locale}/fan-hujjatlar/maslahatlar`,
      name: 'Psixolog va pedagogik maslahatlar',
    },
  ];

  return (
    <div>
      <div className="py-5 flex items-center flex-wrap gap-3 justify-between">
        {routes.map((items) => {
          const isActive = pathname === items.path;

          return (
            <Link
              key={items.id}
              href={items.path}
              className={`
                rounded-lg border-2 px-2 py-1 text-lg font-medium
                ${isActive ? 'bg-primary text-white border-primary' : 'text-primary border-primary'}
              `}
            >
              {items.name}
            </Link>
          );
        })}
      </div>

      {children}
    </div>
  );
}
