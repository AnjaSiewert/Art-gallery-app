import Heart from "./heart.svg";
import styled from "styled-components";

//const HeartNotFilled = styled.button`
//  fill: none;
//`;

const HeartLiked = () => <Heart height={32} width={32} fill="red" />;

export default function FavoriteButton({ slug, isFavorite, onToggleFavorite }) {
  return (
    <>
      <button
        onClick={() => {
          onToggleFavorite(slug);
          console.log(isFavorite);
        }}
      >
        {isFavorite ? <HeartLiked /> : <Heart height={32} width={32} />}
      </button>
    </>
  );
}
