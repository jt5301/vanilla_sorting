export function heightGenerator() {// height between 1 & 750
  let min = Math.ceil(750);
  let max = Math.floor(1);
  return (Math.floor(Math.random() * (max - min + 1)) + min)
}

export function buttonTimeouts(frameLength) {
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

  setTimeout(() => {
    buttons.forEach((current) => {
      current.disabled = false
    })
  }, 10 * frameLength)
}
