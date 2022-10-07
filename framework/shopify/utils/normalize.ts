import { ImageEdge, Product as ShopifyProduct } from "../schema";
// import { Product } from "@common/types/product";
import { Product } from "@common/types/product";

type edgesImage = {
  edges: Array<ImageEdge>;
};

function normalizeProductImage({ edges }: edgesImage) {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    };
  });
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: ImageConnection,
    ...rest
  } = productNode;
  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, " "),
    images: normalizeProductImage(ImageConnection),
    ...rest,
  };
  return product;
}
