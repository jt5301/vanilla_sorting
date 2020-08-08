import { bubbleSortFunction } from './sortApps/bubbleSort.js'
import { mergeSortFunction } from './sortApps/mergeSort.js'
import { quickSortFunction } from './sortApps/quickSort.js'
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

let heights = heightGenerator(100)

// initial set up for bars
for (let i = 0; i < heights.length; i++) {
  const bar = createBar(i, heights[i])
  container.appendChild(bar)
}

const reset = document.getElementById('reset')
reset.addEventListener('click', () => {
  heights = heightGenerator(100)
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
          bar.style.backgroundColor = 'cornflowerblue'
        }, 10 * i)
        break
      case 'color1':
        setTimeout(() => {
          const bar = document.getElementById(`${frames[i][1]}`)
          bar.style.backgroundColor = 'cornflowerblue'
        }, 10 * i)
        break
      case 'noSwap':
        setTimeout(() => {
          const bar = document.getElementById(`${frames[i][1]}`)
          bar.style.backgroundColor = 'pink'
        }, 10 * i)
        break
      case 'height1':
        setTimeout(() => {
          const bar = document.getElementById(`${frames[i][0]}`)
          bar.style.backgroundColor = 'cornflowerblue'
          bar.style.height = `${frames[i][3]}px`
        }, 10 * i)
        break
      case 'height2':
        setTimeout(() => {
          const bar = document.getElementById(`${frames[i][1]}`)
          bar.style.height = `${frames[i][2]}px`
        }, 10 * i)
        break
      case 'frameRecolor':
        setTimeout(() => {
          const bar = document.getElementById(`${frames[i][0]}`)
          const bar2 = document.getElementById(`${frames[i][1]}`)
          bar.style.backgroundColor = 'pink'
          bar2.style.backgroundColor = 'pink'
        }, 10 * i)
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
            bar.style.backgroundColor = 'cornflowerblue'
          }
        }, 10 * i)
        break
      case 'sort':
        setTimeout(() => {
          let sortBar = document.getElementById(`${frames[i][0]}`)
          console.log(frames)
          sortBar.style.height = `${frames[i][1]}px`
        }, 10 * i)
        break
      case 'end':
        setTimeout(() => {
          for (let k = frames[i][0]; k <= frames[i][1]; k++) {
            const bar = document.getElementById(`${k}`)
            bar.style.backgroundColor = 'pink'
          }
        }, 10 * i)
        break
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
          bar1.style.backgroundColor = 'cornflowerblue'
          bar2.style.backgroundColor = 'cornflowerblue'
        }, 50 * i)
        break
      case 'end':
        setTimeout(() => {
          bar1.style.backgroundColor = 'pink'
          bar2.style.backgroundColor = 'pink'
        }, 50 * i)
        break
      case 'swap1':
        setTimeout(() => {
          temp = bar1.style.height
          bar1.style.height = bar2.style.height
        }, 50 * i)
        break
      case 'swap2':
        setTimeout(() => {
          bar2.style.height = temp
        }, 50 * i)
        break
    }
  }
})


/* Merge Sort Draft*/

// switch(frames[i][2])
// for (let i = 0; i < newHeights.length; i++) {
//   const bar = document.getElementById(`${newHeights[i]}px`)
//   bar.id = `${i}`
// }

// for (let i = 0; i < heights.length; i++) {
//   const bar = document.getElementById(`${i}`)
//   bar.id = bar.style.height
//   console.log(bar)

//   //id is '__px'!
// }
// let frames = []
// mergeSortFunction(heights, frames)
// for (let i = 0; i < frames.length; i++) {
//   switch (frames[i][1]) {
//     case 'start':
//       setTimeout(() => {
//         frames[i][0].forEach((current) => {
//           const bar = document.getElementById(`${current}px`)
//           bar.style.backgroundColor = 'cornflowerblue'
//         })
//       }, 2000 * i)
//       break
//     case 'sort':
//       setTimeout(() => {
//         console.log(frames[i])
//       })
//       break
//     case 'end':
//       setTimeout(() => {
//         frames[i][0].forEach((current) => {
//           const bar = document.getElementById(`${current}px`)
//           bar.style.backgroundColor = 'pink'

//         })
//       }, 2000 * i)
//       break
//   }
// }
