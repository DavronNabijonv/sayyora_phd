'use client';
import { lectureSections } from '@/widgets/file-list/lib/data';
import LectureTable from '@/widgets/file-list/ui';
import LectureDetail from '@/widgets/file-list/ui/FileDetail';

export default function Hikoya() {
  const basePath = '/fan-hujjatlar/hikoya';
  const section = lectureSections.find((s) => s.basePath === basePath);

  if (!section) return <div className="p-4">Malumot topilmadi</div>;

  if (section.type === 'table') {
    return <LectureTable data={section.data} basePath={section.basePath} />;
  }

  if (section.type === 'single') {
    return (
      <div>
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
