import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails/ArtPieceDetails";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const selectedArtPiece = pieces.find((piece) => piece.slug === slug);
  console.log(selectedArtPiece);

  if (!selectedArtPiece) {
    return null;
  }
  return (
    <>
      <ArtPieceDetails
        selectedArtPiece={selectedArtPiece}
        title={selectedArtPiece.name}
        artist={selectedArtPiece.artist}
        year={selectedArtPiece.year}
        genre={selectedArtPiece.genre}
      />
      <FavoriteButton />
    </>
  );
}
