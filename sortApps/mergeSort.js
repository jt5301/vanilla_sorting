export function mergeSortFunction(heights, frames) {
  if (heights.length <= 1) return heights

  let firstHalf = mergeSortFunction(heights.slice(0, Math.floor(heights.length / 2)), frames)

  let secondHalf = mergeSortFunction(heights.slice(Math.floor(heights.length / 2)), frames)
  let merged = firstHalf.concat(secondHalf)

  return merger(firstHalf, secondHalf, frames)
}


function merger(arr1, arr2, frames) {
  let concated = arr1.concat(arr2)
  let flattened = concated.flat()
  console.log(flattened)
  frames.push([flattened, 'start'])//get bars to initially color
  const sorted = []
  let p1 = 0
  let p2 = 0
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      sorted.push(arr1[p1])
      p1 += 1

    }
    else {
      sorted.push(arr2[p2])
      p2 += 1
    }
  }
  while (p1 < arr1.length) {
    sorted.push(arr1[p1])
    p1++
  }
  while (p2 < arr2.length) {
    sorted.push(arr2[p2])
    p2++
  }
  frames.push([sorted, 'end'])//recolor them
  return sorted
}


/*merge sort function

  if (heights.length <= 1) return heights

  let firstHalf = mergeSortFunction(heights.slice(0, Math.floor(heights.length / 2)))

  let secondHalf = mergeSortFunction(heights.slice(Math.floor(heights.length / 2)))

  return merger(firstHalf, secondHalf)

*/

/* merger function
  const sorted = []
  let p1 = 0
  let p2 = 0
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      sorted.push(arr1[p1])
      p1 += 1
    }
    else {
      sorted.push(arr2[p2])
      p2 += 1
    }
  }
  while (p1 < arr1.length) {
    sorted.push(arr1[p1])
    p1++
  }
  while (p2 < arr2.length) {
    sorted.push(arr2[p2])
    p2++
  }
  return sorted

*/