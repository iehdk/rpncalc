const os = require('os');
const path = require('path');
const fs = require('fs');

/**
 * Max number of elements on the history array.
 * @type {Number}
 */
const MAX_LENGTH = 50;

/**
 * Method that returns the path to the history file.
 * @return {String} Full path to the history file.
 */
function historyFilePath() {
  const homedir = os.homedir();
  return path.join(homedir, '.rpncalc_history.json');
}

/**
 * Class for loading and saving history and supporting undo.
 * @type {Class}
 */
class History {
  /**
   * Constructor for History.
   * @param {Array} history History array.
   */
  constructor(history) {
    /**
     * Array for storing a list of stacks each representing a historic state.
     * @type {Array}
     */
    this.ary = history || [];
  }

  /**
   * Return last element on the history array. Return null if no elements.
   * @return {Object} History array element.
   */
  last() {
    if (this.ary.length === 0) {
      return null;
    }

    return this.ary[this.ary.length - 1];
  }

  /**
   * Pop and return the last element from the history array. Return undef if no
   * elements.
   * @return {Object} History array element.
   */
  pop() {
    if (this.ary.length === 0) {
      return null;
    }

    return this.ary.pop();
  }

  /**
   * Push a given element onto the history array.
   * @param  {Stack} elem Stack element.
   * @return {this}
   */
  push(elem) {
    this.ary.push(elem);

    if (this.ary.length > MAX_LENGTH) {
      this.ary.shift();
    }

    return this;
  }

  /**
   * Load the history from the history file.
   * @return {this}
   */
  load() {
    const file = historyFilePath();

    if (!fs.existsSync(file)) {
      return null;
    }

    const data = fs.readFileSync(file, 'utf8');
    const json = JSON.parse(data);

    this.ary = json;

    return this;
  }

  /**
   * Save the history in JSON format to the history file.
   * @return {this}
   */
  save() {
    if (this.ary.length === 0) {
      return null;
    }

    const json = JSON.stringify(this.ary, null, 2);

    fs.writeFile(historyFilePath(), json, (err) => {
      if (err) {
        console.log(err);
      }
    });

    return this;
  }
}

export default History;
