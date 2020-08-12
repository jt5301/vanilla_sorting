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
