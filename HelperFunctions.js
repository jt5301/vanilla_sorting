export function heightGenerator(amt) {// height between 1 & 750
  let heightHash = {}
  let counter = 0
  let heights = []
  while (counter < amt) {
    let min = Math.ceil(500);
    let max = Math.floor(1);

    let num = (Math.floor(Math.random() * (max - min + 1)) + min)
    if (!heightHash[num]) {
      heightHash[num] = true
      heights.push(num)
      counter += 1
    }
    else continue
  }
  return heights

}

export function buttonTimeouts(frameLength, frameSpeed) {
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
  }, frameSpeed * frameLength)
}
