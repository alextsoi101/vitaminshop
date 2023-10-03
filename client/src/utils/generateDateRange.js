export const generateDateRange = (range) => {
  const currentDate = new Date();
  const pastDate = new Date(currentDate);

  pastDate.setDate(currentDate.getDate() - range);

  const currentDateISO = currentDate.toISOString().split('T')[0];
  const pastDateISO = pastDate.toISOString().split('T')[0];

  return {
    startDate: pastDateISO,
    lastDate: currentDateISO,
  };
}