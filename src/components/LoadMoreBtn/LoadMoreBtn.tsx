import css from "./LoadMoreBtn.module.css";
import { ILoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn = ({ onLoadMore, children }: ILoadMoreBtnProps) => {
  return (
    <button className={css.button} onClick={onLoadMore}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;
