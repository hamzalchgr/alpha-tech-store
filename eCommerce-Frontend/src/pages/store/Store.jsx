import ProductCard from "../../components/product/ProductCard";

const Store = () => {
  return (
    <div className="padding-x">

      <div className="relative">
        <div className="h-screen w-full">
          <video className="h-full w-full" src="https://youtu.be/_Ve_Mk4I0Zs" autoPlay muted></video>
        </div>
      </div>
      
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        <li>
          <ProductCard />
        </li>
      </ul>
    </div>
  )
}

export default Store