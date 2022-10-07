import getAllProductQuery from "../utils/queries/get-all-product";
import { fetchApi, normalizeProduct } from "../utils";
import { ProductConnection } from "../schema";
// import { normalizeProduct } from "../utils/normalize";
import { Product } from "../../common/types/product";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchApi<ReturnType>({
    query: getAllProductQuery,
  });
  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product);
    }) ?? [];
  return products;
};

export default getAllProducts;
