import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, ChevronUp, Plus } from "lucide-react";
import { formatPrice } from "../../../utils/priceFormat";
import useQuantity from "../hooks/useQuantity";
import Accordion from "./Accordion";
import useAccordion from "../hooks/useAccordion";

const ProductInfo = ({ pdt }) => {
  const { quantity, increaseQnt, decreaseQnt, handleChange } = useQuantity();

  const { openAcc, toggleAcc } = useAccordion();
  return (
    <div className="product-info-container">
      <div className="uppercase text-xs">
        <p className="flex gap-2 items-center">
          <Link to="/">home</Link> <ChevronRight size={14} />{" "}
          <Link to={`/store/${pdt.category}`}>{pdt.category}</Link>{" "}
          <Link to={`/landingPage/${pdt.id}`}>{pdt.name}</Link>
        </p>
        <h2 className="font-bold text-base">Buy {pdt.name}</h2>
        <p className="mt-2.5">{pdt.id}</p>
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
        <button className="btn-outline">official site</button>
        <button className="btn-primary">add to cart</button>
      </div>

      {/* PRODUCT INFORMATION */}
      <div>
        <Accordion
          accLabel="INFORMATION"
          toggleAcc={() => toggleAcc("INFORMATION")}
          openAcc={openAcc}
        >
            <p>{pdt.description}</p>
            <ul className="flex flex-col gap-1">
              {pdt.attributes.map((att) => (
                <li key={att.attName}>
                  <p><span className="font-semibold capitalize">{att.attName}</span>: {att.attContent}</p>
                </li>
              ))}
            </ul>
        </Accordion>

        <Accordion
          accLabel="REFUND & EXCHANGE"
          toggleAcc={() => toggleAcc("REFUND & EXCHANGE")}
          openAcc={openAcc}
        >
            <p>
              If you wish to return an item to <strong>Alpha Tech Store</strong>, please send
              it to the address provided by our support team after initiating
              your return request. <br/><br/><strong>Return Guidelines:</strong> <br/>1. All returns and
              exchanges are the responsibility of the customer, including
              shipping costs. You may use any courier service available in your
              area. <br/>2. If you would like a different size, color, or product,
              please place a new order through our website. <br/>3. Be sure to keep
              your proof of postage receipt until your return has been processed
              and confirmed. <br/>4. If you receive a defective item or are not
              satisfied with the quality, please contact our customer support
              team as soon as possible. We are committed to resolving any issues
              quickly and efficiently. You can reach us via email or through the
              contact options on our website.
            </p>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductInfo;
