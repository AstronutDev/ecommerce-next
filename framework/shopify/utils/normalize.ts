import {
  ImageEdge,
  MoneyV2,
  Product as ShopifyProduct,
  ProductOption,
} from "../schema";
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

function normalizePrice({ currencyCode, amount }: MoneyV2) {
  return {
    value: +amount,
    currencyCode,
  };
}

function normalizeProductOption({
  id,
  values,
  name: displayName,
}: ProductOption) {
  const normalized = {
    id,
    displayName,
    values: values.map((v) => {
      if (displayName.match(/colou?r/gi)) {
        return {
          hexColor: v,
        };
      }
      return {
        label: v,
      };
    }),
  };

  return normalized;
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: ImageConnection,
    priceRange,
    options,
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
    price: normalizePrice(priceRange.minVariantPrice),
    options: options
      ? options
          .filter((o) => o.name !== "Title")
          .map((o) => normalizeProductOption(o))
      : [],
    ...rest,
  };
  return product;
}
