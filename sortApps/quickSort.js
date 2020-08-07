export function quickSortFunction(heights, frames) {
  console.log(heights)
  quickSort(heights, frames)
}

function quickSort(array, frames, left = 0, right = array.length - 1) {
  console.log('called')
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
  frames.push([swapIndex, 'start'],)
  for (let i = start + 1; i <= end; i++) {
    frames.push([swapIndex, i, 'color1'])
    if (pivot > array[i]) {
      swapIndex += 1
      frames.push([swapIndex, i, 'height1'])
      frames.push([swapIndex, i, 'height2'])
      swap(swapIndex, i, array)
    }
    else {
      frames.push([swapIndex, i, 'noSwap'])
    }
  }
  swap(start, swapIndex, array)
  frames.push([start, swapIndex, 'height1'])
  frames.push([start, swapIndex, 'height2'])
  return swapIndex
}

function swap(a, b, array) {
  let temp = array[a]
  array[a] = array[b]
  array[b] = temp
}

