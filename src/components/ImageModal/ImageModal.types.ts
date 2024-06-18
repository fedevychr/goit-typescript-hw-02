import { IPhoto } from "../App/App.types";

export interface IImageModalProps {
  isModalOpen: boolean;
  photo: IPhoto;
  closeModal: () => void;
}
