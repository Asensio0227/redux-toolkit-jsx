import React from 'react';
import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  
  return (
    <Wrapper>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className='amount-container'>
            <p className='amount'>{amount}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
padding:1.25rem 2rem;
background: var(--clr-secondary-3);
.nav-center {
  width:100%;
  max-width: var(--fixed-width);
  margin: 0 auto;;
  display: flex;
  justify-content:space-between;
  align-items: center;
  h2{
    color:var(--clr-white);
    letter-spacing:1px;
    margin-bottom:0;
  }
  .nav-container {
    display:block;
    position: relative;
    svg {
      width: 40px;
      color: var(--clr-white);
    }
    .amount-container {
      position: absolute;
      top: -.6rem;
      right: -.6rem;
      width: 1.75rem;
      height: 1.75rem;
      background: var(--clr-secondary-5);
      display: flex;
      align-items: center;
      border-radius: 50%;
      justify-content:center;
      .amount {
        color: var(--clr-white);
        margin-bottom: 1rem;
        font-size: 1.25rem;
      }
    }
  }
}

`

export default Navbar
