export type SidebarMenuItem = {
  label: string;
  icon?: string;
  link?: string;
  children?: SidebarMenuItem[];
};

export const sidebarMenuData: SidebarMenuItem[] = [
  // {
  //   label: 'Bosh sahifa',
  //   icon: 'House',
  //   link: '/',
  // },
  {
    label: 'Ota-onalar sinergiyasi',
    icon: 'Handshake',
    link: '/fan-hujjatlar',
    children: [
      { label: 'Muallif haqida', link: '/fan-hujjatlar/muallif' },
      {
        label: 'Ota-ona haqida malumot',
        link: '/fan-hujjatlar/ota_ona_malumot',
      },
      {
        label: 'Xorij oilasidagi tarbiyaviy hayot',
        link: '/fan-hujjatlar/xorij_tarbiya',
      },
      {
        label: "Ota-ona mediaxavfsizlik bo'yicha 30 ta tavsiya",
        link: '/fan-hujjatlar/mediaxavfsizlik',
      },
      // {
      //   label: 'Ota-ona va maktab hamkorlik',
      //   link: '/fan-hujjatlar/hamkorlik',
      // },
      {
        label: 'Psixolog va pedagogik maslahatlar',
        link: '/fan-hujjatlar/maslahatlar',
      },
    ],
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
    children: [
      { label: '1-mavzu', link: '/fotogalereya/bir' },
      { label: '2-mavzu', link: '/fotogalereya/ikki' },
      { label: '3-mavzu', link: '/fotogalereya/uch' },
      { label: '4-mavzu', link: '/fotogalereya/tort' },
      { label: '5-mavzu', link: '/fotogalereya/besh' },
    ],
  },
  {
    label: 'Innavatsion oila',
    icon: 'Atom',
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
      { label: 'Telegram', link: '/onlayn-kuzatuvlar/telegram' },
      { label: 'YouTobe', link: '/onlayn-kuzatuvlar/youTobe' },
      { label: 'Instagram', link: '/onlayn-kuzatuvlar/instagram' },
    ],
  },
  {
    label: 'Testlar',
    icon: 'NotebookText',
    link: '/testlar',
  },
  // {
  //   label: 'Tahlil uchun savollar',
  //   icon: 'PencilRuler',
  //   link: '/metodik-yordam',
  // },
];
