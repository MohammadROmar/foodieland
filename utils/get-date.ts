export function getDate(time: string) {
  let date = new Date(time);

  if (!date.getDate()) {
    date = new Date();
  }

  const formattedDate = date.toLocaleDateString(undefined, {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

  return { date, formattedDate };
}
