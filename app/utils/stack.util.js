/**
 * Return a string of whitespaces of a given size.
 * @param  {Integer} size Padding size.
 * @return {String}       Padding
 */
function getPadding(size) {
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
   * Calculate the square root of the last stack value which is replaced by the
   * result if the value is larger than 0.
   */
  calcRoot() {
    const length = this.ary.length;
    const last = length - 1;

    if (length > 0 && this.ary[last] > 0) {
      this.ary[last] = Math.sqrt(this.ary[last]);
    }
  }

  /**
   * Calculate the exponent x**y of using the two last stack values which are
   * replaced by the result.
   */
  calcExp() {
    if (this.ary.length < 2) {
      return;
    }

    const value2 = this.ary.pop();
    const value1 = this.ary.pop();

    this.ary.push(value1 ** value2);
  }

  /**
   * Calculate the reciprocal value of using the last stack value which is
   * replaced by the result.
   */
  calcReciprocal() {
    const length = this.ary.length;
    const last = length - 1;

    if (length > 0) {
      this.ary[last] = 1 / this.ary[last];
    }
  }

  /**
   * Calculate the sum of the last two stack values which are replaced by the
   * result.
   */
  calcAdd() {
    if (this.ary.length < 2) {
      return;
    }

    const value2 = this.ary.pop();
    const value1 = this.ary.pop();

    this.ary.push(value1 + value2);
  }

  /**
   * Calculate the subtraction of the last two stack values which are replaced
   * by the result.
   */
  calcSubstract() {
    if (this.ary.length < 2) {
      return;
    }

    const value2 = this.ary.pop();
    const value1 = this.ary.pop();

    this.ary.push(value1 - value2);
  }

  /**
   * Calculate the multiplication of the last two stack values which are
   * replaced by the result.
   */
  calcMultiply() {
    if (this.ary.length < 2) {
      return;
    }

    const value2 = this.ary.pop();
    const value1 = this.ary.pop();

    this.ary.push(value1 * value2);
  }

  /**
   * Calculate the division of the last two stack values which are replaced by
   * the result.
   */
  calcDivide() {
    if (this.ary.length < 2) {
      return;
    }

    const value2 = this.ary.pop();
    const value1 = this.ary.pop();

    this.ary.push(value1 / value2);
  }

  /**
   * Calculate the sum of all stack values which are replaced by the
   * result.
   */
  calcSum() {
    if (this.ary.length < 1) {
      return;
    }

    let sum = 0;

    for (let i = 0; i < this.ary.length; i += 1) {
      sum += this.ary[i];
    }

    this.ary = [sum];
  }

  /**
   * Remove the last value on the stack.
   */
  pop() {
    this.ary.pop();
  }

  /**
   * Swap the last two values on the stack.
   */
  swap() {
    if (this.ary.length < 2) {
      return;
    }

    const value2 = this.ary.pop();
    const value1 = this.ary.pop();

    this.ary.push(value2);
    this.ary.push(value1);
  }

  /**
   * Add the given value to the stack unless it is an operator in which case
   * the appropriate action is taken.
   * @param  {String} value Value to push onto stack.
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
  }

  /**
   * Empty the stack array.
   */
  empty() {
    this.ary = [];
  }

  /**
   * Get the maximum prefix size needed to list the stack aligned on comma.
   * @return {Integer}  Prefix size.
   */
  getMaxPrefixSize() {
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
   * Render the stack array as a list of text lines separeted with a line
   * delimiter. This is to be used as the value of a textarea element.
   * @return {String} Stack as text string.
   */
  render() {
    const rows = [];
    const length = this.ary.length;
    const maxIndexSize = length.toString().length;
    const maxPrefixSize = this.getMaxPrefixSize();

    for (let i = 0; i < length; i += 1) {
      const index = length - i;
      const value = this.ary[i];
      const parts = value.toString().split('.');
      const valueSize = parts[0].length;
      const indexSize = index.toString().length;
      const indexPadding = getPadding((maxIndexSize - indexSize) + 1);
      const valuePadding = getPadding((maxPrefixSize - valueSize) + 1);

      rows.push(`${indexPadding}${index}: ${valuePadding}${value}`);
    }

    return (rows.join('\r\n'));
  }
}

export default Stack;
