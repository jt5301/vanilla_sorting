export function insertionSortFunction(array, frames) {
  insertionSort(array, frames)
  return frames
}

function insertionSort(array, frames) {
  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i]
    frames.push([i, i - 1])
    if (currentVal < array[i - 1]) {
      for (let k = i - 1; k >= 0 && array[k] > currentVal; k--) {
        frames.push([k, k + 1, 'switch'])
        frames.push([k, k + 1, 'switch2'])
        frames.push([k, k + 1, 'primary'])
        swap(array, k, k + 1)
      }
    }
    else {
      frames.push([i, i - 1, 'primary'])
    }
  }
}

function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}
