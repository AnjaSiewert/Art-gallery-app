import ArtPiecePreview from "../components/ArtPiecePreview/ArtPiecePreview";

export default function favorites({ artPiecesInfo, pieces, onToggleFavorite }) {
  const slugFavoritePieces = artPiecesInfo
    .filter((info) => info.isFavorite)
    .map((favoritePiece) => favoritePiece.slug);

  const favoritePieces = pieces.filter((piece) =>
    slugFavoritePieces.includes(piece.slug)
  );

  return (
    <ul>
      {favoritePieces.map(({ slug, imageSource, name, artist }) => {
        return (
          <>
            <li key={slug}>
              <ArtPiecePreview
                image={imageSource}
                name={name}
                title={name}
                artist={artist}
                artPiecesInfo={artPiecesInfo}
                onToggleFavorite={onToggleFavorite}
                slug={slug}
              />
            </li>
          </>
        );
      })}
    </ul>
  );
}
