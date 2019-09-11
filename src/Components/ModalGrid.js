import React, { useContext } from 'react';
import { ProductContext } from '../Context';
import { Link } from 'react-router-dom';
import Carousel from './Carausel';
import { Modal, Button } from 'react-bootstrap';

export default function ModalGrid() {
  const context = useContext(ProductContext);
  const { addToCart, modalOpen, closeModal, detailProduct } = context;
  const { id, img, info, price, title, inCart } = detailProduct;
  if (!modalOpen) {
    return null;
  } else {
    return (
      <div className="modal-container overflow-auto">
        <Modal.Dialog
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <button
              type="button"
              bg="dark"
              className="close"
              aria-label="Close"
              onClick={() => {
                closeModal(id);
              }}
            >
              <i className="fas fa-times"></i>
            </button>
          </Modal.Header>

          <Modal.Body>
            <div className="row">
              <div className="mx-auto col-lg-6">
                <Carousel img={img} />
              </div>
              <div className="mx-auto col-lg-6 text-capitalize">
                <h4>model : {title}</h4>

                <h5 className="text-blue">
                  <strong>
                    price : <span>$</span>
                    {price}
                  </strong>
                </h5>
                <p className="text-capitalize font-weight-bold mb-0">
                  some info about product
                </p>
                <p className="text-muted">{info}</p>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <button
              className="btn btn-outline-success"
              disabled={inCart ? true : false}
              onClick={() => addToCart(id)}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  in cart
                </p>
              ) : (
                <p className="text-capitalize mb-0" disabled>
                  ad to cart
                </p>
              )}
            </button>
            <Link to="/cart">
              <span
                className="btn btn-outline-warning ml-3"
                onClick={() => closeModal(id)}
              >
                Go To Cart
              </span>
            </Link>
            <Button variant="secondary" onClick={() => closeModal(id)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}
