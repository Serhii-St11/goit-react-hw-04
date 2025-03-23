import clsx from "clsx";
import css from "./imageCard.module.css"

export default function ImageCard({ image, onImageClick }) {
  return (
    <div className={clsx(css.img_card)} onClick={() => onImageClick(image)} >
      <img className={clsx(css.img)}  src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}
