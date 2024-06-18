import { IPhoto } from "../App/App.types";

export interface IImageGalleryProps {
  photos: IPhoto[];
  openModal: (photo: IPhoto) => void;
}
