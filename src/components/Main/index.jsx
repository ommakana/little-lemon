import React from 'react';
import PromotionalOfferImg from '../../assets/Asset 14@4x.png';
import MenuImg from '../../assets/Asset 16@4x.png';

import './style.css';

const tiles = [
  {
    title: 'Our new menu',
    imgUrl: MenuImg,
    content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit blanditiis recusandae adipisci
  eum
  id
  aliquid consequuntur! Itaque sapiente, vitae, debitis a voluptatibus ducimus accusantium
  recusandae
  sed
  animi perferendis aperiam ab?`,
    footerText: 'See our menu'
  },
  {
    title: 'Book a table',
    imgUrl: MenuImg,
    content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit blanditiis recusandae adipisci
  eum
  id
  aliquid consequuntur! Itaque sapiente, vitae, debitis a voluptatibus ducimus accusantium
  recusandae
  sed
  animi perferendis aperiam ab?`,
    footerText: 'Book your table now',
    footerUrl: '/booking'
  },
  {
    title: 'Opening hours',
    imgUrl: MenuImg,
    content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit blanditiis recusandae adipisci
  eum
  id
  aliquid consequuntur! Itaque sapiente, vitae, debitis a voluptatibus ducimus accusantium
  recusandae
  sed
  animi perferendis aperiam ab?`,
    footerText: ''
  }
]
export default function Main() {

  return (
    <>
      <div className="promotional-offer">
        <img src={PromotionalOfferImg} alt="Promotions" />
        <div className="text-overflow">
          <h2>30% off this weekend</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam nostrum rerum quisquam
            harum
            aliquid, impedit nesciunt? Quidem, maiores inventore. Sint, quis cumque impedit totam ea
            asperiores
            odit
            alias ullam?
          </p>
        </div>
      </div>
      <div className="tile-container">
      {tiles.map(tile => {
        return <div className="tile">
          <h3>{tile.title}</h3>
          <div className="tile-img-container">
            <img src={tile.imgUrl} alt={tile.title} />
          </div>
          <p>
            {tile.content}
          </p>
          {tile.footerText && <a href={tile.footerUrl}>{tile.footerText}</a>}
        </div>
      })}
      </div>
    </>
  )
}
