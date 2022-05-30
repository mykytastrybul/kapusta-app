import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto';
import { useMediaQuery } from 'react-responsive';
import s from './ChartReport.module.scss';
import { optionsDesc, optionsMob } from './ChartOptions';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getExpensesData,
  getIncomesData,
} from '../../../redux/reports/reportsSelectors';
import { useLocation } from 'react-router-dom';

const ChartReport = () => {
  const location = useLocation();
  const isDesktop = useMediaQuery({ minWidth: 320.1 });
  const isMobile = useMediaQuery({ maxWidth: 320 });
  const incomesData = useSelector(getIncomesData);
  const expensesData = useSelector(getExpensesData);
  const [type, setType] = useState('');
  const [userData, setUserData] = useState([]);
  const [category, setCategory] = useState('');

  const userDataDesc = {
    labels: userData.map(data => data[0]),
    datasets: [
      {
        label: 'Размер транзакции',
        data: userData.map(data => data[1]),
        maxBarThickness: 38,
        borderRadius: 10,
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
        label: 'Размер транзакции',
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
    if (location.search.length > 0) {
      location.search.split('&')[0] &&
        setType(location.search.split('&')[0].slice(6));
      if (location.search.split('&')[1]) {
        let newCategory = '';
        switch (location.search.split('&')[1].slice(9)) {
          case 'products':
            newCategory = 'Продукты';
            break;
          case 'alcohol':
            newCategory = 'Алкоголь';
            break;
          case 'fun':
            newCategory = 'Развлечения';
            break;
          case 'health':
            newCategory = 'Здоровье';
            break;
          case 'transport':
            newCategory = 'Транспорт';
            break;
          case 'home-depot':
            newCategory = 'Всё для дома';
            break;
          case 'equipment':
            newCategory = 'Техника';
            break;
          case 'utilities':
            newCategory = 'Коммуналка и связь';
            break;
          case 'hobby':
            newCategory = 'Спорт и хобби';
            break;
          case 'education':
            newCategory = 'Образование';
            break;
          case 'stuff':
            newCategory = 'Прочее';
            break;
          case 'salary':
            newCategory = 'З/П';
            break;
          case 'extra-income':
            newCategory = 'Доп. доход';
            break;
          default:
            newCategory = '';
        }
        setCategory(newCategory);
      } else {
        setCategory('');
      }
    }
  }, [location]);

  useEffect(() => {
    setTimeout(() => {
      if (
        Object.entries(incomesData).length > 0 &&
        type === 'incomes' &&
        Object.keys(incomesData).indexOf(category) !== -1
      ) {
        setUserData(
          Object.entries(
            Object.values(incomesData)[
              Object.keys(incomesData).indexOf(category)
            ]
          )
            .splice(1)
            .sort((a, b) => b[1] - a[1])
        );
      } else if (
        Object.entries(expensesData).length > 0 &&
        type === 'expenses' &&
        Object.keys(expensesData).indexOf(category) !== -1
      ) {
        setUserData(
          Object.entries(
            Object.values(expensesData)[
              Object.keys(expensesData).indexOf(category)
            ]
          )
            .splice(1)
            .sort((a, b) => b[1] - a[1])
        );
      } else setUserData([]);
    }, 0);
    //eslint-disable-next-line
  }, [type, category]);

  return (
    <div className={s.chart}>
      {isDesktop && <Bar data={userDataDesc} options={optionsDesc} />}
      {isMobile && <Bar data={userDataMob} options={optionsMob} />}
    </div>
  );
};

export default ChartReport;
