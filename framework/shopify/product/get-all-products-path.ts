import { ProductConnection } from "@framework/schema";
import { fetchApi } from "@framework/utils";
import { Product } from "../../common/types/product";
import GetAllProductPathQuery from "../utils/queries/get-all-product-path";

interface ReturnType {
  products: Pick<Product, "slug">[];
}

const GetAllProductPath = async (): Promise<ReturnType> => {
  const { data } = await fetchApi<{ products: ProductConnection }>({
    query: GetAllProductPathQuery,
  });

  const products = data.products.edges.map(({ node: { handle } }) => {
    return {
      slug: handle,
    };
  });
  return { products };

  // return {
  //   products: [
  //     {
  //       slug: "cool-hat",
  //     },
  //     {
  //       slug: "t-shirt",
  //     },
  //     {
  //       slug: "lightweight-jacket",
  //     },
  //   ],
  // };
};

export default GetAllProductPath;
