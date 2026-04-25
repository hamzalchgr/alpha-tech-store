import { useState } from "react";

const useQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQnt = () => setQuantity((prev) => prev + 1);

  const decreaseQnt = () => {
    if (quantity >= 1) {
      setQuantity((prev) => prev - 1);
    }

    return;
  };

  const handleChange = (e) => setQuantity(e.target.value);
  return {
    quantity,
    increaseQnt,
    decreaseQnt,
    handleChange
  }
}

export default useQuantity