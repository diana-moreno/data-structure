// Stack by Constructor Pattern
function StackDataStructure () {
  this.stackControl = []
  this.index = -1
  this.MAX_SIZE = rowsAccessDomLeft.length;
  this.isEmpty = function() {
    return this.stackControl.length === 0
  }
  this.canPush = function() {
    return this.stackControl.length < this.MAX_SIZE
  }
  this.push = function(elem) {
    if(this.canPush()) {
      this.stackControl.push(elem)
      this.index++
      this.addToDom(this.index)
    } else if(!this.canPush()) {
      return 'Stack Overflow'
    }
  }
  this.pop = function(elem) {
    if(this.isEmpty()) {
      return 'Stack Underflow'
    } else {
      this.stackControl.pop(elem)
      this.deleteToDom(this.index)
      this.index--
    }
  }
  this.addToDom = function(index) {
    rowsAccessDomLeft[index].innerHTML = this.stackControl[index]
    rowsAccessDomLeft[index].style.backgroundColor = "#2196f38c";
  }
  this.deleteToDom = function(index) {
    rowsAccessDomLeft[index].innerHTML = ''
    rowsAccessDomLeft[index].style.backgroundColor = "#80808070";
  }
}

