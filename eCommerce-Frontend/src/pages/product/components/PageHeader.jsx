import { formatPrice } from '../../../utils/priceFormat';
import useQuantity from '../hooks/useQuantity'

const PageHeader = ({pdt}) => {
  const { quantity } = useQuantity();

  return (
    <div className="padding-x flex justify-between items-center py-4 border-b border-surface bg-surface-glass sticky z-20 top-0 backdrop-blur-lg">
        <h2 className="md:text-xl font-bold tracking-tight">{pdt.name}</h2>
        <div className="hidden text-sm font-medium md:flex items-center gap-4">
          <p>Total including tax DH {formatPrice(
                      Number(quantity) *
                        (pdt.price.discount ? pdt.price.finalPrice : pdt.price.amount),
                    )} MAD</p>
          <button className="px-4 py-2 rounded-full bg-accent cursor-pointer text-surface-muted capitalize hover:text-accent hover:bg-transparent hover:ring hover:ring-accent transition-all duration-200">
            continue
          </button>
        </div>
      </div>
  )
}

export default PageHeader