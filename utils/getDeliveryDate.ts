export const getDeliveryDate = (today: Date) => {
  const twoDaysFromNow = new Date(today).setDate(today.getDate() + 2);
  const fourDaysFromNow = new Date(today).setDate(today.getDate() + 4);

  return `${getFormattedDate(new Date(twoDaysFromNow))} - ${getFormattedDate(new Date(fourDaysFromNow))}`
}

const getFormattedDate = (date: Date) => {
  return `${getDayName(date)}, ${getMonth(date)}.${getDay(date)}.`
}

const getDayName = (date: Date) => {
  const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Thu', 'Fri', 'Sat'];
  const dayNumber = date.getDay();

  return dayNames[dayNumber];
}

const getMonth = (date: Date) => {
  const month = date.getMonth() + 1;

  return month < 10 ? `0${month}` : month
}

const getDay = (date: Date) => {
  const day = date.getDate();
  return day < 10 ? `0${day}` : day
}
