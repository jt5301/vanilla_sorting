export function quickSortFunction(heights, frames) {
  console.log(heights)
  quickSort(heights, frames)
}

function quickSort(array, frames, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, frames, left, right)
    console.log(pivotIndex)
    quickSort(array, frames, left, pivotIndex - 1)
    quickSort(array, frames, pivotIndex + 1, right)
  }
  return array
}

function pivot(array, frames, start = 0, end = array.length - 1) {
  let pivot = array[start]
  let swapIndex = start
  frames.push([swapIndex], 'start')
  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      swapIndex += 1
      frames.push([i, swapIndex], swap)
      swap(swapIndex, i, array)
    }
  }
  swap(start, swapIndex, array)
  frames.push([[k]])
  return swapIndex
}

function swap(a, b, array) {
  let temp = array[a]
  array[a] = array[b]
  array[b] = temp
}

