const GetAllProductPathQuery = `
  query getAllProductPath($first: Int = 250) {
    products(first: $first) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;

export default GetAllProductPathQuery;
