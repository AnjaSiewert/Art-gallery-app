import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "is loading";
  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component {...pageProps} pieces={data} />
    </>
  );
}
