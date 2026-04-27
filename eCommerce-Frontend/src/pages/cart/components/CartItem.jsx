import React from "react";
import useQuantity from "../../product/hooks/useQuantity";
import { ChevronLeft, ChevronRight, Trash } from "lucide-react";
import { formatPrice } from "../../../utils/priceFormat";

const CartItem = () => {
  const { quantity, increaseQnt, decreaseQnt, handleChange } = useQuantity();
  
  return (
    <div className="grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_3fr]">
      <div className="img-container">
        <img
          src="https://framerusercontent.com/images/Q02bXk0JWXDkyEqmjry2EiJCy0.png?scale-down-to=1024&width=1200&height=1200"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-between p-4">
        <div className="flex items-start justify-between uppercase font-semibold">
          <h3>nothing headphones</h3>
          <h3>DH {formatPrice(300)}</h3>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2.5 text-xs">
            <div className="flex items-center gap-1">
              <button
                aria-label="decrease quantity"
                className="quantity-btn"
                disabled={quantity === 1 ? true : false}
                onClick={decreaseQnt}
              >
                <ChevronLeft size={14} />
              </button>

              <input
                id="input"
                className="quantity-input appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                type="number"
                value={quantity}
                onChange={(e) => handleChange(e)}
              />

              <button
                aria-label="increase quantity"
                className="quantity-btn"
                onClick={increaseQnt}
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          <button className="btn"><Trash size={20} /></button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
