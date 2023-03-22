import { Fragment } from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => {
          return (
            <>
              <li key={piece.slug}>
                <ArtPiecePreview
                  image={piece.imageSource}
                  name={piece.name}
                  title={piece.name}
                  artist={piece.artist}
                />
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
