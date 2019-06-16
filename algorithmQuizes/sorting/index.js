// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  let arrLength = arr.length;
  for(let i = 0; i < arrLength; i++) {
    for(let j = (arrLength - 1); j > i; j--){
      if(arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  let arrLength = arr.length;
  for(let i = 0; i < arrLength; i++){
    let minIndex = i;
    for(let j = i; j < arrLength; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

function mergeSort(arr) {
  if(arr.length > 1) {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
  return arr;
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    }else{
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex, left.length)).concat(right.slice(rightIndex, right.length));
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
