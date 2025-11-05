export interface VideoLesson {
  id: number;
  title: string;
  youtubeUrl: string;
}

export const videoLessons: VideoLesson[] = [
  {
    id: 1,
    title: '1-dars: Astronomiyaga kirish',
    youtubeUrl: 'https://www.youtube.com/embed/U9WOMerccoM',
  },
  {
    id: 2,
    title: '2-dars: Quyosh tizimi tuzilishi',
    youtubeUrl: 'https://www.youtube.com/embed/libKVRa01L8',
  },
  {
    id: 3,
    title: '3-dars: Yulduzlar hayot aylanishi',
    youtubeUrl: 'https://www.youtube.com/embed/PM9CQDlQI0A',
  },
  {
    id: 4,
    title: '4-dars: Quyosh tizimidagi sayyoralar',
    youtubeUrl: 'https://www.youtube.com/embed/zkCKx3fpk4Q',
  },
];

export const familyVideos: VideoLesson[] = [
  {
    id: 1,
    title: 'Er-Hotinlik huquqlari haqida',
    youtubeUrl:
      'https://www.youtube.com/watch?v=-4nlKTHmIC0&list=PLGH2-q82ul3UMO_uNMLLWNhy4seIKnjhK',
  },
  {
    id: 2,
    title: 'Ayol odobi',
    youtubeUrl: 'https://www.youtube.com/shorts/IM9znaiv664',
  },
  {
    id: 3,
    title: 'Baxtli oila siri',
    youtubeUrl: 'https://www.youtube.com/watch?v=z1E2QoZV1jM',
  },
  {
    id: 4,
    title: 'Oilaviy munosabatlar',
    youtubeUrl: 'https://www.youtube.com/watch?v=e9bp7b9Tjkw',
  },
  {
    id: 5,
    title: 'Er majburiyatlari',
    youtubeUrl: 'https://www.youtube.com/watch?v=B7gYXQpTSEc',
  },
  {
    id: 6,
    title: 'Qanday kishi bilan oila qurish kerak?',
    youtubeUrl: 'https://www.youtube.com/watch?v=AA4Hy4oPwvo',
  },
  {
    id: 7,
    title: 'Ayolga e`tibor berish',
    youtubeUrl: 'https://www.youtube.com/shorts/W-85UZ9evtA',
  },
  {
    id: 8,
    title: 'Oila qurishga tayyorgarlik',
    youtubeUrl: 'https://www.youtube.com/watch?v=0fDYnvgSo9g',
  },
];
