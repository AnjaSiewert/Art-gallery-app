
import Link from "next/link";

import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map(({ slug, imageSource, name, artist }) => {
          return (
            <>

              <Link href={`/art-pieces/${slug}`}>
                <li key={slug}>
                  <ArtPiecePreview
                    image={imageSource}
                    name={name}
                    title={name}
                    artist={artist}
                  />
                </li>
              </Link>

            </>
          );
        })}
      </ul>
    </>
  );
}
