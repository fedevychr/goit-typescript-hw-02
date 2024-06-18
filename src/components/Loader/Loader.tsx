import css from "./Loader.module.css";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css.Loader}>
      <InfinitySpin
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
