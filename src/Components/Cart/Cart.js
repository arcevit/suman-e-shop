import React, { useContext } from 'react';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { ProductContext } from '../../Context';
import EmptyCart from './EmptyCart.js';

export default function Cart(props) {
  const context = useContext(ProductContext);

  const { cart } = context;

  if (cart.length > 0) {
    return (
      <section>
        <React.Fragment>
          <div className="row justify-content-center">
            <h3 className="my-4">Your Cart</h3>
          </div>

          <CartColumns />
          <CartList />
          <CartTotals history={props.history} />
        </React.Fragment>
      </section>
    );
  } else {
    return (
      <section>
        <EmptyCart />
      </section>
    );
  }
}
