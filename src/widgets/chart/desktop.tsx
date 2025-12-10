'use client';

import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const chartData = [
  { year: '2021', oilalar: 45200, chaqaloqlar: 78000 },
  { year: '2022', oilalar: 46850, chaqaloqlar: 80230 },
  { year: '2023', oilalar: 47900, chaqaloqlar: 81550 },
  { year: '2024', oilalar: 49210, chaqaloqlar: 83400 },
  { year: '2025', oilalar: 50500, chaqaloqlar: 85020 },
];

export default function DesktopChart() {
  return (
    <div style={{ height: 340 }} className="w-full">
      <ResponsiveBar
        data={chartData}
        keys={['oilalar', 'chaqaloqlar']}
        indexBy="year"
        margin={{ top: 40, right: 60, bottom: 60, left: 72 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[]}
        borderRadius={6}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 8,
          tickRotation: 0,
          legend: 'Yil',
          legendPosition: 'middle',
          legendOffset: 40,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 8,
          tickRotation: 0,
          legend: 'Soni',
          legendPosition: 'middle',
          legendOffset: -50,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        role="application"
        ariaLabel="5-year statistics chart"
        animate={true}
        motionConfig="gentle"
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 50,
            translateY: 0,
            itemsSpacing: 4,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            symbolSize: 12,
            symbolShape: 'circle',
          },
        ]}
      />
    </div>
  );
}
