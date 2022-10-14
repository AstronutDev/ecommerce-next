import Layout from "components/common/Layout";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import GetAllProductPath from "@framework/product/get-all-products-path";
import GetProduct from "@framework/product/get-product";
import ProductView from "components/ui/product/ProductView/ProductView";
//fetch all product slug
export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await GetAllProductPath();
  return {
    paths: products.map((product) => ({
      params: {
        slug: product.slug,
      },
    })),
    fallback: false,
  };
};

//provide specific data to the page
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const { product } = await GetProduct(params!.slug);

  return {
    props: {
      product,
    },
  };
};

const ProductSlug = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Layout>{product && <ProductView product={product} />}</Layout>;
};

export default ProductSlug;
