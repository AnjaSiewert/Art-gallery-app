import Link from "next/link";

import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieces({ pieces, onToggleFavorite }) {
  return (
    <>
      <ul>
        {pieces.map(({ slug, imageSource, name, artist }) => {
          return (
            <>
              <li key={slug}>
                <FavoriteButton onToggleFavorite={onToggleFavorite} />
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
