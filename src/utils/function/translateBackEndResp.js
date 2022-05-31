export const makeUkrMonthNames = rusMonth => {
  let ukrMonth = '';
  switch (rusMonth) {
    case 'Январь':
      ukrMonth = 'січень';
      break;
    case 'Февраль':
      return 'лютий';
    case 'Март':
      return 'березень';
    case 'Апрель':
      return 'ківтень';
    case 'Май':
      return 'травень';
    case 'Июнь':
      return 'червень';
    case 'Июль':
      return 'липень';
    case 'Август':
      return 'серпень';
    case 'Сентябрь':
      return 'вересень';
    case 'Октябрь':
      return 'жовтень';
    case 'Ноябрь':
      return 'листопад';
    case 'Декабрь':
      return 'грудень';

    default:
      break;
  }
  return ukrMonth ? ukrMonth : rusMonth;
};

export const makeUkrCatsNames = rusCat => {
  let ukrCat = '';
  switch (rusCat) {
    case 'Продукты':
      ukrCat = 'Продукти';
      break;
    case 'Развлечения':
      ukrCat = 'Розваги';
      break;
    case 'Здоровье':
      ukrCat = "Здоров'я";
      break;
    case 'Всё для дома':
      ukrCat = 'Все для дому';
      break;
    case 'Техника':
      ukrCat = 'Техніка';
      break;
    case 'Коммуналка и связь':
      ukrCat = 'Комуналка';
      break;
    case 'Спорт и хобби':
      ukrCat = 'Спорт і хобі';
      break;
    case 'Образование':
      ukrCat = 'Освіта';
      break;
    case 'Прочее':
      ukrCat = 'Інше';
      break;
    case 'Доп. доход':
      ukrCat = 'Дод. дохід';
      break;
    case 'PACХОДЫ':
      ukrCat = 'ВИТРАТИ';
      break;
    case 'ДОХОДЫ':
      ukrCat = 'ДОХОДИ';
      break;

    default:
      break;
  }
  return ukrCat ? ukrCat : rusCat;
};
