import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto';
import { useMediaQuery } from 'react-responsive';
import s from './ChartReport.module.scss';
import { optionsDesc, optionsMob } from './ChartOptions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getExpensesData,
  getIncomesData,
} from '../../../redux/periodData/periodDataSelectors';

const ChartReport = () => {
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({ minWidth: 320.1 });
  const isMobile = useMediaQuery({ maxWidth: 320 });
  const incomesData = useSelector(getIncomesData);
  const expensesData = useSelector(getExpensesData);
  const page = 'expenses';
  const [userData, setUserData] = useState([]);

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
    if (incomesData.length === 0 && expensesData.length === 0) return;
    setTimeout(() => {
      if (Object.entries(incomesData) && page === 'incomes') {
        setUserData(Object.entries(Object.values(incomesData)[0]).splice(1));
      } else {
        setUserData([]);
      }
      if (Object.entries(expensesData) && page === 'expenses') {
        setUserData(Object.entries(Object.values(expensesData)[0]).splice(1));
      } else {
        setUserData([]);
      }
    }, 0);
  }, [incomesData, expensesData, dispatch]);
  if (Object.entries(incomesData) || Object.entries(expensesData)) {
    return (
      <div className={s.chart}>
        {isDesktop && <Bar data={userDataDesc} options={optionsDesc} />}
        {isMobile && <Bar data={userDataMob} options={optionsMob} />}
      </div>
    );
  }
};

export default ChartReport;
