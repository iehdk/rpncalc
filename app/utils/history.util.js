/**
 * Max number of elements on the history array.
 * @type {Integer}
 */
const MAX_LENGTH = 50

/**
 * Class for loading and saving history and supporting undo.
 * @type {Class}
 */
class History {
  /**
   * Constructor for History.
   * @param  {Array} history History array.
   */
  constructor (history) {
    this.ary = history || []
  }

  /**
   * Method that returns the path to the history file.
   * @return {String} Full path to the history file.
   */
  historyFilePath () {
    const os = require('os')
    const path = require('path')
    const homedir = os.homedir()
    return path.join(homedir, '.rpncalc_history.json')
  }

  /**
   * Return last element on the history array. Return undef if no elements.
   * @return {Object} History array element.
   */
  last () {
    if (this.ary.length === 0) {
      return
    }

    return this.ary[this.ary.length - 1]
  }

  /**
   * Pop and return the last element from the history array. Return undef if no
   * elements.
   * @return {Object} History array element.
   */
  pop () {
    if (this.ary.length === 0) {
      return
    }

    return this.ary.pop()
  }

  /**
   * Push a given element onto the history array.
   * @param  {Stack} elem Stack element.
   * @return {this}
   */
  push (elem) {
    this.ary.push(elem)

    if (this.ary.length > MAX_LENGTH) {
      this.ary.shift()
    }

    return this
  }

  /**
   * Load the history from the history file.
   * @return {this}
   */
  load () {
    const fs = require('fs')
    const file = this.historyFilePath()

    if (!fs.existsSync(file)) {
      return
    }

    const data = fs.readFileSync(file, 'utf8')
    const json = JSON.parse(data)

    this.ary = json

    return this
  }

  /**
   * Save the history in JSON format to the history file.
   * @return {this}
   */
  save () {
    if (this.ary.length === 0) {
      return
    }

    const fs = require('fs')
    const json = JSON.stringify(this.ary, null, 2)

    fs.writeFile(this.historyFilePath(), json, function (err) {
      if (err) {
        console.log(err)
      }
    })

    return this
  }
}

export default History
