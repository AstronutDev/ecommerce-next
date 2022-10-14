import { FC } from "react";
import { Container } from "@components/ui";
import Image from "next/image";
import { Product } from "@common/types/product";
import ProductSlider from "../ProductSlider/ProductSlider";

interface Props {
  product: Product;
}

const ProductView: FC<Props> = ({ product }) => {
  return (
    <Container>
      <div className="relative grid items-start gap-8 grid-cols-1 overflow-x-hidden lg:grid-cols-2">
        <div className="relative flex px-0 pb-0 box-border col-span-1 bg-violet-500 min-h-[600px] ">
          <div className="absolute top-6 left-0 z-20 pr-16 ">
            <h1 className=" px-6 py-2 bg-primary text-primary font-bold bg-violet-500">
              {product.name}
            </h1>
            <div className="px-6 py-2 pb-4 bg-primary text-primary bg-violet-500 font-bold inline-block tracking-wide">
              {product.price.value} {product.price.currencyCode}
            </div>
          </div>
          {/* slider-container  <div className="absolute z-10 inset-0 flex items-center justify-center overflow-x-hidden"> */}
          \
          <ProductSlider>
            {product.images.map((img) => (
              <div className="h-full" key={img.url}>
                <Image
                  className="w-full h-auto max-h-full object-cover"
                  src={img.url}
                  alt={img.alt}
                  width={1050}
                  height={1050}
                  quality="85"
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className="flex flex-col col-span-1 mx-auto max-w-8xl px-6 w-full h-full">
          <section>
            <div className="pb-4">
              <h2 className="uppercase font-medium">Color</h2>
              <div className="flex flex-row py-4">Variant Options Here!</div>
            </div>
            <div className="pb-14 break-words w-full max-w-xl text-lg">
              {product.description}
            </div>
          </section>
          <div>
            <button
              onClick={() => {}}
              aria-label="Add to Cart"
              className="text-center w-full max-w-[300px]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
