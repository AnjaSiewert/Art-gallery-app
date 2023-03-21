import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist, name }) {
  return (
    <>
      <Image src={image} alt={name} width={250} height={250} />
      <h2>{title}</h2>

      <q>{artist}</q>
    </>
  );
}
