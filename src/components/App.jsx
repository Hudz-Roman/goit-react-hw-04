import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageModal from './ImageModal/ImageModal';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import SearchBar from './SearchBar/SearchBar';

import { useState, useEffect } from 'react';
import fetchImages from '../services/api.js';

function App() {
  const [images, setImages] = useState([]);
  // const [isLoading, setLoading] = useState(false);
  // const [isError, setError] = useState(false);
  // const [query, setQuery] = useState('');
  // const [page, setPage] = useState(0);
  // const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetchImages();
        setImages(resp);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <SearchBar />
      <Loader />
      <ImageGallery images={images} />
      <LoadMoreBtn />
      <ImageModal />
      <ErrorMessage />
    </>
  );
}

export default App;
