function reverseString(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return "No Input"
    }

    const backwards = []
    const stringLength = str.length

    for (let i = stringLength; i > 0; i--) {
        backwards.push(str[i - 1])
        console.log("i= " + i + " isinya= " + str[i - 1])
    }

    console.log(backwards)
    console.log(backwards.join(''))
    console.log(`from toString ${backwards.toString()}`)
    // console.log(typeof backwards === 'object') // true
    return backwards.join('')// buat ilangin pembatasnya
}

function reverse2(str) {
    return str.split('').reverse().join('')// reverse() only in js
}

const reverse3 = str => str.split('').reverse().join('')

const reverse4 = str => [...str].reverse().join('')

// console.log(typeof reverse3 === 'function') // true
// console.log(typeof reverse4 === 'function') // true

console.log(reverseString("Laki"))
// reverseString(`Laki`)
console.log(reverse2("lolo"))
console.log(reverse3("akakakakkadjlanwl"))
console.log(reverse4("JBAEOJBOAWJ"))

// node ReverseExercise.js