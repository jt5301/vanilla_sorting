import { bubbleSortFunction } from './sortApps/bubbleSort.js'
import { mergeSortFunction } from './sortApps/mergeSort.js'
import { heightGenerator, buttonTimeouts } from './HelperFunctions.js'

const container = document.getElementById('mainContainer')


const createBar = (id, height) => {
  const bar = document.createElement("div");
  bar.className = "bar";
  bar.id = `${id}`
  bar.name = `${id}`
  const barHeight = height
  bar.style.height = `${barHeight}px`
  return bar
}

let heights = heightGenerator(6)

// initial set up for bars
for (let i = 0; i < heights.length; i++) {
  const bar = createBar(i, heights[i])
  container.appendChild(bar)
}

const reset = document.getElementById('reset')
reset.addEventListener('click', () => {
  heights = heightGenerator(5)
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
    bar.id = bar.style.height
    bar.name = bar.style.height
    console.log(bar)

    //id is '__px'!
  }
  let frames = []
  mergeSortFunction(heights, frames)
  for (let i = 0; i < frames.length; i++) {
    switch (frames[i][1]) {
      case 'start':
        setTimeout(() => {
          frames[i][0].forEach((current) => {
            const bar = document.getElementById(`${current}px`)
            bar.style.backgroundColor = 'cornflowerblue'
          })
        }, 2000 * i)
        break

      case 'end':
        setTimeout(() => {
          frames[i][0].forEach((current) => {
            const bar = document.getElementById(`${current}px`)
            bar.style.backgroundColor = 'pink'

          })
        }, 2000 * i)
        break
    }
  }
  // switch(frames[i][2])
  // for (let i = 0; i < newHeights.length; i++) {
  //   const bar = document.getElementById(`${newHeights[i]}px`)
  //   bar.id = `${i}`
  // }
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



