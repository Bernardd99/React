let playerName = "Budi";
console.log(playerName)
playerName = "Rudi";
console.log(playerName)


let first = "Modern"
let second = "Javascript"
console.log(`${first} ${second}`)

let numArray = [1, 2, 3, 4, 5]
let strArray = ["a", "b", "c"]
let boolArray = [true, false, true]

console.log(numArray)
numArray.push(9)
console.log(numArray)

numArray.shift()
console.log(numArray)
numArray.unshift(1)
console.log(numArray)

const month = ['jan', 'march', 'april', 'june']
month.splice(1, 0, 'feb')
console.log(month)
month.splice(4, 1, 'may')
console.log(month)

let arr = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
]
console.log(arr)

arr[0].shift()
console.log(arr)

arr[1].unshift(9, 5)
console.log(arr)

let counter = {
    val: 0,
    increment: function () {
        this.val += 1
    }
}


const sum = (a, b) => a + b

console.log(sum(9, 9))

const user = {};
user.name = 'Adi Nugroho';
user.handle = '@adinugroho';
user.location = 'Jakarta, Indonesia';

const { name, handle, location } = user;
console.log(user)
console.log(name, handle, location)