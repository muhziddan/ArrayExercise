function mergeArray(array1, array2) {

    // check
    if (!array1 || !array2) {
        return "Input requirement is not met"
    } else if (array1.length === 0 && array2.length != 0) {// O(1)
        return array2
    } else if (array2.length === 0 && array1.length != 0) {
        return array1
    } else if (array1.length === 0 && array2.length === 0) {
        return "Empty Input"
    }

    const result = []
    var j = 0
    var i = 0

    while (i <= array1.length - 1 || j <= array2.length - 1) { // O(n)
// kalo bisa push conditionnya dijadiin fungsi baru biar lebih readable
        if (array1[i] <= array2[j] || j > array2.length - 1) { //&& i < array1.length) {
            result.push(array1[i])
            i++
            console.log(`called top at i = ${i} j = ${j}`)
        } else if (array1[i] >= array2[j] || i > array1.length - 1) { //&& j < array2.length) {
            result.push(array2[j])
            j++
            console.log(`called bottom at i = ${i} j = ${j}`)
        }
    }

    return result
}

console.log(mergeArray([3, 7, 11, 15], [1, 2, 20, 31]))
console.log(mergeArray([3, 7, 100], [5, 7, 14, 20, 45]))
console.log(mergeArray([1, 2, 3], []))
console.log(mergeArray([], [1, 2, 3]))
console.log(mergeArray([], []))
console.log(mergeArray())
console.log(mergeArray([3, 5, 7]))

// node MergeArray.js