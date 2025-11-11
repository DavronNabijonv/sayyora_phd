/* eslint-disable react/no-unescaped-entities */

'use client';

import { lectureSections } from '@/widgets/file-list/lib/data';
import LectureTable from '@/widgets/file-list/ui';
import LectureDetail from '@/widgets/file-list/ui/FileDetail';
import { toEmbedUrl } from '@/widgets/video-lesson/ui';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const basePath = '/fan-hujjatlar/ota_ona_haqida';
  const section = lectureSections.find((s) => s.basePath === basePath);
  const [step, setStep] = useState<'initial' | 'book'>('initial');

  if (!section) return <div className="p-4">Malumot topilmadi</div>;

  if (step === 'book') return <Kitob back={() => setStep('initial')} />;

  if (section.type === 'table') {
    return <LectureTable data={section.data} basePath={section.basePath} />;
  }

  if (section.type === 'single') {
    return (
      <div>
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 border-b border-black/20 pb-6 mb-6">
          {/* Kitob + muallif */}
          <div className="flex flex-col items-start gap-5">
            <Image
              src="/kitob.jpg"
              alt="kitob image"
              width={200}
              height={300}
              className="rounded-lg shadow-md object-cover"
            />
            <div className="space-y-2">
              <p className="text-lg font-semibold">Muallif: Muhammad Quronov</p>
              <p className="text-md text-gray-700">Sahifalar soni: 320 bet </p>
              <p className="text-md text-gray-700">
                Kitob nomi:{' '}
                <span className="text-black/80 font-semibold text-xl">
                  &rdquo;Bolam baxtli bo'lsin desangiz&rdquo;
                </span>
              </p>

              {/* Kitob o'qish button */}
              <button
                onClick={() => setStep('book')}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                📖 Kitobni o‘qish
              </button>
            </div>
          </div>

          {/* YouTube video */}
          <section className="flex justify-center w-full max-w-xl">
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-xl"
                src={toEmbedUrl(
                  'https://www.youtube.com/watch?v=FCcoUFOS2mo&t=3s',
                )}
                title="Pedagogik yangilanish video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          {/* YouTube video */}
          <section className="flex justify-center w-full max-w-xl">
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-xl"
                src={toEmbedUrl('https://www.youtube.com/watch?v=_tS4rBN_NCE')}
                title="Pedagogik yangilanish video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </div>

        <LectureDetail
          data={section.data}
          basePath={section.basePath}
          type="single"
        />
      </div>
    );
  }

  return null;
}

function Kitob({ back }: { back: () => void }) {
  const basePath = '/fan-hujjatlar/kitob';
  const section = lectureSections.find((s) => s.basePath === basePath);

  if (!section) return <div className="p-4">Malumot topilmadi</div>;

  return (
    <div className="flex flex-col gap-6">
      {/* Ortga tugma */}
      <button
        onClick={back}
        className="self-start flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition"
      >
        ← Ortga
      </button>

      {section.type === 'single' && (
        <LectureDetail
          data={section.data}
          basePath={section.basePath}
          type="single"
        />
      )}
    </div>
  );
}
