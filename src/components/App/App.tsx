import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";

import { getPhotos } from "../../services/api";
import { IPhoto, IPhotosResponse } from "./App.types";

type Photos = IPhoto[] | null;
type Error = string | null;

function App() {
  const [photos, setPhotos] = useState<Photos>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>(null);

  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPage] = useState<number>(1);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<IPhoto | null>(null);

  useEffect(() => {
    if (!query) return;

    async function fetchPhotos() {
      try {
        setError(null);
        setIsLoading(true);

        const { data } = await getPhotos<IPhotosResponse>(query, page);

        setTotalPage(data.total_pages);

        setPhotos((prevPhotos) =>
          prevPhotos ? [...prevPhotos, ...data.results] : data.results
        );
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPhotos();
  }, [query, page]);

  const searchPhotos = (newQuery: string): void => {
    if (newQuery === query) return;
    setPhotos(null);
    setPage(1);
    setQuery(newQuery);
  };

  const onLoadMore = (): void => setPage((prevPage) => prevPage + 1);

  const isShowBtn = Boolean(photos?.length && !isLoading && page < totalPages);

  const openModal = (photo: IPhoto) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div className={css.body}>
      <SearchBar searchPhotos={searchPhotos} />

      <div className={css.main}>
        {photos && <ImageGallery photos={photos} openModal={openModal} />}
        {error && <ErrorMessage message={error} />}
        {isLoading && <Loader />}

        {isShowBtn && (
          <div className={css.btnWrapper}>
            <LoadMoreBtn onLoadMore={onLoadMore}>Load more</LoadMoreBtn>
          </div>
        )}
      </div>
      {selectedPhoto && (
        <ImageModal
          photo={selectedPhoto}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;
