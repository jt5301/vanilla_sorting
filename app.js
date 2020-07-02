import { bubbleSortFunction } from './sortApps/bubbleSort.js'
import { mergeSortFunction } from './sortApps/mergeSort.js'
import { heightGenerator, buttonTimeouts } from './HelperFunctions.js'

const container = document.getElementById('mainContainer')


const createBar = (id, height) => {
  console.log('here')
  const bar = document.createElement("div");
  bar.className = "bar";
  bar.id = `${id}`
  const barHeight = height
  bar.style.height = `${barHeight}px`
  return bar
}

let heights = heightGenerator(10)
for (let i = 0; i < heights.length; i++) { // initial set up for bars
  const bar = createBar(i, heights[i])
  container.appendChild(bar)
}






const reset = document.getElementById('reset')
reset.addEventListener('click', () => {
  heights = heightGenerator(10)
  for (let i = 0; i < heights.length; i++) {
    const bar = document.getElementById(`${i}`)
    bar.parentNode.removeChild(bar)
    const newBar = createBar(i, heights[i])
    container.appendChild(newBar)
  }
  //reset completely removes the old bar div before installing in a new one bc of mergesort's need to rearrange bar ids

})

const mergeSort = document.getElementById('merge')
mergeSort.addEventListener('click', () => {
  for (let i = 0; i < heights.length; i++) {
    const bar = document.getElementById(`${i}`)
    console.log(bar)
    bar.id = bar.style.height
    //id is '__px'!
  }
  console.log('heights here', heights)
  let frames = []
  let newHeights = mergeSortFunction(heights, frames)
  console.log(newHeights, 'sorted')
  console.log(frames, 'frames')
  console.log(newHeights[0])
  for (let i = 0; i < newHeights.length; i++) {
    const bar = document.getElementById(`${newHeights[i]}px`)
    bar.id = `${i}`
  }
})


const bubbleSort = document.getElementById('bubble')
bubbleSort.addEventListener('click', () => {
  const frames = []
  bubbleSortFunction(heights, frames)

  buttonTimeouts(frames.length)

  let temp = 0
  for (let i = 0; i < frames.length; i++) {
    const bar1 = document.getElementById(frames[i][0])
    const bar2 = document.getElementById(frames[i][1])
    switch (frames[i][2]) {
      case 'start':
        setTimeout(() => {
          bar1.style.backgroundColor = 'cornflowerblue'
          bar2.style.backgroundColor = 'cornflowerblue'
        }, 10 * i)
        break
      case 'end':
        setTimeout(() => {
          bar1.style.backgroundColor = 'pink'
          bar2.style.backgroundColor = 'pink'
        }, 10 * i)
        break
      case 'swap1':
        setTimeout(() => {
          temp = bar1.style.height
          bar1.style.height = bar2.style.height
        }, 10 * i)
        break
      case 'swap2':
        setTimeout(() => {
          bar2.style.height = temp
        }, 10 * i)
        break
    }
  }
})



