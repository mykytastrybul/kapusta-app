export default function getArrayLastMonths(data) {
  const currentMonth = new Intl.DateTimeFormat('ru-Ru', {
    month: 'long',
  }).format(new Date());

  let index = 0;

  const arrayMonths = Object.entries(data).map((item, idx) => {
    if (item[0].toLowerCase() === currentMonth) {
      index = idx;
    }
    return item;
  });

  arrayMonths.splice(index + 1);

  const months = arrayMonths.reverse();
  return months;
}
