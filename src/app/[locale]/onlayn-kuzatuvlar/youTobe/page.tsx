import { familyVideos } from '@/widgets/video-lesson/lib/data';
import VideoLessonGrid from '@/widgets/video-lesson/ui';
import React from 'react';

export default function page() {
  return (
    <div>
      <VideoLessonGrid lessons={familyVideos} />
    </div>
  );
}
