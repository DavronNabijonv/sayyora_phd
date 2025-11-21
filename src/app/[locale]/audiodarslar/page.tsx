'use client';

import { useState } from 'react';
import { Play, Pause } from 'lucide-react';

export default function AudioLessonsPage() {
  // === MANUALLY DECLARE YOUR AUDIO LESSONS ===
  const lessons = [
    {
      id: 1,
      title: '1-audio: Bola nega yig`laydi',
      file: '/audio/bola_nega_yiglaydi.mp3',
    },
    {
      id: 2,
      title: "2-audio: Bolani qanday o'ynatish kerak",
      file: '/audio/bolani_oynatish.mp3',
    },
    { id: 3, title: '3-audio: Ota - ona', file: '/audio/Ota_ona.mp3' },
    { id: 4, title: '4-audio: Aqshda tarbiya', file: '/audio/aqsh.mp3' },
    {
      id: 5,
      title: '5-audio: Alisher Navoiy tarbiya haqida',
      file: '/audio/alisher_navoiy.mp3',
    },
    {
      id: 6,
      title: '6-audio: Alla aytishni bilasizmi',
      file: '/audio/alla.mp3',
    },
    {
      id: 7,
      title: "7-audio: Beshik to'yi qanday o'tkaziladi?",
      file: '/audio/beshik_toy.mp3',
    },
    {
      id: 8,
      title: "8-audio: Bolajon kiyinishni o'rganadi",
      file: '/audio/bolajon_kiyim.mp3',
    },
    {
      id: 9,
      title: "9-audio: Bolani pokizalikga o'rgating",
      file: '/audio/pokizalik.mp3',
    },
    {
      id: 10,
      title: '10-audio: Bolaning bisoti',
      file: '/audio/bola_bisoti.mp3',
    },

    {
      id: 11,
      title: '11-audio: Bolaning kiyimlari',
      file: '/audio/bola_kiyimi.mp3',
    },

    {
      id: 12,
      title: "12-audio: Bo'lajak ota bilan suhbat",
      file: '/audio/ota_suhbat.mp3',
    },

    {
      id: 13,
      title: '13-audio: Yevropada tarbiya',
      file: '/audio/yevro_tarbiya.mp3',
    },

    {
      id: 14,
      title: '14-audio: Injiqlikning oldini olish',
      file: '/audio/injiqlik.mp3',
    },

    {
      id: 15,
      title: '15-audio: Kamola va Amala',
      file: '/audio/kamola_amala.mp3',
    },

    {
      id: 16,
      title: "16-audio: Qarang bolangiz o'ynayabdi",
      file: '/audio/qarang.mp3',
    },

    {
      id: 17,
      title: '17-audio: Kichik guruhda tarbiya',
      file: '/audio/tarbiya.mp3',
    },

    {
      id: 18,
      title: '18-audio: Kichkintoy parvarishi',
      file: '/audio/parvarish.mp3',
    },

    {
      id: 19,
      title: '19-audio: Pedagogik durdonalar siz uchun',
      file: '/audio/pedagogik.mp3',
    },

    {
      id: 20,
      title: '20-audio: Tarbiyaning 2 - bosqichiga xush kelibsiz.',
      file: '/audio/2_bosqich.mp3',
    },
    {
      id: 21,
      title: '21-audio: erta savod chiqarish',
      file: '/audio/savod.mp3',
    },

    {
      id: 22,
      title: '22-audio: Yaxshi tarbiya - Kapital',
      file: '/audio/kapital.mp3',
    },
  ];

  const [currentAudio, setCurrentAudio] = useState<string | null>(null);

  const togglePlay = (file: string) => {
    if (currentAudio === file) {
      setCurrentAudio(null); // stop
    } else {
      setCurrentAudio(file); // play new file
    }
  };

  return (
    <div className="p-6 w-full mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary">🎧 Audio darslar</h1>

      <div className="space-y-4 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 ">
        {lessons.map((lesson) => {
          const isPlaying = currentAudio === lesson.file;

          return (
            <div
              key={lesson.id}
              className="flex items-center justify-between 
                         bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
            >
              <div>
                <h2 className="font-semibold text-lg">{lesson.title}</h2>
                <p className="text-sm text-gray-500">
                  {lesson.file.split('/').pop()}
                </p>
              </div>

              <button
                onClick={() => togglePlay(lesson.file)}
                className="p-3 rounded-full bg-primary text-white shadow"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>

              {/* audio element (hidden) */}
              {isPlaying && (
                <audio
                  src={lesson.file}
                  autoPlay
                  onEnded={() => setCurrentAudio(null)}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
