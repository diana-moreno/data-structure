// Queue by Constructor Pattern
function QueueDataStructure () {
  this.queueControl = []
  this.index = -1;
  this.MAX_SIZE = pilesAccessDomRight.length;
  this.isEmpty = function() {
    return this.queueControl.length === 0
  }
  this.canEnqueue = function() {
    return this.queueControl.length < this.MAX_SIZE
  }
  this.enqueue = function(elem) {
    if(this.canEnqueue()) {
      let counter = 1;
      this.queueControl.unshift(elem)
      this.index = this.queueControl.length-counter
      counter++
      this.addToDom(this.index)
    } else if(!this.canEnqueue()) {
      return 'Queue Overflow'
    }
  }
  this.dequeue = function(elem) {
    if(this.isEmpty()) {
      return 'Queue Underflow'
    } else {
      this.queueControl.pop(elem)
      this.deleteToDom()
    }
  }
  this.addToDom = function(index) {
    pilesAccessDomRight[index].innerHTML = this.queueControl[0]
    pilesAccessDomRight[index].style.backgroundColor = "#2196f38c";
  }
  this.deleteToDom = function() {
    for(let i = 0; i< pilesAccessDomRight.length-1; i++) {
      pilesAccessDomRight[i].innerHTML = pilesAccessDomRight[i+1].innerHTML
      pilesAccessDomRight[i].style.backgroundColor = pilesAccessDomRight[i+1].style.backgroundColor
    }
  }
}

