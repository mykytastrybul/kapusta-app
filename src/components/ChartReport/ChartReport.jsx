import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto';
import { useMediaQuery } from 'react-responsive';
import s from './ChartReport.module.scss';
import { optionsDesc, optionsMob } from './ChartOptions';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getPeriodData } from '../../redux/periodData/periodDataSelectors';

const data = [
  ['category 1', ['1']],
  ['category 2', ['4']],
  ['category 3', ['2']],
  ['category 4', ['4']],
  ['category 5', ['5']],
  ['category 6', ['3']],
  ['category 7', ['2']],
  ['category 8', ['8']],
];

const ChartReport = () => {
  const isDesktop = useMediaQuery({ minWidth: 320.1 });
  const isMobile = useMediaQuery({ maxWidth: 320 });
  const periodData = useSelector(getPeriodData);
  const page = 'incomes';
  const [userData, setUserData] = useState(data);

  const userDataDesc = {
    labels: userData.map(data => data[0]),
    datasets: [
      {
        label: 'Users transactions',
        data: userData.map(data => data[1]),
        maxBarThickness: 38,
        borderRadius: 20,
        minBarLength: 2,
        backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
        borderColor: ['rgba(0, 0, 0, 0)'],
        borderWidth: 1,
      },
    ],
  };

  const userDataMob = {
    labels: userData.map(data => data[0]),
    datasets: [
      {
        label: 'Users transactions',
        data: userData.map(data => data[1]),
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

  useEffect(() => {
    page === 'incomes' &&
      periodData.length > 0 &&
      setUserData(Object.entries(periodData.incomes));
    page === 'expenses' &&
      periodData.length > 0 &&
      setUserData(Object.entries(periodData.expenses));
  }, [periodData]);

  return (
    <div className={s.chart}>
      {isDesktop && <Bar data={userDataDesc} options={optionsDesc} />}
      {isMobile && <Bar data={userDataMob} options={optionsMob} />}
    </div>
  );
};

export default ChartReport;
