export default function serializeDate(date: Date) {
  const createDate = date.toLocaleString('en-GB', {
    day: 'numeric',
    month: '2-digit',
  });
  return `Tasklist ( ${createDate} )`;
}
