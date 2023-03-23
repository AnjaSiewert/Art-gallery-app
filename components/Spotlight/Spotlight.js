import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({ pieces, onToggleFavorite, artPiecesInfo }) {
  const randomImage = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <Image
        src={randomImage.imageSource}
        alt={randomImage.name}
        width={250}
        height={250}
      />
      <FavoriteButton
        slug={randomImage.slug}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
      <q>{randomImage.artist}</q>
    </>
  );
}
