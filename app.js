import { bubbleSortFunction } from './sortApps/bubbleSort.js'
import { mergeSortFunction } from './sortApps/mergeSort.js'
import { heightGenerator, buttonTimeouts } from './HelperFunctions.js'

const container = document.getElementById('mainContainer')

let heights = []

for (let i = 0; i < 8; i++) { // initial set up for bars
  const bar = document.createElement("div");
  bar.className = "bar";
  bar.id = `${i}`
  const barHeight = heightGenerator()
  heights.push(barHeight)
  bar.style.height = `${barHeight}px`
  container.appendChild(bar)
}


const reset = document.getElementById('reset')
reset.addEventListener('click', () => {
  for (let i = 0; i < 50; i++) {
    heights[i] = heightGenerator()
    const bar = document.getElementById(`${i}`)
    bar.style.height = `${heights[i]}px`
    bar.style.backgroundColor = 'pink'
  }
})

const mergeSort = document.getElementById('merge')
mergeSort.addEventListener('click', () => {
  console.log(heights)
  const sorted = mergeSortFunction(heights, 0, heights.length - 1)
  console.log(sorted)

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



