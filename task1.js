const firstArr = [1, 2, 3], secondArr = [4, 5, 6]
//concat() berfungsi untuk menggabungkan kedua array, sama dengan spread operator (...)
const concatArr = firstArr.concat(secondArr)
//console.log(concatArr)
const message = 'Sam'
const final = message.concat(' is a',' hopelessly romantic.')
//console.log(final)

const myStr = 'Saya belajar Javascript'
//endsWith() berfungsi untuk mengetahui kata terakhir yang terkandung dalam suatu string
const x = myStr.endsWith('Javascript')
const y = myStr.endsWith('Java')
//console.log(x)
//console.log(y) 

const colours = ['red', 'yellow', 'blue', 'black', 'green', 'white']
//keys() berfungsi untuk menunjukkan semua indeks dari semua elemen yang terdapat dalam suatu array
const coloursKey = colours.keys()
//console.log(...coloursKey)
//values() berfungsi untuk menunjukkan semua indeks dari semua elemen yang terdapat dalam suatu array
const coloursValues = colours.values()
//console.log(...coloursValues)
/* indexOf() berfungsi untuk: */
// 1. Mencari suatu elemen dalam sebuah array
const coloursIndex = colours.indexOf('blue')
//console.log(coloursIndex)
const coloursIndex2 = colours.indexOf('pink')
//console.log(coloursIndex2)
// 2. Mencari suatu elemen dalam sebuah array dimulai dari indeks elemen lain 
const coloursIndex1 = colours.indexOf('green', 2)
//console.log(coloursIndex1)

const arr = [5, 22, 19, 25, 34]
//findIndex() berfungsi untuk mencari indeks pertama suatu array yang sesuai dengan suatu fungsi bersyarat
const indexResult = arr.findIndex(x => x < 10)
//console.log(indexResult)
const indexResult1 = arr.findIndex(x => x % 3 === 0)
//console.log(indexResult1)

const numbers = [1, 12, 4, 36, 19, 6, 22]
//filter() berfungsi untuk mencari semua elemen dalam suatu array yang hanya memenuhi suatu kondisi
const filteredNumbers = numbers.filter(number => number % 4 === 0)
//console.log(filteredNumbers)

const str = 'Wilujeng Sumping '
//repeat() berfungsi untuk mencetak suatu string selama beberapa kali
const repeatStr = str.repeat(5)
//console.log(repeatStr)
//charAt() berfungsi untuk mencetak suatu huruf dalam satu indeks dalam sebuah string 
const charStr = str.charAt(4)
//console.log(charStr)
//charCodeAt() berfungsi untuk mencetak suatu nilai unicode dalam satu huruf dalam sebuah string 
const charCodeStr = str.charCodeAt(8)
console.log(charCodeStr)