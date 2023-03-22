import Heart from "./heart.svg";

export default function FavoriteButton({
  piece,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>
      <button
        onClick={() => {
          onToggleFavorite(piece.slug);
        }}
      >
        <Heart height={32} width={32} />
      </button>
    </>
  );
}
