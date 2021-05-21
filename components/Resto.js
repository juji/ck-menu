import React, { useMemo, useState } from 'react'
import numeral  from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { capitalCase } from 'case-anything'
import {PhotoSwipe} from 'react-photoswipe';


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



function MenuItem({ item }){

  const [ openZoom, setOpenZoom ] = useState( false )
  const [ imageProps, setImageProps ] = useState()
  const zoomOpen = () => item.imageUrl && setOpenZoom(true)
  const zoomClose = () => setOpenZoom(false)

  const [ thumb, big, price, food ] = useMemo(() => {
    return [
      item.thumbPath || '/ChefsKingdom-placeholder.jpeg',
      item.bigPath || '/ChefsKingdom-placeholder.jpeg',
      numeral(item.price||0).format('$ 0,0'),
      capitalCase(item.food)
    ]
  },[ item ])

  const afterLoad = (a,b,c,d) => {
    if(!thumb) return;

    // load image width and height
    const img = new Image()
    img.onload = () => {
      setImageProps({
        src: big,
        title: `${food} | ${price}`,
        w: img.width,
        h: img.height
      })
    }
    img.src = big
  }

  return <>
    <div className="menu-item" onClick={zoomOpen}>
      <div className="item-image">
        <div>

          <LazyLoadImage
            afterLoad={afterLoad}
            src={thumb}
            alt={food}
            effect="opacity"
          />

        </div>
      </div>
      <div className="item-desc">
        <p className="item-name">{food}</p>
        <p className="item-price">{price}</p>
      </div>
    </div>
    { imageProps ? <PhotoSwipe
      isOpen={openZoom}
      items={[ imageProps ]}
      options={{
        fullscreenEl: false,
        shareEl: false
      }}
      onClose={zoomClose}
    /> : null }
  </>

}

function MenuCategory({ name, menu, restoName }){

  return <div className="category">
    <h3>{capitalCase(name)}</h3>
    { menu.map((item,idx) => <MenuItem
      key={`${restoName}-${name}-${idx}`}
      item={item}
    />) }
  </div>

}

export default function Resto({ data }){

  const cats = useMemo(() => {
    return Object.keys(data.menu)
  }, [data])

  // console.log(data)

  return <div id={`r_${data.id}`} className="resto">
    <h2>
      <img alt={data.name} src={data.icon} />
      <span>{data.name}</span>
    </h2>

    { cats.map(category => <MenuCategory
      key={`${data.name}-${category}`}
      restoName={data.name}
      name={category}
      menu={data.menu[category]}  />)
    }

  </div>

}
