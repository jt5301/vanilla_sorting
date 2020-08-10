export function mergeSortFunction(heights, frames) {
  if (heights.length <= 1) return heights

  let auxArray = heights.slice()
  mergeSortHelper(heights, auxArray, 0, heights.length - 1, frames)
  return heights
}

function mergeSortHelper(main, auxArray, startIndex, endIndex, frames) {
  if (startIndex === endIndex) return
  let middleIndex = Math.floor((startIndex + endIndex) / 2)
  mergeSortHelper(auxArray, main, startIndex, middleIndex, frames)
  mergeSortHelper(auxArray, main, middleIndex + 1, endIndex, frames)
  doMerge(main, auxArray, startIndex, middleIndex, endIndex, frames)
}

function doMerge(mainArray, auxArray, startIndex, middleIndex, endIndex, frames) {
  let k = startIndex
  let i = startIndex
  let j = middleIndex + 1
  frames.push([startIndex, endIndex, 'start'])
  while (i <= middleIndex && j <= endIndex) {
    if (auxArray[i] <= auxArray[j]) {
      frames.push([k, auxArray[i], 'sort'])
      mainArray[k] = auxArray[i]
      k += 1
      i += 1
    }
    else {
      mainArray[k] = auxArray[j]
      frames.push([k, auxArray[j], 'sort'])
      k += 1
      j += 1
    }
  }
  while (i <= middleIndex) {
    frames.push([k, auxArray[i], 'sort'])
    mainArray[k] = auxArray[i]
    k += 1
    i += 1
  }
  while (j <= endIndex) {
    frames.push([k, auxArray[j], 'sort'])
    mainArray[k] = auxArray[j]
    k += 1
    j += 1
  }
  frames.push([startIndex, endIndex, 'end'])
}


// export function mergeSortFunction(heights, frames) {
//   if (heights.length <= 1) return heights

//   let firstHalf = mergeSortFunction(heights.slice(0, Math.floor(heights.length / 2)), frames)

//   let secondHalf = mergeSortFunction(heights.slice(Math.floor(heights.length / 2)), frames)

//   return merger(firstHalf, secondHalf, frames)
// }


// function merger(arr1, arr2, frames) {
//   let concated = arr1.concat(arr2)
//   let flattened = concated.flat()
//   frames.push([flattened, 'start'])//get bars to initially color
//   const sorted = []
//   let p1 = 0
//   let p2 = 0

//   while (p1 < arr1.length && p2 < arr2.length) {
//     if (arr1[p1] < arr2[p2]) {
//       sorted.push(arr1[p1])
//       p1 += 1
//     }
//     else {
//       sorted.push(arr2[p2])
//       p2 += 1
//     }
//   }
//   while (p1 < arr1.length) {
//     sorted.push(arr1[p1])
//     p1++
//   }
//   while (p2 < arr2.length) {
//     sorted.push(arr2[p2])
//     p2++
//   }

//   frames.push([sorted, 'end'])//recolor them

//   return sorted
// }


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
