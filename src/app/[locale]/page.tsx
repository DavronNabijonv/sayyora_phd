'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Marquee slider
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

// Dynamic imports for responsive charts
const DesktopChart = dynamic(() => import('@/widgets/chart/desktop'), {
  ssr: false,
});
const MobileChart = dynamic(() => import('@/widgets/chart/mobile'), {
  ssr: false,
});

// Simple stat data and StatCard
const STAT_DATA = [
  { id: 1, label: 'Foydalanuvchilar', value: 1150, color: '#60a5fa' },
  { id: 2, label: 'Darslar', value: 348, color: '#34d399' },
  { id: 3, label: 'Testlar', value: 275, color: '#f472b6' },
  { id: 4, label: 'Resurslar', value: 105, color: '#fbbf24' },
];

interface StatCardProps {
  label: string;
  value: number;
  color: string;
}

function StatCard({ label, value, color }: StatCardProps) {
  return (
    <div className="p-4 rounded-xl bg-white shadow flex flex-col">
      <div className="flex items-center justify-between">
        <span className="text-sm text-[#0f5160]">{label}</span>
        <span style={{ background: color }} className="w-3 h-3 rounded-full" />
      </div>
      <div className="mt-3 text-2xl font-bold text-[#123d4f]">{value}</div>
    </div>
  );
}

