'use client'; // ❗ Client Component
import React from 'react';

interface VideoPlayerProps {
  url: string;
  title?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title }) => {
  function toEmbedUrl(url: string): string {
    let videoId = '';

    if (url.includes('watch?v=')) {
      const params = new URL(url).searchParams;
      videoId = params.get('v') || '';
    } else if (url.includes('youtu.be/')) {
      const pathname = new URL(url).pathname;
      videoId = pathname.split('/')[1] || '';
    } else if (url.includes('youtube.com/shorts/')) {
      const pathname = new URL(url).pathname;
      videoId = pathname.split('/')[2] || '';
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  }

  return (
    <div className="w-full aspect-video">
      <iframe
        className="w-full h-full rounded-xl shadow-lg"
        src={toEmbedUrl(url)}
        title={title || 'YouTube video'}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
