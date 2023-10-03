export const calculatePageCount = (totalResults, limit) => {
  if (totalResults <= 0 || limit <= 0) {
    return 0;
  }

  return Math.ceil(totalResults / limit);
}