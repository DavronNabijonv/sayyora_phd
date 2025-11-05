import { onlineView } from '@/widgets/sky-map-site/lib/data';
import Network from '@/widgets/sky-map-site/ui/network';
import SkyMapSiteCard from '@/widgets/sky-map-site/ui/SkyMapSiteCard';
import React from 'react';

const page = () => {
  return (
    <div className="mx-auto p-2 space-y-2">
      <h1 className="text-md font-medium mb-2">Onlayin kuzatuvlar</h1>
      <div className="grid grid-cols-1 gap-2 mb-20">
        {onlineView.map((site) => (
          <SkyMapSiteCard key={site.id} site={site} />
        ))}
      </div>
      <Network />
    </div>
  );
};

export default page;
