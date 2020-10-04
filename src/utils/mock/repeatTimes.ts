export const repeatTimes = <T>(n: number, map: (i: number, index: number) => T): T[] => {
  return new Array(n).fill(1).map(map);
};
