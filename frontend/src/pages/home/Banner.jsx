import React from 'react';
import {Link} from 'react-router-dom';
import bannerImg from '../../assets/header.png';

const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className='header__content z-30'>
            <h4 className='uppercase'>UP TO 20% DISCOUNT on</h4>
            <h1>Best Selling Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, earum mollitia. Cupiditate vero non provident fuga quis dignissimos eos ipsum labore, commodi perferendis accusamus illo aliquid voluptas quam deserunt ut.</p>
            <button className='btn'><Link to="/shop">EXPLORE NOW</Link></button>
        </div>
        <div className='header__image'>
            <img src={bannerImg} alt="banner iamge" />
        </div>
    </div>
  )
}

export default Banner;