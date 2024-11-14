import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;
