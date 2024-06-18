import css from "./ImageCard.module.css";
import { IImageCardProps } from "./ImageCard.types";

const ImageCard = ({ imgUrl, description, openModal }: IImageCardProps) => {
  return (
    <div className={css.card}>
      <img
        className={css.img}
        src={imgUrl}
        alt={description}
        loading="lazy"
        onClick={openModal}
      />
    </div>
  );
};

export default ImageCard;
