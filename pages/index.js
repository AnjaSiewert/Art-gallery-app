import ArtPieces from "../components/ArtPieces/ArtPieces";
import useSWR from "swr";
import Spotlight from "../components/Spotlight/Spotlight";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "is loading";

  return (
    <div>
      <h1>Art pieces</h1>
      <ArtPieces pieces={data} />
      <Spotlight pieces={data} />
    </div>
  );
}
