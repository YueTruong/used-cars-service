import React from 'react';
import category1 from '../../assets/category-1.jpg';
import category2 from '../../assets/category-2.jpg';
import category3 from '../../assets/category-3.jpg';
import category4 from '../../assets/category-4.jpg';
import {Link} from 'react-router-dom';

const Categories = () => {
    const categories = [
        {name: 'Xe đã qua sử dụng', path: 'usedcars', image: category1},
        {name: 'Dịch vụ', path: 'services', image: category2},
        {name: 'Sản phẩm', path: 'products', image: category3},
        {name: 'Hệ thống cửa hàng', path: 'stores', image: category4},
    ]
  return (
    <>
        <div className="product__grid">
            {
                categories.map((category) => (
                    <Link key={category.name} to={`/categories/${category.path}`} className='categories__card'>
                        <img src={category.image} alt={category.name} />
                        <h4>{category.name}</h4>
                    </Link>
                ))
            }
        </div>
    </>
  )
}

export default Categories;