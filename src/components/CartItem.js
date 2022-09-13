import React from 'react';
import { useDispatch} from 'react-redux';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {
  increase,
  decrease,
  removeCart,
} from '../features/cart/cartSlice';
import styled from 'styled-components' 

const CartItem = ({ id, img, title, price,amount }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="price">${price}</h4>
        <button
          type='button'
          className="remove-btn"
          onClick={() => {
            dispatch(removeCart(id))
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          type='button'
          className="btn amount-btn"
          onClick={() => {
            dispatch(increase({id}))
          }}
        >
          <FaChevronUp/>
        </button>
        <p className="amount">{amount}</p>
        <button
          type='button'
          className="btn amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeCart(id));
              console.log(id)
              return;
            }
            dispatch(decrease({id}))
          }}
        >
          <FaChevronDown/>
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
display: grid;
grid-template-columns: auto 1fr auto;
align-items: center;
grid-column-gap: 1.5rem;
margin-bottom: 2rem;
img {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
}
h4 {
  margin-bottom: 0;
  font-weight: 500;
  letter-spacing: 2px;
}
.price {
  color: var(--clr-gey-5);
}
.remove-btn {
  background: transparent;
  border: transparent;
  color: var(--clr-dark-red);
  transition: var(--transition);
  font-size: .75rem;
  :hover {
    color: var(--clr-light-red);
  }
}
.amount-btn {
  background: transparent;
  border: transparent;
  font-size: .75rem;
  svg{
    color: var(--clr-secondary-3);
  }
  transition: var(--transition);
  :hover {
    color: var(--clr-secondary-5);
  }
}
.amount {
  margin-bottom: 0;
  text-align: center;
  font-size: 1.25rem;
  line-height: 1;
}
`

export default CartItem