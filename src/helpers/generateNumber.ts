export const generateNumber = (min: number, max: number) => {
  const randomNumber = Math.random() * (max - min) + min;
  return Number(randomNumber.toFixed(2));
};
