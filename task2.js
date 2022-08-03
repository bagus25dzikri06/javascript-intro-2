const isString = (currentValue) => typeof currentValue === 'string' === true
const name = [
  'Abigail', 'Alexandra', 'Alison', 'Amanda', 
  'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn',
  'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 
  'Olivia', 'Penelope'
]

const searchName = (nameSearchQuery, nameTotal, sliceArr) => {
  try {
    if (typeof nameSearchQuery === 'string' === false) throw 'Input query cari nama harus berupa string'
    if (typeof nameTotal === 'number' === false) throw 'Input total nama yang dicari harus berupa angka'
    if (nameTotal > name.length) throw 'Maaf, total nama yang dicari melebihi jumlah data nama'

    let nameSearchResult = []
    for (let i = 0; i < name.length; i++) {
      if (name[i].toLowerCase().includes(nameSearchQuery) === true) {
        nameSearchResult.push(name[i])
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

console.log(searchName('an', 3, sliceArr))