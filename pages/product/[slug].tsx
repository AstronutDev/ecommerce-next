import Layout from "components/common/Layout";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import GetAllProductPath from "@framework/product/get-all-products-path";
import GetProduct from "@framework/product/get-product";

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
  return (
    <Layout>
      <div>
        <div>{product?.name}</div>
        <div>{product?.slug}</div>
        <div>{product?.path}</div>
        <div>{product?.price.value}</div>
        <div>{product?.price.currencyCode}</div>
        <div>{product?.description}</div>
      </div>

      <div>
        <h1>OPTION</h1>
        {product?.options.map((option) => (
          <div key={option.id}>
            <div>Name: {option.displayName}</div>
            {option.values.map((v) => (
              <div key={v.label}>
                <p>Lablel: {v.label}</p>
                <p>Hex color: {v.hexColor}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div>
        {product?.variants.map((variant) => (
          <div key={variant.id}>
            <p>Variant Name: {variant.name}</p>
            {variant.options.map((vo) => (
              <div key={vo.id}>
                <p>Name:{vo.displayName}</p>
                {vo.values.map((value) => (
                  <div key={value.label}>
                    <p>Label: {value.label}</p>
                    <p>HexColor: {value.hexColor}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ProductSlug;
