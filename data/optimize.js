const sharp = require('sharp')
const path = require('path')
const data = require('./compiled.json')

const IMAGEDIR = path.resolve(__dirname, '../public')

const createThumb = async ( path, resultPath ) => {

  console.log('THUMB', path)
  return sharp(path)
    .resize(500, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(resultPath)


}

const createBig = async ( path, resultPath ) => {

  console.log('BIG', path.split('/').pop())

  return sharp(path)
    .resize(2000, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(resultPath)


}

const start = async () => {

  const images = data
    .map(v => v.menu)
    .map(v => Object.values(v))
    .reduce((a,b) => ([
      ...a,
      ...b,
    ]),[])
    .reduce((a,b) => ([
      ...a,
      ...b,
    ]),[])
    .map(v => ({
      originPath: v.originPath ? path.resolve(__dirname,v.originPath) : null,
      thumbPath: v.thumbPath ? path.resolve(IMAGEDIR,v.thumbPath.replace(/^\//,'')) : null,
      bigPath: v.bigPath ? path.resolve(IMAGEDIR,v.bigPath.replace(/^\//,'')) : null,
    })).filter(v => v.originPath)

  await Promise.all(images.map(async image => {
    await createThumb( image.originPath, image.thumbPath )
      .catch(e => console.log('THUMB ERROR', image, e))
    await createBig( image.originPath, image.bigPath )
      .catch(e => console.log('BIG ERROR', image, e))
  }))

  console.log('DONE')

}

start().catch(e => console.log(e))
