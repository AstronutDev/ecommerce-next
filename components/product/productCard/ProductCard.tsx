import { Product } from "@common/types/product";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

interface Props {
  product?: Product;
}

const placeHolderImage = "/product-image-placeholder.svg";
const ProductCard: FC<Props> = (props) => {
  const { product } = props;
  return (
    <>
      <Link href={`/product/${product?.slug}`}>
        <div className="p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
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
      </Link>
    </>
  );
};

export default ProductCard;
