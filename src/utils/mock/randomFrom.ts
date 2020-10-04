export const randomFrom = <T>(...arr: T[]): T => {
  const length = arr.length;
  return arr[Math.floor(Math.random() * length)];
};
