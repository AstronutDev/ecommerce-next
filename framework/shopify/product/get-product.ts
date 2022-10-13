import {
  HasMetafields,
  ProductConnection,
  Product as ShopifyProduct,
} from "@framework/schema";
import { Product } from "../../common/types/product";
import { fetchApi, normalizeProduct } from "@framework/utils";
import GetProductQuery from "@framework/utils/queries/get-product";

interface FetchType {
  productByHandle: ShopifyProduct;
}
interface ReturnType {
  product: Product | null;
}

const GetProduct = async (slug: string): Promise<ReturnType> => {
  const { data } = await fetchApi<FetchType>({
    query: GetProductQuery,
    variable: { slug: `${slug}` },
  });

  const { productByHandle } = data;

  return {
    product: productByHandle ? normalizeProduct(productByHandle) : null,
  };
};

export default GetProduct;
