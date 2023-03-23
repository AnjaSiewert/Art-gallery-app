import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const StyledListElement = styled.li`
  list-style: none;
`;

export default function ArtPieceDetails({
  selectedArtPiece,
  title,
  artist,
  year,
  genre,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      <Link href="/art-pieces"> 🔙 Back</Link>
      <br />
      <Image
        src={selectedArtPiece.imageSource}
        alt={selectedArtPiece.name}
        width={250}
        height={250}
      />
      <ul>
        <h3>{title}</h3>
        <StyledListElement>Artist: {artist}</StyledListElement>
        <StyledListElement>Year: {year}</StyledListElement>
        <StyledListElement>Genre: {genre}</StyledListElement>
      </ul>
      <FavoriteButton
        slug={selectedArtPiece.slug}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
