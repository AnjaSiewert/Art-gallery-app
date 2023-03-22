import Heart from "./heart.svg";

export default function FavoriteButton({ slug, isFavorite, onToggleFavorite }) {
  return (
    <>
      <button
        onClick={() => {
          onToggleFavorite(slug);
        }}
      >
        <Heart height={32} width={32} />
      </button>
    </>
  );
}
