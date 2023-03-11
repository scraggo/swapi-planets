import { PieChart } from 'react-minimal-pie-chart';
import './PlanetVisual.css';
/*
storiesOf('Donut Chart', module)
  .add("Custom arcs' width", () => <PieChart data={dataMock} lineWidth={15} />)
  .add('Rounded arcs', () => (
    <PieChart data={dataMock} lineWidth={15} rounded />
  ))
  .add('Padded arcs', () => (
    <PieChart data={dataMock} lineWidth={15} paddingAngle={5} />
  ));
*/

type Props = {
  climate: keyof typeof climateColorMap;
};

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
  tropical: '#48BB78;', // green-400
};

export default function PlanetVisual({ climate }: Props) {
  const climates = climate.split(', ');
  const data = climates.map((c) => ({
    title: c,
    value: 1,
    color: climateColorMap[c.trim() as Props['climate']],
  }));
  return (
    <div className="planet-visual">
      <PieChart data={data} lineWidth={5} />
    </div>
  );
}