export type SidebarMenuItem = {
  label: string;
  icon?: string;
  link?: string;
  children?: SidebarMenuItem[];
};

export const sidebarMenuData: SidebarMenuItem[] = [
  {
    label: 'Bosh sahifa',
    icon: 'House',
    link: '/',
  },
  {
    label: 'Innavatsion oila',
    icon: 'Atom',
    link: '/fan-hujjatlar',
  },
  {
    label: 'Tarbiyaviy transfarmatsiya',
    icon: 'RefreshCw',
    link: '/fan-malumotlari',
  },
  {
    label: 'Pedagogik yangilanish',
    icon: 'BookOpen',
    link: '/darslik-adabiyot',
  },
  {
    label: 'Intellektual tarbiya',
    icon: 'Brain',
    link: '/videodarslar',
  },
  {
    label: 'Zamonaviy ota-ona',
    icon: 'Users2',
    link: '/fotogalereya',
  },
  {
    label: 'Ota-onalar sinergiyasi',
    icon: 'Handshake',
    link: '/osmon-xaritasi',
  },
  {
    label: 'Axborot tarbiyasi',
    icon: 'MonitorSmartphone',
    link: '/astronomik-ilovalar',
  },
  {
    label: 'Rivojlanuvchi oila',
    icon: 'Sprout',
    link: '/virtual-labaratorya',
  },
  {
    label: 'Tarbiyaviy innovatsiya',
    icon: 'Rocket',
    link: '/ilimiy-ilovalar',
  },
  {
    label: 'Ijtimoiy tarmoqlar',
    icon: 'Cctv',
    children: [
      { label: 'Telegramm', link: '/onlayn-kuzatuvlar/telegram' },
      { label: 'YouTobe', link: '/onlayn-kuzatuvlar/youTobe' },
      { label: 'Instagramm', link: '/onlayn-kuzatuvlar/instagram' },
    ],
  },
  // {
  //   label: 'Testlar',
  //   icon: 'NotebookText',
  //   link: '/testlar',
  // },
  // {
  //   label: 'Metodik yordam',
  //   icon: 'PencilRuler',
  //   link: '/metodik-yordam',
  // },
];
