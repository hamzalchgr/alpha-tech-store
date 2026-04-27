import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from './components/CartItem'

const CartPage = () => {
  return (
    <div className="padding-x py-10 flex flex-col gap-10">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="font-extrabold md:text-xl uppercase">Your bag</h1>
        <p className="font-medium text-xs">Total is DH 300.00 MAD</p>
        </div>

        <Link className="nav-link py-2 capitalize" to="/store/all">continue shopping</Link>
      </div>

      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <ul className="flex flex-col gap-2">
          <li>
            <CartItem />
          </li>
        </ul>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>DH 300.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span>DH 30.00</span>
            </div>
            <div className="flex justify-between text-base font-semibold py-1 border-t border-secondary">
              <span>Total:</span>
              <span>DH 330.00</span>
            </div>
          </div>

          <button className="btn-primary">checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartPage