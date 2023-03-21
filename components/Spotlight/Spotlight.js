import Image from "next/image";

export default function Spotlight({ pieces }) {
  const randomImage = pieces[Math.floor(Math.random() * pieces.length)];
  console.log(randomImage);
  return (
    <>
      <Image
        src={randomImage.imageSource}
        alt={randomImage.name}
        width={250}
        height={250}
      />
      <q>{randomImage.artist}</q>
    </>
  );
}
