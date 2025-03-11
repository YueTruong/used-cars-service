import React from 'react';
import card1 from '../../assets/card-1.jpg';
import card2 from '../../assets/card-2.jpg';
import card3 from '../../assets/card-3.jpg';

const cards = [
    {
        id: 1,
        image: card1,
        title: 'Toyota'
    },
    {
        id: 2,
        image: card2,
        title: 'Toyota'
    },
    {
        id: 3,
        image: card3,
        title: 'Toyota'
    },
]

const HeroSection = () => {
  return (
    <section className='section__container hero__container'>
        {
            cards.map((card) => (
                <div key={card.id} className='hero__card'>
                    <img src={card.image} alt="" />
                    <div className='hero__content'>
                        <p>{card.trend}</p>
                        <h4>{card.title}</h4>
                        <a href="#">Disvover More</a>
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default HeroSection;