const fsPromise = require('fs/promises')
const fs = require('fs')
const path = require('path')
const download = require('download')
const data = require('./compiled.json')

const IMAGEDIR = path.resolve(__dirname, '../public')

const check = async (filePath) => {

  try{
    await fsPromise.stat(filePath)
    return true
  }catch(e){
    return false
  }

}


const wait = n => new Promise(r => setTimeout(r,n))
const downloadFile = async (url, filePath) => {

  if((await check(filePath))) {
    console.log(url, 'Already downloaded')
  }else{
    console.log('downloading', url)
    const buff = await download(url)
    await fsPromise.writeFile(filePath, buff)
    console.log('saved to', filePath)
  }

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
      url: v.imageUrl,
      filePath: v.originPath ? path.resolve(IMAGEDIR,v.originPath.replace(/^\//,'')) : null
    })).filter(v => v.url)

  await Promise.all(images.map(v => {

    return downloadFile(
      v.url,
      v.filePath
    ).catch(e => console.log(
      'ERROR', v, e
    ))

  }))

}

start()
