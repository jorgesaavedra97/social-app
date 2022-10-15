import { format, formatDistance } from 'date-fns';

export function formatDate(dateString) {
  const [date] = dateString.split('T');
  const [year, month, day] = date.split('-');
  const dateObject = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10))
  
  return format(dateObject, 'dd/MM/yyyy');
}

export function formatDateAgo(dateString) {
  const [date, time] = dateString.split('T');
  const [year, month, day] = date.split('-');
  const [hour, minute, seconds] = time.split(':');
  const postedDate = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10), parseInt(hour, 10), parseInt(minute, 10), parseInt(seconds, 10))
  const dateFormated = formatDistance(postedDate, new Date(), { addSuffix: true })
  return dateFormated;
}
