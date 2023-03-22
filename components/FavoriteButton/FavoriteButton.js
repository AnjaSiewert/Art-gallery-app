import Heart from "./heart.svg";
import styled from "styled-components";

const HeartNotFilled = styled.button`
  fill: none;
`;

export default function FavoriteButton({ slug, isFavorite, onToggleFavorite }) {
  return (
    <>
      <button
        onClick={() => {
          onToggleFavorite(slug);
          console.log(isFavorite);
        }}
      >
        {isFavorite ? (
          <HeartNotFilled height={32} width={32} />
        ) : (
          <Heart height={32} width={32} />
        )}
      </button>
    </>
  );
}
