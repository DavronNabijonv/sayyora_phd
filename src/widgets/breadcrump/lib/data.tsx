import {
  House,
  NotebookPen,
  BookMarked,
  BookOpenText,
  Clapperboard,
  ImageDown,
  Telescope,
  Layers,
  Microscope,
  Album,
  Cctv,
  NotebookText,
  PencilRuler,
  Smartphone,
} from 'lucide-react';
import { JSX } from 'react';

export const breadcrumbMap: Record<
  string,
  { label: string; icon: JSX.Element; href?: string }[]
> = {
  '/': [{ label: 'Bosh sahifa', icon: <House size={16} />, href: '/' }],

  '/fan-hujjatlar/fan-dasturi': [
    {
      label: 'Innavatsion oila',
      icon: <NotebookPen size={16} />,
      href: '#',
    },
    {
      label: 'Fan meyoriy hujjatlar',
      icon: <NotebookPen size={16} />,
      href: '/fan-hujjatlar/fan-dasturi',
    },
  ],
  '/fan-hujjatlar/fan-sillabusi': [
    {
      label: 'Innavatsion oila',
      icon: <NotebookPen size={16} />,
      href: '#',
    },
    {
      label: 'Fan meyoriy hujjatlar',
      icon: <NotebookPen size={16} />,
      href: '/fan-hujjatlar/fan-sillabusi',
    },
  ],
  '/fan-hujjatlar/glossary': [
    {
      label: 'Innavatsion oila',
      icon: <NotebookPen size={16} />,
      href: '#',
    },
    {
      label: 'Fan meyoriy hujjatlar',
      icon: <NotebookPen size={16} />,
      href: '/fan-hujjatlar/glossary',
    },
  ],

  '/fan-malumotlari/maruza': [
    {
      label: 'Tarbiyaviy transfarmatsiya',
      icon: <BookMarked size={16} />,
      href: '#',
    },
    {
      label: "Fan ma'lumotlari",
      icon: <BookMarked size={16} />,
      href: '/fan-malumotlari/maruza',
    },
  ],
  '/fan-malumotlari/amaliy': [
    {
      label: 'Tarbiyaviy transfarmatsiya',
      icon: <BookMarked size={16} />,
      href: '#',
    },
    {
      label: "Fan ma'lumotlari",
      icon: <BookMarked size={16} />,
      href: '/fan-malumotlari/amaliy',
    },
  ],
  '/fan-malumotlari/labaratorya': [
    {
      label: 'Tarbiyaviy transfarmatsiya',
      icon: <BookMarked size={16} />,
      href: '#',
    },
    {
      label: "Fan ma'lumotlari",
      icon: <BookMarked size={16} />,
      href: '/fan-malumotlari/labaratorya',
    },
  ],
  '/fan-malumotlari/mustaqil': [
    {
      label: 'Tarbiyaviy transfarmatsiya',
      icon: <BookMarked size={16} />,
      href: '#',
    },
    {
      label: "Fan ma'lumotlari",
      icon: <BookMarked size={16} />,
      href: '/fan-malumotlari/mustaqil',
    },
  ],

  '/darslik-adabiyot': [
    {
      label: 'Pedagogik yangilanish',
      icon: <BookOpenText size={16} />,
      href: '/darslik-adabiyot',
    },
  ],

  '/videodarslar': [
    {
      label: 'Intellektual tarbiya',
      icon: <Clapperboard size={16} />,
      href: '/videodarslar',
    },
  ],
  '/fotogalereya': [
    {
      label: 'Zamonaviy ota-ona',
      icon: <ImageDown size={16} />,
      href: '/fotogalereya',
    },
  ],
  '/osmon-xaritasi': [
    {
      label: 'Ota-onalar sinergiyasi',
      icon: <Telescope size={16} />,
      href: '/osmon-xaritasi',
    },
  ],
  '/astronomik-ilovalar': [
    {
      label: 'Axborot tarbiyasi',
      icon: <Layers size={16} />,
      href: '/astronomik-ilovalar',
    },
  ],
  '/virtual-labaratorya': [
    {
      label: 'Rivojlanuvchi oila',
      icon: <Microscope size={16} />,
      href: '/virtual-labaratorya',
    },
  ],
  '/ilimiy-ilovalar': [
    {
      label: 'Tarbiyaviy innovatsiya',
      icon: <Album size={16} />,
      href: '/ilimiy-ilovalar',
    },
  ],
  '/onlayn-kuzatuvlar': [
    {
      label: 'Ijtimoiy tarmoqlar',
      icon: <Cctv size={16} />,
      href: '/onlayn-kuzatuvlar',
    },
  ],
  '/testlar': [
    { label: 'Testlar', icon: <NotebookText size={16} />, href: '/testlar' },
  ],
  '/metodik-yordam': [
    {
      label: 'Metodik yordam',
      icon: <PencilRuler size={16} />,
      href: '/metodik-yordam',
    },
  ],
  '/mobil-ilova': [
    {
      label: 'Mobil ilova',
      icon: <Smartphone size={16} />,
      href: '/mobil-ilova',
    },
  ],
};
