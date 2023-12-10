export function getDayMonthYear(thedate?: string) {
  const date = typeof thedate === 'string' ? new Date(thedate) : new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
