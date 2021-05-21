// import Head from 'next/head'
// import Image from 'next/image'

import Resto from 'components/Resto'
import data from 'data/compiled.json'

export default function Home() {
  return (
    <div id="container">
      <header>
        <img alt="Chefs Kingdom" layout="fill" src="/ChefsKingdom-cover.jpeg" />
      </header>
      <div className="resto-select"></div>
      <main>
        {data.map(resto => <Resto key={resto.id} data={resto} />)}
      </main>
      <footer></footer>

    </div>
  )
}
