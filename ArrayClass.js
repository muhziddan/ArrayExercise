class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) { // O(1)
        return this.data[index]
    }

    push(item) { // O(1)
        this.data[this.length] = item
        this.length++
        return this.length
    }

    append(index, item) { // O(n)
        this.shiftItemsAddition(index)
        this.data[index] = item
        this.length++
        return this.length
    }

    pop() { // 0(1)
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }

    delete(index) { // O(n)
        const item = this.data[index]
        this.shiftItemsDeletion(index)
        // delete this.data[this.length - 1]
        // this.length--
        this.pop()
        // console.log(`called from delete ${this.length}`)
        return item
    }

    shiftItemsDeletion(index) { // O(n)
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
    }

    shiftItemsAddition(index) { // O(n)
        for (let i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1]
        }
    }
}

const newArray = new MyArray()

newArray.push("something")
newArray.push("second")
newArray.push("third")
newArray.delete(1)
newArray.push("apple")
newArray.append(1, "pineapple")
newArray.push("deleted")
newArray.pop()
newArray.push(1)
newArray.push(1.2)
newArray.push(true)

console.log(newArray)
console.log(newArray.get(0))
console.log(newArray.pop())

// let variable = ["Hi"]
// console.log(typeof newArray.data)
// console.log(typeof variable)