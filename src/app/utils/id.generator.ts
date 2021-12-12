export const getUniqId = () => {
  const date = new Date();
  return `${date.valueOf()}`;
}
