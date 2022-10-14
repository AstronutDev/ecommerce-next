import {
  ImageEdge,
  MoneyV2,
  Product as ShopifyProduct,
  ProductOption,
  ProductVariant,
  ProductVariantConnection,
  SelectedOption,
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

function normalizeProductVariants(connect: ProductVariantConnection) {
  if (connect) {
    const { edges } = connect;
    return edges.map(({ node }) => {
      const { id, selectedOptions, sku, title, priceV2, compareAtPriceV2 } =
        node;
      return {
        id,
        name: title,
        sku: sku ?? id,
        price: +priceV2.amount,
        listPrice: +compareAtPriceV2?.amount,
        requiresShipping: true,
        options: selectedOptions.map(({ name, value }: SelectedOption) => {
          const option = normalizeProductOption({
            id,
            name,
            values: [value],
          });
          return option;
        }),
      };
    });
  }
  return;
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
    variants,
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
    variants: variants ? normalizeProductVariants(variants) : [],
    ...rest,
  };
  return product;
}
