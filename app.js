import { bubbleSortFunction } from './sortApps/bubbleSort.js'
import { mergeSortFunction } from './sortApps/mergeSort.js'
import { quickSortFunction } from './sortApps/quickSort.js'
import { insertionSortFunction } from './sortApps/insertionSort.js'
import { selectionSortFunction } from './sortApps/selectionSort.js'
import { heightGenerator, buttonTimeouts } from './HelperFunctions.js'


const container = document.getElementById('mainContainer')
let primaryColor = 'pink'
let swapColor = 'cornflowerblue'
let frameSpeed = 50

const createBar = (id, height) => {
  const bar = document.createElement("div");
  bar.className = "bar";
  bar.id = `${id}`
  bar.name = `${id}`
  const barHeight = height
  bar.style.height = `${barHeight}px`
  return bar
}

let heights = heightGenerator(30)

// initial set up for bars
for (let i = 0; i < heights.length; i++) {
  const bar = createBar(i, heights[i])
  container.appendChild(bar)
}

const reset = document.getElementById('reset')
reset.addEventListener('click', () => {
  heights = heightGenerator(30)
  for (let i = 0; i < heights.length; i++) {
    const bar = document.getElementById(`${i}`)
    bar.parentNode.removeChild(bar)
    const newBar = createBar(i, heights[i])
    container.appendChild(newBar)
  }
})

const quickSort = document.getElementById('quick')
quickSort.addEventListener('click', () => {
  const frames = []
  quickSortFunction(heights, frames)
  for (let i = 0; i < frames.length; i++) {
    switch (frames[i][frames[i].length - 1]) {
      case 'start':
        setTimeout(() => {
          const bar = document.getElementById(`${frames[i][0]}`)
          bar.style.backgroundColor = swapColor
        }, frameSpeed * i)
        break
      case 'color1':
        setTimeout(() => {
          const bar = document.getElementById(`${frames[i][1]}`)
          bar.style.backgroundColor = swapColor
        }, frameSpeed * i)
        break
      case 'noSwap':
        setTimeout(() => {
          const bar = document.getElementById(`${frames[i][1]}`)
          bar.style.backgroundColor = primaryColor
        }, frameSpeed * i)
        break
      case 'height1':
        setTimeout(() => {
          const bar = document.getElementById(`${frames[i][0]}`)
          bar.style.backgroundColor = swapColor
          bar.style.height = `${frames[i][3]}px`
        }, frameSpeed * i)
        break
      case 'height2':
        setTimeout(() => {
          const bar = document.getElementById(`${frames[i][1]}`)
          bar.style.height = `${frames[i][2]}px`
        }, frameSpeed * i)
        break
      case 'frameRecolor':
        setTimeout(() => {
          const bar = document.getElementById(`${frames[i][0]}`)
          const bar2 = document.getElementById(`${frames[i][1]}`)
          bar.style.backgroundColor = primaryColor
          bar2.style.backgroundColor = primaryColor
        }, frameSpeed * i)
        break
    }
  }
})

const mergeSort = document.getElementById('merge')
mergeSort.addEventListener('click', () => {
  const frames = []
  mergeSortFunction(heights, frames)
  for (let i = 0; i < frames.length; i++) {
    switch (frames[i][2]) {
      case 'start':
        setTimeout(() => {
          for (let k = frames[i][0]; k <= frames[i][1]; k++) {
            const bar = document.getElementById(`${k}`)
            bar.style.backgroundColor = swapColor
          }
        }, frameSpeed * i)
        break
      case 'sort':
        setTimeout(() => {
          let sortBar = document.getElementById(`${frames[i][0]}`)
          sortBar.style.height = `${frames[i][1]}px`
        }, frameSpeed * i)
        break
      case 'end':
        setTimeout(() => {
          for (let k = frames[i][0]; k <= frames[i][1]; k++) {
            const bar = document.getElementById(`${k}`)
            bar.style.backgroundColor = primaryColor
          }
        }, frameSpeed * i)
        break
    }
  }
})

const insertionSort = document.getElementById('insertion')
insertionSort.addEventListener('click', () => {
  const frames = []
  insertionSortFunction(heights, frames)
  let tempHeight = 0
  for (let i = 0; i < frames.length; i++) {
    let bar1 = document.getElementById(frames[i][0])
    let bar2 = document.getElementById(frames[i][1])
    setTimeout(() => {
      bar1.style.backgroundColor = swapColor;
      bar2.style.backgroundColor = swapColor;
    }, frameSpeed * i)
    if (frames[i][2] === 'switch') {
      setTimeout(() => {
        tempHeight = bar1.style.height;
        bar1.style.height = bar2.style.height;
      }, frameSpeed * i);
    }
    if (frames[i][2] === 'switch2') {
      setTimeout(() => {
        bar2.style.height = tempHeight;
      }, frameSpeed * i);
    }
    if (frames[i][2] === 'primary') {
      setTimeout(() => {
        bar1.style.backgroundColor = primaryColor;
        bar2.style.backgroundColor = primaryColor;
      }, frameSpeed * i);
    }
  }
})

const selectionSort = document.getElementById('selection')
selectionSort.addEventListener('click', () => {
  const frames = []
  selectionSortFunction(heights, frames)
  let tempHeight = 0
  for (let i = 0; i < frames.length; i++) {
    let bar1 = document.getElementById(frames[i][0])
    let bar2 = document.getElementById(frames[i][1])
    setTimeout(() => {
      bar1.style.backgroundColor = swapColor;
      bar2.style.backgroundColor = swapColor;
    }, i * frameSpeed);
    switch (frames[i][2]) {
      case 'primary':
        setTimeout(() => {
          bar1.style.backgroundColor = primaryColor
          bar2.style.backgroundColor = primaryColor
        }, i * frameSpeed)
        break
      case 'swap1':
        setTimeout(() => {
          tempHeight = bar1.style.height
          bar1.style.height = bar2.style.height
        }, i * frameSpeed)
        break
      case 'swap2':
        setTimeout(() => {
          bar2.style.height = tempHeight
        }, i * frameSpeed)
    }
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
          bar1.style.backgroundColor = swapColor
          bar2.style.backgroundColor = swapColor
        }, frameSpeed * i)
        break
      case 'end':
        setTimeout(() => {
          bar1.style.backgroundColor = primaryColor
          bar2.style.backgroundColor = primaryColor
        }, frameSpeed * i)
        break
      case 'swap1':
        setTimeout(() => {
          temp = bar1.style.height
          bar1.style.height = bar2.style.height
        }, frameSpeed * i)
        break
      case 'swap2':
        setTimeout(() => {
          bar2.style.height = temp
        }, frameSpeed * i)
        break
    }
  }
})
