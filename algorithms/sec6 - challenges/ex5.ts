const averagePair = (array: number[], average: number) => {
  if (array.length === 0 || average === 0) return false;
  let tail = 0;
  let head = 1;
  while (tail < array.length && head < array.length) {
    const calculatedAvg = (array[tail] + array[head]) / 2;
    if (calculatedAvg === average) return true;
    else if (head === array.length - 1) {
      tail++;
      head = tail + 1;
    } else head++;
  }
  return false;
};

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
