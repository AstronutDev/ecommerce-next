import { Product } from "../../common/types/product";

interface ReturnType {
  products: Pick<Product, "slug">[];
}

const GetAllProductPath = async (): Promise<ReturnType> => {
  return {
    products: [
      {
        slug: "cool-hat",
      },
      {
        slug: "t-shirt",
      },
      {
        slug: "lightweight-jacket",
      },
    ],
  };
};

export default GetAllProductPath;
