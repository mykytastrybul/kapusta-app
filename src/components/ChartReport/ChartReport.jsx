import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto';
import { useMediaQuery } from 'react-responsive';
import s from './ChartReport.module.scss';
import { optionsDesc, optionsMob } from './ChartOptions';

const data = [
  {
    category: 'category 1',
    cost: '1',
  },
  {
    category: 'category 2',
    cost: '4',
  },
  {
    category: 'category 3',
    cost: '2',
  },
  {
    category: 'category 4',
    cost: '4',
  },
  {
    category: 'category 5',
    cost: '5',
  },
  {
    category: 'category 6',
    cost: '3',
  },
  {
    category: 'category 7',
    cost: '2',
  },
  {
    category: 'category 8',
    cost: '8',
  },
];

const ChartReport = () => {
  const isDesktop = useMediaQuery({ minWidth: 320.1 });
  const isMobile = useMediaQuery({ maxWidth: 320 });

  const userDataDesc = {
    labels: data.map(data => data.category),
    datasets: [
      {
        label: 'Users transactions',
        data: data.map(data => data.cost),
        maxBarThickness: 38,
        borderRadius: 20,
        minBarLength: 2,
        backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
        borderColor: ['rgba(0, 0, 0, 0)'],
        borderWidth: 1,
        // indexAxis: 'y',
      },
    ],
  };

  const userDataMob = {
    labels: data.map(data => data.category),
    datasets: [
      {
        label: 'Users transactions',
        data: data.map(data => data.cost),
        maxBarThickness: 15,
        borderRadius: 20,
        minBarLength: 100,
        backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
        borderColor: ['rgba(0, 0, 0, 0)'],
        borderWidth: 1,
        indexAxis: 'y',
      },
    ],
  };

  return (
    <div className={s.chart}>
      {isDesktop && <Bar data={userDataDesc} options={optionsDesc} />}
      {isMobile && <Bar data={userDataMob} options={optionsMob} />}
    </div>
  );
};

export default ChartReport;
