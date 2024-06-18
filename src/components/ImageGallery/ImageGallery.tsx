import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { IImageGalleryProps } from "./ImageGallery.types";

const ImageGallery = ({ photos, openModal }: IImageGalleryProps) => {
  return (
    <ul className={css.list}>
      {Array.isArray(photos) &&
        photos.map((photo) => {
          return (
            <li key={photo.id} className={css.item}>
              <ImageCard
                imgUrl={photo.urls.small}
                description={photo.alt_description}
                openModal={() => openModal(photo)}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
