const sumZero = (array: Array<number>) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];

    if (sum === 0) return [array[left], array[right]];
    else if (sum > 0) right--;
    else if (sum < 0) left++;
  }
};

const countUniqueValues = (array: Array<number>) => {
  let counter = 0;
  // let scout = 1;

  // while (scout <= array.length - 1) {
  //   if (array[counter] !== array[scout]) {
  //     counter++;
  //     array[counter] = array[scout];
  //   }
  //   scout++;
  // }

  for (let scout = 0; scout < array.length; scout++) {
    if (array[counter] !== array[scout]) {
      counter++;
      array[counter] = array[scout];
    }
  }

  return counter > 0 ? counter + 1 : 0;
};

countUniqueValues([1, 1, 1, 1, 1, 2]);
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
countUniqueValues([]);
countUniqueValues([-2, -1, -1, 0, 1]);
