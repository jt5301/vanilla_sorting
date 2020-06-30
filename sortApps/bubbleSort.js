export function bubbleSortFunction(heights, frames) {
  for (let i = heights.length; i > 0; i--) {
    let swapCheck = true
    for (let k = 0; k < i - 1; k++) {
      frames.push([k, k + 1, 'start'])
      if (heights[k] > heights[k + 1]) {
        frames.push([k, k + 1, 'swap1'])
        swap(k, k + 1, heights)
        frames.push([k, k + 1, 'swap2'])
        swapCheck = false
      }
      frames.push([k, k + 1, 'end'])
    }
    if (swapCheck) break
  }
}

function swap(a, b, array) {
  let temp = array[a]
  array[a] = array[b]
  array[b] = temp
}
