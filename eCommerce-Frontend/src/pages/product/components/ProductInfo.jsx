import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Minus,
  Plus,
} from "lucide-react";
import { formatPrice } from "../../../utils/priceFormat";
import useQuantity from "../hooks/useQuantity";

const ProductInfo = ({ pdt }) => {
  const { quantity, increaseQnt, decreaseQnt, handleChange } = useQuantity();

  return (
    <div className="product-info-container">
      <div className="uppercase text-xs">
        <p className="flex gap-2 items-center">
          <Link to="/">home</Link> <ChevronRight size={14} />{" "}
          <Link to={`/store/audio`}>{pdt.category}</Link>{" "}
          <Link>{pdt.name}</Link>
        </p>
        <h2 className="font-bold text-base">Buy {pdt.name}</h2>
        <p className="mt-2.5">WVPA35423</p>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">

          {/* PDT price */}
          <p className="flex items-center gap-4 w-full">
            <span className="font-bold">PRICE</span>
            {pdt.price.discount ? (
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-4 md:gap-2 lg:gap-4 md:flex-col lg:flex-row">
                  <span className="text-secondary line-through">
                    DH {formatPrice(pdt.price.finalPrice)} MAD
                  </span>
                  <span>DH {formatPrice(pdt.price.amount)} MAD</span>
                </div>

                <span className="discount-perscent">
                  -{pdt.price.discount}%
                </span>
              </div>
            ) : (
              <span>DH {formatPrice(pdt.price.amount)} MAD</span>
            )}
          </p>
        </div>

        {/* TAX - SHIPPING */}
        <p className="text-xs">
          Tax included. Shipping cost calculated at checkout.
        </p>
      </div>

      {/* QUANTITY SELECTOR */}
      <div className="flex gap-2.5 text-xs">
        <label className="flex gap-2.5 items-center" htmlFor="input">
          Quantity
          <input
            id="input"
            className="quantity-input"
            type="text"
            value={quantity}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <div className="flex flex-col justify-between">
          <button
            aria-label="increase quantity"
            className="quantity-btn"
            onClick={increaseQnt}
          >
            <ChevronUp size={14} />
          </button>
          <button
            aria-label="decrease quantity"
            className="quantity-btn"
            disabled={quantity === 1 ? true : false}
            onClick={decreaseQnt}
          >
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* TTC */}
      <div className="font-bold flex gap-2 text-sm">
        TOTAL:{" "}
        <span>
          DH{" "}
          {formatPrice(
            Number(quantity) *
              (pdt.price.discount ? pdt.price.finalPrice : pdt.price.amount),
          )}{" "}
          MAD
        </span>
        <span className="font-normal">({quantity} item(s))</span>
      </div>

      {/* CTA */}
      <div className="flex flex-col gap-2">
        <button className="btn-outline">
          official site
        </button>
        <button className="btn-primary">
          add to cart
        </button>
      </div>

      {/* PRODUCT INFORMATION */}
      <div>
        <div>
          <div className="font-bold flex items-center justify-between text-sm py-1 leading-5">
            <span>INFORMATION</span>
            <Minus size={14} />
          </div>
          <div className="text-xs flex flex-col gap-2 items-start py-3 pr-10">
            <p>{pdt.description}</p>
            <button className="font-bold cursor-pointer underline uppercase">
              more information
            </button>
          </div>
        </div>
        <div className="font-bold flex items-center justify-between text-sm py-1 leading-5">
          <span>REFUND & EXCHANGE</span>
          <Plus size={14} />
        </div>
        <div className="font-bold flex items-center justify-between text-sm py-1 leading-5">
          <span>SHIPPING</span>
          <Plus size={14} />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
