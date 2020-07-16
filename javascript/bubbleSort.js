// BubbleSort implementataion of sorting an array

function bubbleSort(arr) {
  for (let j = arr.length - 1; j >= 0; j--) {
    for (let i = 0; i <= j - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  console.log(arr);
}

/// bubbleSort([67,4,6,38,2,1])
//  [ 1, 2, 4, 6, 38, 67 ]
