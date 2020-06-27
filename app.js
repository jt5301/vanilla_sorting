import { bubbleSortFunction } from './sortApps/bubbleSort.js'

const container = document.getElementById('mainContainer')

let heights = []

for (let i = 0; i < 10; i++) { // initial set up for bars
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
  for (let i = 0; i < 100; i++) {
    heights[i] = heightGenerator()
    const bar = document.getElementById(`${i}`)
    bar.style.height = `${heights[i]}px`
    bar.style.backgroundColor = 'pink'
  }

})


const bubbleSort = document.getElementById('bubble')
bubbleSort.addEventListener('click', () => {
  const nodes = document.getElementById('buttons').childNodes
  const buttons = []
  for (let node of nodes) {
    if (node.nodeName === 'BUTTON') {
      buttons.push(node)
    }
  }
  buttons.forEach((current) => {
    current.disabled = true
  })
  console.log(nodes)


  const frames = []
  bubbleSortFunction(heights, frames)
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
  setTimeout(() => {
    buttons.forEach((current) => {
      current.disabled = false
    })
  }, 10 * frames.length)

})


function heightGenerator() {// height between 1 & 750
  let min = Math.ceil(750);
  let max = Math.floor(1);
  return (Math.floor(Math.random() * (max - min + 1)) + min)
}





