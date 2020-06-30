export function mergeSortFunction(heights, startIdx, endIdx, frames = []) {
  if (heights.length <= 1) return

  const middle = Math.floor((endIdx + 1 - startIdx) / 2)
  let firstHalf = mergeSortFunction(heights, startIdx, middle, frames)
  let secondHalf = mergeSortFunction(heights, middle + 1, endIdx, frames)


}

// function merger(arr1, arr2) {
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
//   return sorted
// }
