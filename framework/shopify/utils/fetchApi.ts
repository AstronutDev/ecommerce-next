type fetchParams = {
  query: string;
};

type FetcherResult<T> = { data: T };

const fetchAPi = async <T>({
  query,
}: fetchParams): Promise<FetcherResult<T>> => {
  const url = `http://localhost:4000/graphql`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json ",
    },
    body: JSON.stringify({ query }),
  });
  const data = await response.json();

  // if (error) {
  //   console.log("🚀 ~ file: fetchApi.ts ~ line 16 ~ fetchAPi ~ errors", error);
  //   throw new Error(error[0].message ?? error.message);
  // }
  return data;
};

export default fetchAPi;