export default function LocaleHomePage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: '', phone: '', message: '' });
      } else {
        console.error('Send failed', await res.text());
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fbfeff] to-[#f3fbff] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Showcase with background and synced Swiper slides (left image, right text) */}
        <section
          className="relative rounded-2xl overflow-hidden mb-12"
          style={{
            backgroundImage: `url('/oila2.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 py-12 px-6">
            <div className="max-w-7xl mx-auto">
              <Swiper
                modules={[Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop
                className="rounded-lg"
              >
                {[
                  {
                    img: '/oila.jpg',
                    title: "Sayyora — Oila va Ta'lim",
                    subtitle: 'Ilmiy ilovalar va resurslar',
                    text: "Ta'limni yanada qiziqarli va tinch qiluvchi onlayn ilovalar va resurslar.",
                  },
                  {
                    img: '/oila1.jpg',
                    title: 'Oila Maktabiga Xush kelibsiz',
                    subtitle: '',
                    text: 'Oila — inson tarbiyasining birlamchi maskani. Milliy qadriyatlar, zamonaviy tarbiya yondashuvlari va o‘zbek oilasining zamonaviy modeli haqida chuqur bilim va amaliy ko‘nikmalar beruvchi ta`lim platformasi..',
                  },
                  {
                    img: '/oila2.jpg',
                    title: 'Audio darslar',
                    subtitle: 'Qisqa va diqqatni oshiruvchi',
                    text: 'Qisqa, sokin audiolar bilan organish samaradorligini oshiring.',
                  },
                ].map((s, i) => (
                  <SwiperSlide key={i}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center py-8">
                      {/* Right text */}
                      <div className="text-white lg:pl-12">
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <h3 className="text-xl font-semibold opacity-90">
                            {s.subtitle}
                          </h3>
                          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                            {s.title}
                          </h2>
                          <p className="mt-4 max-w-lg leading-relaxed">
                            {s.text}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        {/* 5-Year Uzbekistan Statistics (Nivo) */}
        <section className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-white/50 mb-12">
          <h2 className="text-2xl font-semibold text-[#0f5160] mb-4">
            5 Yillik Statistikalar — O‘zbekiston
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ height: 340 }} className="w-full">
              {/* Desktop chart (hidden on mobile) */}
              <div className="hidden lg:block">
                <DesktopChart />
              </div>

              {/* Mobile chart (shown on mobile, hidden on desktop) */}
              <div className="lg:hidden">
                <MobileChart />
              </div>
            </div>
          </motion.div>
        </section>

        {/* National + Modern Uzbek Family Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Milliy va Zamonaviy O‘zbek Oilasi
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            O‘zbek oilasi qadimdan mustahkam qadriyatlarga ega: hurmat,
            mehr-oqibat, kattalarga ehtirom, bolalarga mehribonlik,
            mehnatsevarlik va odob-axloq mezonlari. Ajdodlarimizdan meros
            bo‘lgan bu an`analar bugungi globallashuv davrida ham o‘z
            ahamiyatini yo‘qotmagan.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Zamonaviy o‘zbek oilasi esa milliy qadriyatlar bilan bir qatorda
            innovatsion fikrlash, psixologik savodxonlik, sog‘lom muloqot,
            mediaxavfsizlik va farzandlar tarbiyasida zamonaviy yondashuvlarni
            o‘zida mujassam etadi. Bu uyg‘unlik farzandlarning ma`naviy,
            intellektual va psixologik barkamol bo‘lib ulg‘ayishida muhim o‘rin
            tutadi.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Ushbu platforma sizga aynan shu yo‘nalishlarda: ma`naviyat, tarbiya,
            psixologiya, ota-ona madaniyati, bolalar bilan ishlash, oilaviy
            muloqot va media savodxonlik bo‘yicha amaliy va nazariy
            materiallarni taqdim etadi.
          </p>
        </section>

        {/* Statistics section: chart left, cards right */}
        <section className="mt-10 bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-white/50 mb-12">
          <h2 className="text-2xl font-semibold text-[#0f5160] mb-4">
            Statistika
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div>
              <div className="w-full h-48">
                <svg viewBox="0 0 400 160" className="w-full h-full">
                  {(() => {
                    const max = Math.max(...STAT_DATA.map((s) => s.value));
                    return STAT_DATA.map((s, i) => {
                      const barWidth = 60;
                      const gap = 20;
                      const x = 20 + i * (barWidth + gap);
                      const height = (s.value / max) * 100;
                      const y = 120 - height;
                      return (
                        <g key={s.id}>
                          <rect
                            x={x}
                            y={y}
                            width={barWidth}
                            height={height}
                            rx={8}
                            fill={s.color}
                          />
                          <text
                            x={x + barWidth / 2}
                            y={140}
                            fontSize={12}
                            fill="#0f5160"
                            textAnchor="middle"
                          >
                            {s.label}
                          </text>
                          <text
                            x={x + barWidth / 2}
                            y={y - 6}
                            fontSize={12}
                            fill="#0f5160"
                            textAnchor="middle"
                          >
                            {s.value}
                          </text>
                        </g>
                      );
                    });
                  })()}
                </svg>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {STAT_DATA.map((s) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <StatCard label={s.label} value={s.value} color={s.color} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Slider Section */}
        <section className="mt-20 mb-12">
          <h2 className="text-2xl font-semibold text-[#0f5160] mb-8 text-center">
            Oilaviy Qadriyatlar
          </h2>
          <div className="min-h-[200px] h-full overflow-hidden">
            <Marquee autoFill={false} loop={0} speed={30} pauseOnHover>
              {[
                {
                  text: 'Oilani mustahkamlash va oilaviy munosabatlarni hurmat, ishonch va muhabbat asosida qurish.',
                  img: '/oila.jpg',
                },
                {
                  text: 'Erkak va ayolning, hamda fuqarolarning oilaviy munosabatlarda teng huquqliligi.',
                  img: '/oila1.jpg',
                },
                {
                  text: 'Farzandlar va voyaga yetmaganlar huquqini himoya qilish — oilaning ustuvor vazifasi.',
                  img: '/oila2.jpg',
                },
                {
                  text: 'Oilaviy qonunchilik — shaxsiy va mulkiy huquqlar, nikoh, nasl-nasab, aliment, vasiylik kabi munosabatlarni tartibga soluvchi asosiy norma',
                  img: '/oila3.jpg',
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center gap-2 h-full "
                >
                  <motion.div
                    key={i}
                    className="flex-shrink-0 mx-4"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <div className="bg-white rounded-lg shadow-md p-6 w-80 flex flex-col justify-between border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="flex-1 flex items-center">
                        <p className="text-[#0f5160] font-medium text-sm leading-relaxed">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    key={i}
                    className="flex-shrink-0 mx-4"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <div className="rounded-lg w-80 flex flex-col justify-between">
                      <div className="mt-4 relative rounded-lg overflow-hidden h-32 w-full">
                        <Image
                          src={card.img}
                          alt="family"
                          fill
                          className="object-cover object-center"
                          draggable="false"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-20 bg-gradient-to-br from-[#f8ffff] to-[#eef9fb] rounded-3xl p-6 shadow-sm border border-white/50 mb-12">
          <h2 className="text-2xl font-semibold text-[#0f5160] mb-4">
            Bog‘lanish
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-[#2f6776]">
                Telegram va Email orqali murojaat qiling:
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://t.me/your_telegram"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0f5160] underline"
                >
                  Telegram: @your_telegram
                </a>
                <a
                  href="mailto:info@example.com"
                  className="text-[#0f5160] underline"
                >
                  Email: info@example.com
                </a>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-sm text-[#2f6776]">Ism</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full mt-1 p-2 rounded-lg border"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#2f6776]">
                    Telefon
                  </label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full mt-1 p-2 rounded-lg border"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#2f6776]">Xabar</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full mt-1 p-2 rounded-lg border h-24"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={sending}
                    className="px-4 py-2 bg-[#0f5160] text-white rounded-lg"
                  >
                    {sending ? 'Yuborilmoqda...' : 'Yuborish'}
                  </button>
                  {sent && (
                    <span className="text-sm text-green-600">
                      Xabar yuborildi
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
