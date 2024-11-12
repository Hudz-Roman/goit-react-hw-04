import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageModal from './ImageModal/ImageModal';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import SearchBar from './SearchBar/SearchBar';

function App() {
  return (
    <>
      <SearchBar />
      <Loader />
      <ImageGallery />
      <LoadMoreBtn />
      <ImageModal />
      <ErrorMessage />
    </>
  );
}

export default App;
