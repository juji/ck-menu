import React, { useMemo, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { capitalCase } from 'case-anything'
import { PhotoSwipe } from 'react-photoswipe';


function Price({ price }){

  return price.type === 'range' ? price.string :
    price.type === 'multiple' ? <>
      <div className="price-multiple-0">
        <div className="price-multiple-icon">
          <div></div><div className="filled"></div><div className="filled"></div>
        </div>
        <span>{price.formatted[0]}</span>
      </div>
      <div className="price-multiple-1">
        <div className="price-multiple-icon">
          <div className="filled"></div><div className="filled"></div><div className="filled"></div>
        </div>
        {price.formatted[1]}
      </div>
    </> : price.formatted
}

function MenuTitle({ item }){

  const name = useMemo(() => {
    return item.name
  },[ item ])

  return <h4 className="menu-title">
    {name}
  </h4>

}

function MenuAdditional({ item }){

  const [ name, price ] = useMemo(() => {
    return [
      item.name,
      item.price
    ]
  },[ item ])

  return <div className="menu-additional">
    <span>{name}</span>
    { price ? <div className="item-price"><Price price={price} /></div> : null }
  </div>

}

function MenuItem({ item }){

  const [ openZoom, setOpenZoom ] = useState( false )
  const [ imageProps, setImageProps ] = useState()
  const zoomOpen = () => item.imageUrl && setOpenZoom(true)
  const zoomClose = () => setOpenZoom(false)

  const [
    thumb, big, price, name, description, type
  ] = useMemo(() => {
    return [
      item.thumbPath || '/ChefsKingdom-placeholder.jpeg',
      item.bigPath || '/ChefsKingdom-placeholder.jpeg',
      item.price,
      capitalCase(item.name),
      item.description,
      item.type,
    ]
  },[ item ])

  const afterLoad = (a,b,c,d) => {
    if(!thumb) return;

    // load image width and height
    const img = new Image()
    img.onload = () => {
      setImageProps({
        src: big,
        title: `${name}${price ? ` | ${price.string}` : ''}`,
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
            alt={name}
            effect="opacity"
          />

        </div>
      </div>
      <div className="item-info">
        <p className="item-name">{name}</p>
        { description ? <p className="item-desc">{description}</p> : null}
        { price ? <div className={`item-price ${price.type}`}><Price price={price} /></div> : null }
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
    { menu.map((item,idx) => {

      // console.log(item)
      return item.type === 'title' ?
        <MenuTitle
          key={`${restoName}-${name}-${idx}`}
          item={item} /> : item.type === 'additional' ?
        <MenuAdditional
          key={`${restoName}-${name}-${idx}`}
          item={item} /> :
        <MenuItem
          key={`${restoName}-${name}-${idx}`}
          item={item}/>
    })}
  </div>

}

export default function Resto({ data }){

  const cats = useMemo(() => {
    return data.categories
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
