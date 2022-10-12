import { Product } from "@common/types/product";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

interface Props {
  product?: Product;
  variant: "simple" | "slim ";
}

const placeHolderImage = "/product-image-placeholder.svg";
const ProductCard: FC<Props> = ({ product, variant = "simple" }) => {
  return (
    <>
      <Link href={`/product/${product?.slug}`}>
        {variant === "slim " ? (
          <>
            <div className="bg-green-500 px-10 py-8">
              <span className="text-white bg-black p-2 rounded-xl">
                {product?.name}
              </span>
              <div>
                {product?.images && (
                  <Image
                    alt={product?.name ?? "Product image "}
                    src={product.images[0].url ?? placeHolderImage}
                    height={320}
                    width={320}
                    quality="85"
                    layout="fixed"
                  />
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="m-4 p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
            <div className="font-bold cursor-pointer text-2xl">
              {product && product!.name}
            </div>
            <div className="leading-loose">{product!.description}</div>
            <div>
              <span className="text-xl font-bold">
                {" "}
                {product?.price.value} {product?.price.currencyCode}{" "}
              </span>
            </div>
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
              {product?.images && (
                <Image
                  alt={product?.name ?? "Product image "}
                  src={product.images[0].url ?? placeHolderImage}
                  height={540}
                  width={540}
                  quality="85"
                  layout="responsive"
                />
              )}
            </div>
          </div>
        )}
      </Link>
    </>
  );
};

export default ProductCard;
