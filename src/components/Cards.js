import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Epic destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className="cards__items">
            <CardItem 
              src='TNTT Photos/dtdp.jpg'
              text='Become a Doi Truong/Doi Pho'
              label='DTDP'
              path='/services'
            />
            <CardItem 
              src='TNTT Photos/cha-mass.jpg'
              text='Have fun at our Sa Mac Doan'
              label='Doan Camp'
              path='/services'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className="cards__items">
            <CardItem 
              src="TNTT Photos/hs-photo.jpg"
              text="Learn about our Doan"
              label='About'
              path='/about'
            />
            <CardItem 
              src='TNTT Photos/altar.jpg'
              text='Get any resource'
              label='Resources'
              path='/resources'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
