/**
 * Returns the sum of the given numbers.
 * @param {number} a the first number
 * @param {number} b the second number
 * @returns {number} the sum of a and b
 */
export const sum = (a, b) => {
  // TODO: implement here

}

/**
 * Returns the array after applying the given function to each element in
 * the given array.
 * @param {any[]} arr the array to be transformed
 * @param {(item: any, index: number) => any} callback the function
 *    used for transforming elements in the array
 * @returns {any[]} an array whose elements are the results of applying the
 *    callback function to the elements in the original array
 */
export const map = (arr, callback) => {
  // TODO: implement here

}

/**
 * Returns the array containing elements that makes the given predicate true.
 * @param {any[]} arr the array to be filtered
 * @param {(item: any, index: number) => boolean} callback the predicate
 *    used for filtering elements in the array
 * @returns {any[]} an array whose elements are from the original array, that
 *    makes the callback predicate true
 */
export const filter = (arr, callback) => {
  // TODO: implement here

}

/**
 * Returns the result of aggregating elements in the array with the given
 * reducer function.
 * @param {any[]} arr the array to be reduced
 * @param {(prev: any, item: any, index: number) => any} callback the function
 *    used for aggregating elements.  The first argument is the current value
 *    of the result, before processing the current item; the second argument is
 *    the current item to be processed; the third argument is the index of the
 *    current item.  The result of this callback function is the updated result
 *    after processing the current item.
 * @param {any} initialValue the initial value of the result, before processing
 *    the first item
 * @returns {any} the final value of the result after processing every element
 *    in the array
 */
export const reduce = (arr, callback, initialValue) => {
  // TODO: implement here

}
