//ACCES TO DOM
const rows = ['row-10', 'row-9', 'row-8', 'row-7', 'row-6', 'row-5', 'row-4', 'row-3', 'row-2', 'row-1']

const rowsAccessDomLeft = [];
const rowsAccessDomRight = [];

rows.forEach(elem => rowsAccessDomLeft.push(document.getElementsByClassName(elem)[0]))
rows.forEach(elem => rowsAccessDomRight.push(document.getElementsByClassName(elem)[1]))


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
