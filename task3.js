const isNumber = (currentValue) => typeof currentValue === 'number' === true

const seleksiAngka = (nilaiAwal, nilaiAkhir, dataArray, arrSortASC) => {
  try {
    if (typeof nilaiAwal === 'number' === false) throw 'Input nilaiAwal harus berupa angka'
    if (typeof nilaiAkhir === 'number' === false) throw 'Input nilaiAkhir harus berupa angka'
    if (typeof dataArray === 'object' === false) throw 'Input dataArray harus berupa array'
    if (dataArray.every(isNumber) === false) throw 'Input data tidak valid'
    if (nilaiAwal > nilaiAkhir) throw 'Nilai akhir harus lebih dari nilai awal'
    if (dataArray.length < 5) throw 'Jumlah angka dalam dataArray harus lebih dari 5'

    let newDataArray = []
    for (let i = 0; i < dataArray.length; i++) {
      if (dataArray[i] >= nilaiAwal && dataArray[i] <= nilaiAkhir) {
        newDataArray.push(dataArray[i])
      }
    }

    if (newDataArray.length === 0) throw 'Nilai tidak ditemukan'
    return arrSortASC(newDataArray)
  } catch (err) {
    return err
  }
}

const arrSortASC = (arr) => {
  return arr.sort((a, b) => {
    return a - b
  })
}

console.log(seleksiAngka(5, 20, [2, 25, 4, 14, 17, 30, 8], arrSortASC))
console.log(seleksiAngka(15, 3, [2, 25, 4, 14, 17, 30, 8], arrSortASC))
console.log(seleksiAngka(5, 17, [2, 25, 4], arrSortASC))
console.log(seleksiAngka(5, 17, [2, 25, 4, 1, 30, 18], arrSortASC))
console.log(seleksiAngka('10', 50, [6, 17, 2, 88, 64, 43, 25], arrSortASC))