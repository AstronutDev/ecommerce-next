type fetchParams = {
  query: string;
  variable?: any;
};

type FetcherResult<T> = { data: T };

const fetchAPi = async <T>({
  query,
  variable,
}: fetchParams): Promise<FetcherResult<T>> => {
  const url = `http://localhost:4000/graphql`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json ",
    },
    body: JSON.stringify({ query, variable }),
  });
  const data = await response.json();
  return data;
};

export default fetchAPi;
