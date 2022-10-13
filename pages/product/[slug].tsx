import Layout from "components/common/Layout";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

//fetch all product slug
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          slug: "cool-hat",
        },
      },
      {
        params: {
          slug: "t-shirt",
        },
      },
      {
        params: {
          slug: "lightweight-jacket",
        },
      },
    ],
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
