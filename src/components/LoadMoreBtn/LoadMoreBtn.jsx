import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className={s.LoadMoreBtn} onClick={onLoadMore}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
