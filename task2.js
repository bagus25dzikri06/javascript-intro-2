const isString = (currentValue) => typeof currentValue === 'string' === true

const searchName = (nameSearchQuery, nameTotal, nameData, sliceArr) => {
  try {
    if (typeof nameSearchQuery === 'string' === false) throw 'Input query cari nama harus berupa string'
    if (typeof nameTotal === 'number' === false) throw 'Input total nama yang dicari harus berupa angka'
    if (typeof nameData === 'object' === false) throw 'Input data nama harus berupa array'
    if (nameTotal > nameData.length) throw 'Maaf, total nama yang dicari melebihi jumlah data nama'
    if (nameData.every(isString) === false) throw 'Input setiap data nama harus berupa string'

    let nameSearchResult = []
    for (let i = 0; i < nameData.length; i++) {
      if (nameData[i].toLowerCase().includes(nameSearchQuery) === true) {
        nameSearchResult.push(nameData[i])
      }
    }

    if (nameSearchResult.length === 0) throw 'Data nama tidak ditemukan'
    return sliceArr(nameSearchResult, nameTotal)
  } catch (err) {
    return err
  }
}

const sliceArr = (arr, num) => {
  return arr.slice(0, num)
}

console.log(searchName('an', 3, [
  'Abigail', 'Alexandra', 'Alison', 'Amanda', 
  'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn',
  'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 
  'Olivia', 'Penelope'
], sliceArr))
console.log(searchName('wah', 3, [
  'Christian', 'Budi', 'Iman', 'Danang', 'Bima'
], sliceArr))
console.log(searchName('ji', 8, [
  'Deni', 'Aji', 'Hanafi', 'Sundari', 'Priyo'
], sliceArr))
console.log(searchName('sa', 10, 'Lukman, Ali, Dadang, Sarah, Sahat, Binsar', sliceArr))
console.log(searchName('ji', '9', [
  'Neni', 'Wawan', 'Henry', 'Danar', 'Kustian', 'Wahyu'
], sliceArr))
console.log(searchName(2, 2, [
  'Herry', 'Melly', 'William', 'Fauzi', 
  'Damar', 'Ikhsan', 'Ridwan'
], sliceArr))