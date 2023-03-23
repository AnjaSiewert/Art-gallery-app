import Heart from "./heart.svg";

const HeartLiked = () => <Heart height={32} width={32} fill="red" />;

export default function FavoriteButton({
  slug,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const { isFavorite } = artPiecesInfo.find((info) => info.slug === slug) ?? {
    isFavorite: false,
  };
  return (
    <>
      <button
        onClick={() => {
          onToggleFavorite(slug);
        }}
      >
        {isFavorite ? <HeartLiked /> : <Heart height={32} width={32} />}
      </button>
    </>
  );
}
