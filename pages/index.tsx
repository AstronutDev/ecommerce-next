import Layout from "components/common/Layout";
import ProductCard from "components/product/productCard/ProductCard";
import Grid from "components/ui/Grid/Grid";
import type { NextPage, InferGetStaticPropsType } from "next";
import getAllProducts from "../framework/shopify/product/get-all-product";

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { products } = props;

  getAllProducts();
  return (
    <Grid>
      {products.slice(0, 3).map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </Grid>
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
