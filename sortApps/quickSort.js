export function quickSortFunction(heights, frames) {
  quickSort(heights, frames)
}

function quickSort(array, frames, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, frames, left, right)
    quickSort(array, frames, left, pivotIndex - 1)
    quickSort(array, frames, pivotIndex + 1, right)
  }
  return array
}

function pivot(array, frames, start = 0, end = array.length - 1) {
  let pivot = array[start]
  let swapIndex = start
  frames.push([swapIndex, 'start'])
  for (let i = start + 1; i <= end; i++) {
    frames.push([swapIndex, i, 'color1'])
    if (pivot > array[i]) {
      console.log('pivot', pivot, array[i])
      swapIndex += 1
      let swapIndexHeight = array[swapIndex]//next up to swap
      let swapIHeight = array[i]//number that's less than pivot
      console.log('swaps', swapIndexHeight, swapIHeight)
      frames.push([swapIndex, i, swapIndexHeight, swapIHeight, 'height1'])
      swap(swapIndex, i, array)
      frames.push([swapIndex, i, swapIndexHeight, swapIHeight, 'height2'])
      frames.push([swapIndex, i, 'frameRecolor'])
      console.log('pivot', swapIndexHeight, swapIHeight)
    }
    else {
      frames.push([swapIndex, i, 'noSwap'])
    }
  }
  console.log('out of loop', array)
  swap(start, swapIndex, array)
  let startHeight = array[start]
  let swapIndexHeight = array[swapIndex]
  frames.push()
  return swapIndex
}

function swap(a, b, array) {
  let temp = array[a]
  array[a] = array[b]
  array[b] = temp
}

