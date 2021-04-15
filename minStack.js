/**
 * initialize your data structure here.
 */
var MinStack = function() {
	// using array for the stack
	// keep track of min
    this.stk = []
    this.min = Infinity
    this.minIndex = -1
    this.size = 0
    // track the mins in another array
    this.minTracker = []
};

/** 
 * param {number} val
 * return {void}
 */
MinStack.prototype.push = function(val) {
    this.stk.push(val)
	// if new min, put in array and note the value
    if (val <= this.min) {
        this.min = val
        this.minTracker.push(val)
        this.minIndex++
    }
    this.size++
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stk.pop() === this.min) {
        // get prev min
        this.minIndex--
        this.min = this.minTracker[this.minIndex]
        this.minTracker.pop()
    }
    this.size--
    if(this.size === 0) {
		// reset min when stack is emptied
        this.min = Infinity
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stk[this.size - 1]
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */