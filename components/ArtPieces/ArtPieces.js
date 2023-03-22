import Link from "next/link";

import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <>
      <ul>
        {pieces.map(({ slug, imageSource, name, artist }) => {
          const { isFavorite } = artPiecesInfo.find(
            (info) => info.slug === slug
          ) ?? { isFavorite: false };

          return (
            <>
              <li key={slug}>
                <FavoriteButton
                  slug={slug}
                  onToggleFavorite={onToggleFavorite}
                  isFavorite={isFavorite}
                />
                <Link href={`/art-pieces/${slug}`}>
                  <ArtPiecePreview
                    image={imageSource}
                    name={name}
                    title={name}
                    artist={artist}
                  />
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
