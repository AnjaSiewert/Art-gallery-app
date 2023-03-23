import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <>
      <ul>
        {pieces.map(({ slug, imageSource, name, artist }) => {
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
    </>
  );
}
