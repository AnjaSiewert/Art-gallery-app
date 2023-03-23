import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  name,
  onToggleFavorite,
  artPiecesInfo,
  slug,
}) {
  return (
    <>
      <FavoriteButton
        slug={slug}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={name} width={250} height={250} />
      </Link>
      <h2>{title}</h2>

      <q>{artist}</q>
    </>
  );
}
