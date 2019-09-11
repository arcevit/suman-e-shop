import React, { useContext } from 'react';
import '../../App.css';
import { ProductContext } from '../../Context';
import Product from '../Product';

export default function Products() {
  const context = useContext(ProductContext);
  const { products } = context;
  return (
    <div className="container">
      <h3 className="my-4">PRODUCT OVERVIEW</h3>

      <div className="row">
        {products.map(product => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
