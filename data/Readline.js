
const path = require('path')
const imageDir = path.resolve(__dirname,'../public/images')
const slugify = require('url-slug')
const numeral = require('numeral')

if (numeral.locales['id'] === undefined) {
  numeral.register('locale', 'id', {
      delimiters: {
          thousands: '.',
          decimal: ','
      },
      currency: {
          symbol: 'IDR'
      }
  });
}


numeral.locale('id')

const parsePrice = (prop, price) => {

  if(prop === 'range'){
    const p = price.split('-').map(v => v.trim().replace(/[^0-9]/g,'') * 1)
    return {
      type: prop,
      value: p,
      formatted: p.map(v => numeral(v||0).format('$ 0,0')),
      string: p.map(v => numeral(v||0).format('$ 0,0')).join(' - ')
    }
  }

  else if(prop === 'multiple'){
    const p = price.split('/').map(v => v.trim().replace(/[^0-9]/g,'') * 1)
    return {
      type: prop,
      value: p,
      formatted: p.map(v => numeral(v||0).format('$ 0,0')),
      string: p.map(v => numeral(v||0).format('$ 0,0')).join(' / ')
    }
  }

  else {
    const p = price.trim().replace(/[^0-9]/g,'') * 1
    return {
      value: p,
      formatted: numeral(p||0).format('$ 0,0'),
      string: numeral(p||0).format('$ 0,0')
    }
  }

}

class Readline {

  constructor( obj ){
    this.obj = obj
    this.currentCat = null
    this.isAdditional= null
  }

  parse( data ){

    const properties = (data[0]||'').trim()
    const name = (data[1]||'').trim()
    const description = (data[2]||'').trim()
    const price = (data[3]||'').trim()
    const originalImage = (data[4]||'').trim() || null

    // this is empty line
    if(!properties && !name && !price)
      return true;


    // this is category
    if(!price && properties !== 'additional' && properties !== 'noprice'){
      const cat = properties === 'nocat' ? 'nocat' : name
      this.obj.categories.push( cat )
      this.currentCat = cat
      this.isAdditional = false

      if(!this.obj.menu[cat]) this.obj.menu[cat] = []

      return true;
    }

    // this is additional
    if(!price && properties === 'additional'){
      this.isAdditional = true
      this.obj.menu[this.currentCat].push({
        type: 'title',
        resto: this.obj.name,
        category: this.currentCat,
        name,
      })
      return true;
    }

    // this is menu item

    const imageUrl = originalImage ? originalImage.replace(/\/file\/d\//,'/uc?id=').replace(/\/view\?.+/,'') : null

    const originPath = originalImage ? 'images/' + slugify(
      `${this.obj.name}-${this.currentCat}-${name}`
    ) + '.jpg' : null

    const thumbPath = originalImage ? '/images/thumb/' + slugify(
      `${this.obj.name}-${this.currentCat}-${name}`
    ) + '.webp' : null

    const bigPath = originalImage ? '/images/big/' + slugify(
      `${this.obj.name}-${this.currentCat}-${name}`
    ) + '.webp' : null

    if(this.isAdditional){
      this.obj.menu[this.currentCat].push({
        type: 'additional',
        resto: this.obj.name,
        category: this.currentCat,
        properties,
        name,
        description,
        price: properties === 'noprice' ? null : parsePrice(properties, price),
        originalImage,
        imageUrl,
        originPath,
        thumbPath,
        bigPath
      })
      return true
    }

    this.obj.menu[this.currentCat].push({
      type: 'item',
      resto: this.obj.name,
      category: this.currentCat,
      properties,
      name,
      description,
      price: properties === 'noprice' ? null : parsePrice(properties, price),
      originalImage,
      imageUrl,
      originPath,
      thumbPath,
      bigPath
    })

    return true;


  }

}

module.exports = Readline;
