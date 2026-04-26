import ImgSlider from "./product/components/ImgSlider";
import PageHeader from "./product/components/PageHeader";
import ProductInfo from "./product/components/ProductInfo";

const PDT_TST = {
  id: "WVPA35423",
  name: "Nothing Headphones",
  slug: "nothing-headphones",
  description:
    "No missed words or muffled voices. Four microphones work with AI-powered Clear Voice Technology to isolate your voice and suppress surrounding noise. Trained on over 28 million real-world scenarios, it keeps you clear in cafés, on calls, or in windy conditions.",
  brand: "nothing",

  category: "audio",
  price: {
    amount: 249,
    currency: "MAD",
    discount: null,
    finalPrice: null,
  },
  stock: {
    quantity: 50,
    inStock: true,
  },
  images: [
    "https://framerusercontent.com/images/umrdOjtmdgGvlbungEqO5CHDs5o.png?scale-down-to=1024&width=1838&height=1820",
    "https://framerusercontent.com/images/UksD8T0YWbryvAz3NgtEZbbVBao.png?scale-down-to=1024&width=2000&height=2000",
    "https://framerusercontent.com/images/TTsLsTXOgygHFpMUJDpyXKCyVI.png?scale-down-to=1024&width=2000&height=2000",
    "https://framerusercontent.com/images/e2DVlkqDSuFd8WbPvElHPC82s.png?scale-down-to=1024&width=2000&height=2000",
    "https://framerusercontent.com/images/zR90gf9IgdCqxUdz77LIHFhzI.png?scale-down-to=1024&width=2000&height=2000",
  ],
  attributes: [
    {
      attName: "color",
      attContent: "white",
    },
    {
      attName: "battery_life",
      attContent: "up to 80 hours (35 hours with ANC)",
    },
    {
      attName: "noise_cancellation",
      attContent: "adaptive active noise cancellation (up to 42 dB)",
    },
    {
      attName: "driver",
      attContent: "40mm dynamic drivers",
    },
    {
      attName: "connectivity",
      attContent: "bluetooth 5.3 with ldac and dual-device pairing",
    },
    {
      attName: "water_resistance",
      attContent: "ip52 rating",
    },
  ],
  tags: ["wireless", "audio", "headphones"],
};

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <div className="padding-x py-4 border-b border-surface bg-surface-glass sticky z-20 top-0 backdrop-blur-lg">
        <h2 className="md:text-xl font-bold tracking-tight">{PDT_TST.name}</h2>
      </div>

      <section className="relative grid gap-4 md:grid-cols-2 md:gap-10 lg:gap-20 md:px-10 lg:px-20">
        <div className="">
          <ul className="hidden md:flex flex-col gap-4">
            {PDT_TST.images.map((img, index) => (
              <li key={index} className="h-full w-full overflow-hidden">
                <img
                  className="h-full w-full object-center object-cover"
                  src={img}
                  alt={`${PDT_TST.name} - ${index}`}
                />
              </li>
            ))}
          </ul>

          <ImgSlider imgs={PDT_TST.images} />
        </div>

        <ProductInfo pdt={PDT_TST} />
      </section>

      <section>related products</section>
    </div>
  );
};

export default LandingPage;
