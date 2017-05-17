/**
 * Return a string of whitespaces of a given size.
 * @param  {Number} size Padding size.
 * @return {String}       Padding
 */
function _getPadding(size) {
  return (Array(size + 1).join(' '));
}

/**
 * Class for manipulating the calculator stack including performing operations
 * on the stack according to operators and commands.
 * @type {Class}
 */
class Stack {
  /**
   * Constructor for Stack.
   * @param  {Array} stack Stack array.
   */
  constructor(stack) {
    /**
     * Array for the stacks.
     * @type {Array}
     */
    this.ary = stack || [];
  }

  /**
   * Get the maximum prefix size needed to list the stack aligned on comma.
   * @return {Number}  Prefix size.
   */
  _getMaxPrefixSize() {
    let maxPrefixSize = 0;

    this.ary.map((value) => {
      const parts = value.toString().split('.');
      const prefixSize = parts[0].length;

      if (prefixSize > maxPrefixSize) {
        maxPrefixSize = prefixSize;
      }

      return maxPrefixSize;
    });

    return (maxPrefixSize);
  }

  /**
   * Calculate the square root of the last stack value which is replaced by the
   * result if the value is larger than 0.
   * @return {this}
   */
  calcRoot() {
    const length = this.ary.length;
    const last = length - 1;

    if (length > 0 && this.ary[last] > 0) {
      this.ary[last] = Math.sqrt(this.ary[last]);
    }

    return this;
  }

  /**
   * Calculate the exponent x**y of using the two last stack values which are
   * replaced by the result.
   * @return {this}
   */
  calcExp() {
    if (this.ary.length < 2) {
      return this;
    }

    const value2 = this.ary.pop();
    const value1 = this.ary.pop();

    this.ary.push(Math.pow(value1, value2));

    return this;
  }

  /**
   * Calculate the reciprocal value of using the last stack value which is
   * replaced by the result.
   * @return {this}
   */
  calcReciprocal() {
    const length = this.ary.length;
    const last = length - 1;

    if (length > 0 && this.ary[last] !== 0) {
      this.ary[last] = 1 / this.ary[last];
    }

    return this;
  }

  /**
   * Calculate the sum of the last two stack values which are replaced by the
   * result.
   * @return {this}
   */
  calcAdd() {
    if (this.ary.length < 2) {
      return this;
    }

    const value2 = this.ary.pop();
    const value1 = this.ary.pop();

    this.ary.push(value1 + value2);

    return this;
  }

  /**
   * Calculate the subtraction of the last two stack values which are replaced
   * by the result.
   * @return {this}
   */
  calcSubstract() {
    if (this.ary.length < 2) {
      return this;
    }

    const value2 = this.ary.pop();
    const value1 = this.ary.pop();

    this.ary.push(value1 - value2);

    return this;
  }

  /**
   * Calculate the multiplication of the last two stack values which are
   * replaced by the result.
   * @return {this}
   */
  calcMultiply() {
    if (this.ary.length < 2) {
      return this;
    }

    const value2 = this.ary.pop();
    const value1 = this.ary.pop();

    this.ary.push(value1 * value2);

    return this;
  }

  /**
   * Calculate the division of the last two stack values which are replaced by
   * the result.
   * @return {this}
   */
  calcDivide() {
    if (this.ary.length < 2) {
      return this;
    }

    const value2 = this.ary.pop();
    const value1 = this.ary.pop();

    this.ary.push(value1 / value2);

    return this;
  }

  /**
   * Calculate the sum of all stack values which are replaced by the
   * result.
   * @return {this}
   */
  calcSum() {
    if (this.ary.length <= 1) {
      return this;
    }

    let sum = 0;

    for (let i = 0; i < this.ary.length; i += 1) {
      sum += this.ary[i];
    }

    this.ary = [sum];

    return this;
  }

  /**
   * Remove the last value on the stack.
   * @return {Object} Last stack element.
   */
  pop() {
    return this.ary.pop();
  }

  /**
   * Swap the last two values on the stack.
   @return {this}
   */
  swap() {
    if (this.ary.length < 2) {
      return this;
    }

    const value2 = this.ary.pop();
    const value1 = this.ary.pop();

    this.ary.push(value2);
    this.ary.push(value1);

    return this;
  }

  /**
   * Empty the stack array.
   * @return {this}
   */
  empty() {
    this.ary = [];

    return this;
  }

  /**
   * Add the given value to the stack unless it is an operator in which case
   * the appropriate action is taken.
   * @param  {String} value Value to push onto stack.
   * @return {this}
   */
  push(value) {
    switch (value) {
      case '':
        break;
      case '+':
        this.calcAdd();
        break;
      case '-':
        this.calcSubstract();
        break;
      case '*':
        this.calcMultiply();
        break;
      case '/':
        this.calcDivide();
        break;
      default: {
        const parsedValue = parseFloat(value);

        if (parsedValue || value === '0') {
          this.ary.push(parsedValue);
        }

        break;
      }
    }

    return this;
  }

  /**
   * Render the stack array as a list of text lines separeted with a line
   * delimiter. This is to be used as the value of a textarea element.
   * @return {String} Stack as text string.
   */
  render() {
    const rows = [];
    const length = this.ary.length;
    const maxIndexSize = length.toString().length;
    const maxPrefixSize = this._getMaxPrefixSize();

    for (let i = 0; i < length; i += 1) {
      const index = length - i;
      const value = this.ary[i];
      const parts = value.toString().split('.');
      const valueSize = parts[0].length;
      const indexSize = index.toString().length;
      const indexPadding = _getPadding((maxIndexSize - indexSize) + 1);
      const valuePadding = _getPadding((maxPrefixSize - valueSize) + 1);

      rows.push(`${indexPadding}${index}: ${valuePadding}${value}`);
    }

    return (rows.join('\n'));
  }
}

export default Stack;
