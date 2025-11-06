'use client';
import React from 'react';
import { VideoLesson } from '../lib/data';

type Props = {
  lessons: VideoLesson[];
};

export function toEmbedUrl(url: string): string {
  let videoId = '';

  // watch?v=...
  if (url.includes('watch?v=')) {
    const params = new URL(url).searchParams;
    videoId = params.get('v') || '';
  }
  // youtu.be/...
  else if (url.includes('youtu.be/')) {
    const pathname = new URL(url).pathname; // /videoId
    videoId = pathname.split('/')[1] || '';
  }
  // shorts/...
  else if (url.includes('youtube.com/shorts/')) {
    const pathname = new URL(url).pathname; // /shorts/videoId
    videoId = pathname.split('/')[2] || '';
  }

  return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
}

const VideoLessonGrid: React.FC<Props> = ({ lessons }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]  gap-4">
      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          className="border rounded-lg shadow hover:shadow-md transition duration-200"
        >
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded-t-xl"
              src={toEmbedUrl(lesson.youtubeUrl)}
              title={lesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div
            data-access-size
            className="p-4 text-base font-medium text-gray-800"
          >
            {lesson.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoLessonGrid;
