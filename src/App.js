import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { CartContainer } from './components';
import Modal from './components/Modal';
import {
  Navbar
} from './components';
import { calculateTotals,getCartItems } from './features/cart/cartSlice';
const App = () => {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const {isOpen}= useSelector((store) => store.modal)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
    // eslint-disable-next-line
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
    // eslint-disable-next-line
  },[])

  if (isLoading) {
    return (
      <div className="loading">
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal/>}
      <Navbar />
      <CartContainer/>
    </main>
  )
}

export default App