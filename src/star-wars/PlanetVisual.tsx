import { PieChart } from 'react-minimal-pie-chart';

type Climate = keyof typeof climateColorMap;

const climateColorMap = {
  'artificial temperate': '#805AD5', // purple-500
  unknown: '#EDF2F7', // grey-100
  artic: '#bee3f8', // blue-100
  subartic: '#90cdf4', // blue-200
  windy: '#9DECF9', // cyan-200
  frozen: '#bee3f8', // blue-100
  frigid: '#90cdf4', // blue-200
  arid: '#F6E05E', // yellow-600
  hot: '#E53E3E', // red-500
  superheated: '#C53030', // red-600
  humid: '#ED8936', // orange-400
  moist: '#00B5D8', // cyan-500
  murky: '#B7791F', // yellow-600
  polluted: '#975A16', // yellow-700
  rocky: '#A0AEC0', // gray-400
  temperate: '#68D391', // green-300
  tropical: '#38A169', // green-500
};

export default function PlanetVisual({ climate }: { climate: string }) {
  const climates = climate.split(', ');
  const data = climates.map((c) => ({
    title: c,
    value: 1,
    color: climateColorMap[c.trim() as Climate],
  }));
  return (
    <div className="planet-visual">
      <PieChart data={data} lineWidth={5} />
    </div>
  );
}
