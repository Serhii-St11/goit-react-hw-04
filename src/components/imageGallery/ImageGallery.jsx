import ImageCard from "../imageCard/ImageCard";
import clsx from "clsx";
import css from "./imageGallery.module.css"

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={clsx(css.ul)}>
      {images.map((image) => (
        <li className={clsx(css.li)}  key={image.id}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
