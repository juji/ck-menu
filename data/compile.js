const path = require('path')
const { parse } = require('fast-csv');
const fs = require('fs')
const download = require('download');
const slugify = require('url-slug')
const imageDir = path.resolve(__dirname,'../public/images')

const csvOptions = {
  objectMode: true,
  delimiter: '\t',
  headers: false,
}

const data = [

  {
    name: "Torishimai",
    file: 'torishimai',
    icon: '/icons/torishimai.svg'
  },

  {
    name: "K-Ottori",
    file: 'kottori',
    icon: '/icons/k-ottori.svg'
  },

  {
    name: "Bumbu Bambu",
    file: 'bumbubambu',
    icon: '/icons/bumbubambu.svg'
  }

]


const read = async ({ name, file, icon }) => {

  const d = {
    id: file,
    name, icon,
    menu: {}
  }

  await new Promise((r,j) => {

    console.log(`Reading ${name}`)
    fs.createReadStream(path.resolve(__dirname,file))
      .pipe(parse( csvOptions ))
      .on('data', data => {

        console.log(data)

        const category = (data[0]||'undefined').trim()
        const food = (data[1]||'').trim()
        const price = (data[2]||'0').trim().replace(/[^0-9]/g,'') * 1
        const originalImage = (data[3]||'').trim()
        const imageUrl = (data[3]||'').trim().replace(/\/file\/d\//,'/uc?id=').replace(/\/view\?.+/,'')

        if(!d.menu[category])
          d.menu[category] = []

        const originPath = originalImage ? '/images/ori/' + slugify(
          `${name}-${category}-${food}`
        ) + '.jpg' : null

        const thumbPath = originalImage ? '/images/thumb/' + slugify(
          `${name}-${category}-${food}`
        ) + '.webp' : null

        const bigPath = originalImage ? '/images/big/' + slugify(
          `${name}-${category}-${food}`
        ) + '.webp' : null


        d.menu[category].push({
          category,
          food,
          price,
          originalImage,
          imageUrl,
          originPath,
          thumbPath,
          bigPath
        })

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
