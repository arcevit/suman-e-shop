import React, { useContext } from 'react';
import { ProductContext } from '../Context';
import defaultImg from '../defaultImg.png';

export default function Product(props) {
  const context = useContext(ProductContext);

  const { id, title, img, price } = props.product;
  const { handleDetail, openModal } = context;

  return (
    <div className="col-md-6 col-lg-3 my-2">
      <div className="card border-0">
        <div className="hovereffect-2">
          <img
            onError={e => {
              e.target.onerror = null;
              e.target.src = defaultImg;
            }}
            className="card-img-top img-responsive"
            src={img[0]}
            alt=""
          />

          <div className="overlay">
            <span
              className="info"
              onClick={() => {
                openModal(id);
                handleDetail(id);
              }}
            >
              quick wiev
            </span>
          </div>
        </div>
        <a href="#">
          <p
            className="align-self-center text-dark mb-2"
            onClick={() => {
              openModal(id);
              handleDetail(id);
            }}
          >
            {title}
          </p>
        </a>

        <h5 className="text-primary mb-4">
          <span className="mr-1">$</span>
          {price}
        </h5>
      </div>
    </div>
  );
}
