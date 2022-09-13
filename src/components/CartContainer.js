import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem';
import styled from 'styled-components';
import { openModal } from '../features/modal/modalSlice';
import { Refresh } from '../icons'
import {getCartItems } from '../features/cart/cartSlice';


const CartContainer = () => {
  const { amount, cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <Wrapper >
        <header>
        <h2>Your cart</h2>
          <h4 className="empty-cart">
            is currently empty
          </h4>
          <button 
            type='button'
            className='refresh btn'
            onClick={() => {
              dispatch(getCartItems())
            }}
          >
            <Refresh />
            refresh
          </button>
        </header>
      </Wrapper>
    )
  }
  
  return (
    <Wrapper>
      <header>
        <h2>Your Cart</h2>
      </header>
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item}/>
      })}
      <footer>
        <hr/>
      <div className="cart-total">
        <h4>
          total <span>${total.toFixed(2)}</span>
        </h4>
        </div>
        <button
          type='button'
          className="clear-btn btn"
          onClick={() => {
            dispatch(openModal())
          }}
        >
          clear
        </button>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
width:90vw;
max-width:var(--fixed-width);
margin: 0 auto;
align-items:center;
min-height: calc(100vh -120px);
padding: 2.5rem 0;
margin-top: 40px;
h2 {
  margin: 5rem 0;
  text-align: center;
}
.empty-cart {
  text-transform: lowercase;
  color: var(--clr-grey-5);
  margin-top: 1rem;
  text-align: center;
}
.refresh {
  background: transparent;
  border: transparent;
  margin-top: 2rem;
  align-items: center;
  transition: var(--transition);
  color: var(--clr-secondary-5);
  cursor: pointer;
  margin: 0 auto;
  svg {
    font-size: 1rem;
  }
  :hover {
    color: var(--clr-secondary-10);
  }
}
footer {
  margin-bottom: 2rem;
  hr{
    background: var(--clr-grey-5);
  border-color: transparent;
  border-width: 0.25px
  }
  .cart-total h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      background: var(--clr-secondary-10);
      display: block;
      padding: .2rem .4rem;
    }
  }
  .clear-btn {
    background: transparent;
    color: var(--clr-dark-red);
    border: 1px solid var(--clr-dark-red);
  background: transparent;
  padding: 0.5rem 1rem;
  margin-top: 2.25rem;
  border-radius: var(--Radius);
  :hover {
    background: var(--clr-light-red);
    color: var(--clr-dark-red);
    border-color: var(--clr-light-red);
  }
}
}
`;

export default CartContainer
