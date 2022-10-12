import Layout from "components/common/Layout";
import ProductCard from "components/product/productCard/ProductCard";
import Grid from "components/ui/Grid/Grid";
import type { NextPage, InferGetStaticPropsType } from "next";
import getAllProducts from "../framework/shopify/product/get-all-product";
import { Hero } from "@components/ui";
import { Marquee } from "@components/ui";

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { products } = props;

  getAllProducts();
  return (
    <Layout>
      <div className="bg-black">
        <div>
          <Grid>
            {products.slice(0, 3).map((product) => {
              return (
                <ProductCard
                  variant={"simple"}
                  key={product.id}
                  product={product}
                />
              );
            })}
          </Grid>
        </div>
        <Marquee>
          {products.slice(0, 3).map((product) => {
            return (
              <ProductCard
                variant={"slim "}
                key={product.id}
                product={product}
              />
            );
          })}
        </Marquee>
        <Hero
          headline={"NUTX Shoe Shop"}
          description={
            "Stripe shirts plain button-down collar short-sleeved three-color button navy top-fused collar. Long sleeved jersey onesie decorated crew neckline button fastening along the centre front contrast colour ultimate loungewear. Embroidered logo chest pocket locker loop button-flap breast pockets fastening jetted. Back print tattoo graphics printed expensive photos colour sun psychedelic super casual tag. Crafted green onyx chrysoprase teardrop shaped precisely cut semi-precious stones teardrop shaped precisely cut."
          }
        />
      </div>
    </Layout>
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
