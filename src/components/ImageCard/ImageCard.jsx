import s from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  const { small, alt_description } = image;
  return (
    <div>
      <img className={s.image} src={small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
