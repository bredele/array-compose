

/**
 * Compose two array together.
 *
 * @param {Array} arr
 * @param {Array} other
 * @return {String}
 * @api public
 */

module.exports = (arr, other = []) => {
  let result = ''
  arr.map((chunk, idx) => {
    result += chunk + (other.shift() || '')
  })
  return result + other.join('')
}
