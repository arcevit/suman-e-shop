import React, { useContext } from 'react';
import { ProductContext } from '../../Context';
import { Link } from 'react-router-dom';

export default function Banner() {
  const context = useContext(ProductContext);
  const { banner } = context;
  return (
    <div className="row justify-content-between">
      {banner.map(item => {
        return (
          <div className="col-lg-4 mb-3 text-uppercase" key={item.id}>
            <div className="hovereffect-1">
              <img className="img-responsive" src={item.img} alt="" />
              <div className="overlay-1">
                <h2>{item.title}</h2>
                <Link to="products">
                  <span className="info font-weight-bold">shop now</span>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
