import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { closeModal } from '../features/modal/modalSlice'; 

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="modal">
        <h4>
          Remove all items from your shopping cart
        </h4>
        <div className="btn-container">
          <button
            type='button'
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart())
              dispatch(closeModal())
            }}
          >
            confirm
          </button>
          <button
            type='modal'
            className="btn clear-btn"
            onClick={() => {
              dispatch(closeModal())
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index:10;
background: rgba(0,0,0,0.7);
text-align: center;
display:flex;
justify-content: center;
.modal {
  background: var(--clr-white);
  width: 80vw;
  max-width: 400px;
  border-radius: var(--radius);
  padding: 2rem 1rem;
  text-align: center;
  position: absolute;
  margin-top: 20rem;
  h4 {
    margin-bottom: 0;
    line-height: 1.5;
  }
  .clear-btn,
.confirm-btn {
  background: transparent;
  padding: 0.5rem 1rem;
  color: var(--clr-dark-red);
  border: 1px solid var(--clr-dark-red);
  margin-top: 2.25rem;
  border-radius: var(--Radius);
:hover {
  background: var(--clr-red-light);
  color: var(--clr-red-dark);
  border-color: var(--clr-red-light);
}
}
.confirm-btn {
  border-color: var(--clr-primary);
  color: var(--clr-primary);
}
  .clear-btn,
  .confirm-btn {
  margin-top: 1rem;
}
.btn-container {
  display: flex;
  justify-content: space-around;
}
}

`;

export default Modal
