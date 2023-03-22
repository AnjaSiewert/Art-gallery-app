import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout/Layout";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "is loading";

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);

      if (info) {
        return artPiecesInfo.map(
          (piece) =>
            piece.slug === slug && { ...piece, isFavorite: !piece.isFavorite }
        );
      }
      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }
  console.log(artPiecesInfo);

  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component
        {...pageProps}
        artPiecesInfo={artPiecesInfo}
        pieces={data}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
