'use client';
import { lectureSections } from '@/widgets/file-list/lib/data';
import LectureTable from '@/widgets/file-list/ui';
import LectureDetail from '@/widgets/file-list/ui/FileDetail';
import SayyoraEntrancePage from '@/widgets/muallif_haqida';

export default function Page() {
  const basePath = '/fan-hujjatlar/muallif';
  const section = lectureSections.find((s) => s.basePath === basePath);

  if (!section) return <div className="p-4">Malumot topilmadi</div>;

  if (section.type === 'table') {
    return <LectureTable data={section.data} basePath={section.basePath} />;
  }

  if (section.type === 'single') {
    return (
      <div>
        <SayyoraEntrancePage />
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
