const swap = (array, firstIndex, secondIndex) => {
  const firstValue = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = firstValue;
};

const findIndexOfMin = (array, startingPoint) => {
  let minVal = array[startingPoint];
  let minIndex = startingPoint;
  let arrayLength = array.length;

  for (let i = startingPoint + 1; i < arrayLength; i++) {
    if (array[i] < minVal) {
      minVal = array[i];
      minIndex = i;
    }
  }
  return minIndex;
};

const selectionSort = (array) => {
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    const minIndex = findIndexOfMin(array, i);
    swap(array, i, minIndex);
  }
  return array;
};
