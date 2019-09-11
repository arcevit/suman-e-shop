import React, { useContext } from 'react';
import CartItem from './CartItem';
import { ProductContext } from '../../Context';

export default function CartList() {
  const context = useContext(ProductContext);
  const { cart } = context;
  return (
    <div className="container-fluid">
      {cart.map(item => (
        <CartItem key={item.id} item={item} value={context} />
      ))}
    </div>
  );
}
