export interface LectureFile {
  id: number;
  title: string;
  src: string;
  count?: number;
}

export interface LectureSection {
  label: string;
  type: 'single' | 'table';
  basePath: string;
  data: LectureFile[];
}

export const lectureSections: LectureSection[] = [
  {
    label: 'Muallif',
    type: 'single',
    basePath: '/fan-hujjatlar/muallif',
    data: [
      {
        id: 1,
        title: 'Muallif',
        src: '/resource/fan-hujjatlari/muallif.pdf',
      },
    ],
  },
  {
    label: 'Malumot',
    type: 'single',
    basePath: '/fan-hujjatlar/malumot',
    data: [
      {
        id: 1,
        title: 'Muallif',
        src: '/resource/fan-hujjatlari/malumot.pdf',
      },
    ],
  },
  {
    label: 'Xorij oilasidagi tarbiyavaiy hayot',
    type: 'single',
    basePath: '/fan-hujjatlar/fan-sillabusi',
    data: [
      {
        id: 1,
        title: 'Xorij oilasidagi tarbiyasi',
        src: '/resource/fan-hujjatlari/fan-sillabusi.PDF',
      },
    ],
  },
  {
    // sinergiya page kirgandagi file
    label: 'Sinergiya',
    type: 'single',
    basePath: '/fan-hujjatlar/glossary',
    data: [
      {
        id: 1,
        title: 'Sinergiya',
        src: '/resource/fan-hujjatlari/Ota.pdf',
      },
    ],
  },
  {
    label: 'Mediaxavfsizlik',
    type: 'single',
    basePath: '/fan-hujjatlar/mediaxavfsizlik',
    data: [
      {
        id: 1,
        title: 'Sinergiya',
        src: '/resource/fan-hujjatlari/6.pdf',
      },
    ],
  },
  {
    label: 'Mediaxavfsizlik',
    type: 'single',
    basePath: '/fan-hujjatlar/mediaxavfsizlik',
    data: [
      {
        id: 1,
        title: 'Sinergiya',
        src: '/resource/fan-hujjatlari/6.pdf',
      },
    ],
  },
  {
    label: '1-mavzu',
    type: 'single',
    basePath: '/fotogalereya/bir',
    data: [
      {
        id: 1,
        title: '1-mavzu',
        src: '/resource/fan-hujjatlari/1_blok.pdf',
      },
    ],
  },
  {
    label: '2-mavzu',
    type: 'single',
    basePath: '/fotogalereya/ikki',
    data: [
      {
        id: 1,
        title: '2-mavzu',
        src: '/resource/fan-hujjatlari/2_blok.pdf',
      },
    ],
  },
  {
    label: '3-mavzu',
    type: 'single',
    basePath: '/fotogalereya/uch',
    data: [
      {
        id: 1,
        title: '3-mavzu',
        src: '/resource/fan-hujjatlari/3_blok.pdf',
      },
    ],
  },
  {
    label: '4-mavzu',
    type: 'single',
    basePath: '/fotogalereya/tort',
    data: [
      {
        id: 1,
        title: '4-mavzu',
        src: '/resource/fan-hujjatlari/4_blok.pdf',
      },
    ],
  },
  {
    label: '5-mavzu',
    type: 'single',
    basePath: '/fotogalereya/besh',
    data: [
      {
        id: 1,
        title: '4-mavzu',
        src: '/resource/fan-hujjatlari/5_blok.pdf',
      },
    ],
  },
  {
    label: "Ma'ruza mashg'ulotlari",
    type: 'table',
    basePath: '/fan-malumotlari/maruza',
    data: Array.from({ length: 11 }, (_, i) => ({
      id: i + 1,
      title: `${i + 1}-MA’RUZA MASHG‘ULOTI`,
      src: `/resource/fan-malumotlari/maruza/${i + 1}- MA’RUZA MASHG‘ULOTI.pdf`,
      count: 2,
    })),
  },
  {
    label: 'Amaliy mashg‘ulotlar',
    type: 'table',
    basePath: '/fan-malumotlari/amaliy',
    data: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      title: `${i + 1}-AMALIY MASHG‘ULOTI`,
      src: `/resource/fan-malumotlari/amaliy/${i + 1}- AMALIY MASHG‘ULOTI.pdf`,
      count: 2,
    })),
  },
  {
    label: 'Laboratoriya ishlari',
    type: 'table',
    basePath: '/fan-malumotlari/labaratorya',
    data: Array.from({ length: 3 }, (_, i) => ({
      id: i + 1,
      title: `${i + 1}-Laboratoriya ishi`,
      src: `/resource/fan-malumotlari/labaratorya/${i + 1}-Laboratoriya ishi.pdf`,
      count: 2,
    })),
  },
  {
    label: 'Mustaqil ish',
    type: 'single',
    basePath: '/fan-malumotlari/mustaqil',
    data: [
      {
        id: 1,
        title: "Mustaqil ta'lim mavzulari",
        src: "/resource/fan-malumotlari/mustaqil/Mustaqil ta'lim mavzulari.pdf",
      },
    ],
  },
  {
    label: 'Adabiyotlar',
    type: 'table',
    basePath: '/darslik-adabiyot',
    data: [
      'Ahmadjon_Boydedayev_Tabiat_kuchlari_va_olam_evolutsiyasi_1996.pdf',
      'Amaliy_va_umumiy_astrofizika_R_Ziyaxanov,_S_Nuritdinov_2017.pdf',
      'Astrofizika. 1-qism (I.Sattorov) - 2009.pdf',
      'Astrofizika. 2-qism (I.Sattorov) - 2007.pdf',
      'Astronomiya (M.Mamadazimov) - Kollej.pdf',
      'Astronomiya. 11-sinf (2018, M.Mamadazimov).pdf',
      "Mamadmuso_Mamadazimov_Astronomiyadan_o'qish_kitobi_1992.pdf",
      "Mirzo Ulug'bek. Ilmi nujum - 1994.pdf",
      'Quyosh fizikasi (M.Zakirov, Yu.Muslimova) - 2003.pdf',
      "Salohitdin Nuritdinov. Somon yo'li - 1989.pdf",
      'Umumiy_astronomiya_Mamadmusa_Mamadazimov_2008_3_—_копия.pdf',
      'Ya.Perelman. Qiziqarli astronomiya - 2009.pdf',
    ].map((filename, index) => ({
      id: index + 1,
      title: filename.replace('.pdf', '').replace(/_/g, ' '),
      src: `/resource/darsliklar-adabiyotlar/adabiyotlar/${filename}`,
      count: 2,
    })),
  },
  {
    label: 'Metodik yordam',
    type: 'single',
    basePath: '/metodik-yordam',
    data: [
      {
        id: 1,
        title: 'Tahlil uchun savollar',
        src: '/resource/metodik-yordam/savollar.pdf',
      },
    ],
  },
];
