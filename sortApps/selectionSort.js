export default function getSelectionSortAnimations(array) {
  let frames = [];
  selectionSort(array, frames);
  return frames;
}

function selectionSort(array, frames) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = array[i]
    let minPos = i
    for (let k = i + 1; k < array.length; k++) {
      let singleFrame = [minPos, k]

      frames.push(singleFrame)
      if (array[k] < min) {
        min = array[k]
        minPos = k
      }
      frames.push([...singleFrame, 'primary'])
    }
    if (min !== array[i]) {
      let temp = array[i]
      array[i] = min
      array[minPos] = temp
      frames.push([i, minPos, 'switch'])
      frames.push([i, minPos, 'switch2'])
    }
    frames.push([i, minPos, 'primary'])
  }
  return array
}

// function swap(array, firstIndex, secondIndex) {
//   let temp = array[firstIndex];
//   array[firstIndex] = array[secondIndex];
//   array[secondIndex] = temp;
// }

