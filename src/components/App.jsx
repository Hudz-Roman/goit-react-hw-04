import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageModal from './ImageModal/ImageModal';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import SearchBar from './SearchBar/SearchBar';

import { useState, useEffect } from 'react';
import fetchImages from '../services/api';
// import toast from 'react-hot-toast';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  // const [numPages, setNumPages] = useState(0);

  // useEffect(() => {
  //   if (numPages === page) {
  //     toast.success('You already download all images');
  //   }
  // }, [numPages, page]);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchImages(query, page);
        const imagesData = response.map(
          ({ id, urls: { small, regular }, alt_description }) => ({
            id,
            small,
            regular,
            alt_description,
          })
        );
        setImages((prev) => [...prev, ...imagesData]);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      getData();
    }
  }, [query, page]);

  const onSubmit = (query) => {
    setImages([]);
    setQuery(query);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <Loader isLoading={isLoading} />
      <ImageGallery images={images} isError={isError} />
      <LoadMoreBtn onLoadMore={onLoadMore} />
      <ImageModal />
      {isError && <ErrorMessage />}
    </>
  );
}

export default App;
