import Layout from "components/common/Layout";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import GetAllProductPath from "@framework/product/get-all-products-path";

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
  return {
    props: {
      product: {
        slug: params?.slug,
      },
    },
  };
};

const ProductSlug = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <div>{product.slug}</div>
    </Layout>
  );
};

export default ProductSlug;
