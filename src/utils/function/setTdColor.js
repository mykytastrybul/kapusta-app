export const setTdColor = category => {
  let color = '';
  switch (category) {
    case 'Продукты':
      color = '#e53935';
      break;
    case 'Алкоголь':
      color = '#e53935';
      break;
    case 'Развлечения':
      color = '#e53935';
      break;
    case 'Здоровье':
      color = '#e53935';
      break;
    case 'Транспорт':
      color = '#e53935';
      break;
    case 'Всё для дома':
      color = '#e53935';
      break;
    case 'Техника':
      color = '#e53935';
      break;
    case 'Коммуналка и связь':
      color = '#e53935';
      break;
    case 'Спорт и хобби':
      color = '#e53935';
      break;
    case 'Образование':
      color = '#e53935';
      break;
    case 'Прочее':
      color = '#e53935';
      break;
    case 'З/П':
      color = '#407946';
      break;
    case 'Доп. доход':
      color = '#407946';
      break;
    default:
      break;
  }
  return color;
};
