const path = require('path')
const { parse } = require('fast-csv');
const fs = require('fs')
const download = require('download');
const slugify = require('url-slug')
const imageDir = path.resolve(__dirname,'../public/images')

const Readline = require('./Readline')

const csvOptions = {
  objectMode: true,
  delimiter: '\t',
  headers: false,
}

const data = [

  {
    name: "Bumbu Bambu",
    file: 'bumbubambu',
    icon: '/icons/bumbubambu.svg'
  },

  {
    name: "K-Ottori",
    file: 'kottori',
    icon: '/icons/k-ottori.svg'
  },

  {
    name: "Torishimai",
    file: 'torishimai',
    icon: '/icons/torishimai.svg'
  },

  {
    name: "Marvelous",
    file: 'marvelous',
    icon: '/icons/marvelous.svg'
  },

  {
    name: "Om Nom Nom",
    file: 'omnomnom',
    icon: '/icons/omnomnom.svg'
  },

  {
    name: "Al-Meeraj",
    file: 'almeeraj',
    icon: '/icons/almeeray.svg'
  },

  {
    name: "Ta Cie",
    file: 'tacie',
    icon: '/icons/tacie.svg'
  },

  {
    name: "Under 3 Cafe",
    file: 'under3',
    icon: '/icons/underthe3.svg'
  },


]


const read = async ({ name, file, icon }) => {

  const d = {
    id: file,
    name, icon,
    menu: {},
    categories: []
  }

  const reader = new Readline(d)

  await new Promise((r,j) => {

    console.log(`Reading ${name}`)
    fs.createReadStream(path.resolve(__dirname,file+'.tsv'))
      .pipe(parse( csvOptions ))
      .on('data', dat => {

        // console.log(dat)
        reader.parse(dat)

      })
      .on('error',j)
      .on('end', r)

  })

  return d




}


const start = async () => {

  const d = await Promise.all(data.map(d => read(d)))
  fs.writeFileSync(
    path.resolve(__dirname,'compiled.json'),
    JSON.stringify(d,null,2)
  )

}

start()
