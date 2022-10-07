import type { NextPage, InferGetStaticPropsType } from "next";
import getAllProducts from "../framework/shopify/product/get-all-product";

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { products } = props;

  getAllProducts();
  return (
    <>
      <div>{JSON.stringify(products)}</div>
      <div>{products[0].images}</div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const products = await getAllProducts();
  // const products = [4, 5, 6];

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}
