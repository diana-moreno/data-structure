//ACCES TO DOM
const piles = ['pile-10', 'pile-9', 'pile-8', 'pile-7', 'pile-6', 'pile-5', 'pile-4', 'pile-3', 'pile-2', 'pile-1']

const pilesAccessDomLeft = [];
const pilesAccessDomRight = [];

piles.forEach(elem => pilesAccessDomLeft.push(document.getElementsByClassName(elem)[0]))
piles.forEach(elem => pilesAccessDomRight.push(document.getElementsByClassName(elem)[1]))


//STACK ACCES TO DOM AND EVENTS
let stack = new StackDataStructure()

function addLeftElem() {
  stack.push(inputLeft.val())
  inputLeft.val('')
  inputLeft.focus()
}

function deleteLeftElem() {
  stack.pop(inputLeft.val())
  inputLeft.focus()
}

let inputLeft = $('.left-structure > input')
$('.left-structure > .addDelete > .add').click(addLeftElem)
$('.left-structure > .addDelete > .delete').click(deleteLeftElem)

//QUEUE ACCES TO DOM AND EVENTS
let queue = new QueueDataStructure();

function addRightElem() {
  queue.enqueue(inputRight.val())
  inputRight.val('')
  inputRight.focus()
}
function deleteRightElem() {
  queue.dequeue(inputRight.val())
  inputRight.focus()
}

let inputRight = $('.right-structure > input')
$('.right-structure > .addDelete > .add').click(addRightElem)
$('.right-structure > .addDelete > .delete').click(deleteRightElem)
