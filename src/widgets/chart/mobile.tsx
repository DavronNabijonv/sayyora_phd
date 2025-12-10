'use client';

import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const mobileChartData = [
  {
    id: 'Oilalar 2021-2023',
    value: 139950,
  },
  {
    id: 'Chaqaloqlar 2021-2023',
    value: 239780,
  },
  {
    id: 'Oilalar 2024-2025',
    value: 99710,
  },
  {
    id: 'Chaqaloqlar 2024-2025',
    value: 168420,
  },
];

export default function MobileChart() {
  return (
    <div style={{ height: 340 }} className="w-full">
      <ResponsivePie
        data={mobileChartData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={4}
        colors={{ scheme: 'nivo' }}
        borderWidth={2}
        borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 50,
            itemsSpacing: 6,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#0f5160',
            itemDirection: 'left-to-right',
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#2f6776',
                },
              },
            ],
          },
        ]}
        role="application"
        animate={true}
        motionConfig="gentle"
      />
    </div>
  );
}
