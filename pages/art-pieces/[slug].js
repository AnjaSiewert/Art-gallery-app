import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails/ArtPieceDetails";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";

export default function ArtPieceDetailsPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const selectedArtPiece = pieces.find((piece) => piece.slug === slug);

  if (!selectedArtPiece) {
    return null;
  }

  const { isFavorite } = artPiecesInfo.find(
    (info) => info.slug === selectedArtPiece.slug
  ) ?? {
    isFavorite: false,
  };

  return (
    <>
      <ArtPieceDetails
        selectedArtPiece={selectedArtPiece}
        title={selectedArtPiece.name}
        artist={selectedArtPiece.artist}
        year={selectedArtPiece.year}
        genre={selectedArtPiece.genre}
      />
      <FavoriteButton
        slug={selectedArtPiece.slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
