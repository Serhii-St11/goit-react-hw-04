import clsx from "clsx";
import css from "./loadMoreBtn.module.css";

export default function LoadMoreBtn({ loadMoreImages }) {
  return (
    <div className={clsx(css.loadMore_btn)}>
      <button className={clsx(css.btn)} onClick={loadMoreImages}>
        Load more
      </button>;
    </div>
  );
}
