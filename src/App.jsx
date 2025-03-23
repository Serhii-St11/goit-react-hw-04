import { useState } from "react";
import ImageGallery from "./components/imageGallery/ImageGallery";
import SearchBar from "./components/searchBar/SearchBar";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";


function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchImages = async (query, page = 1) => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=15&client_id=7ilM83FYgqO2uHQJ9vGBXrVNF29Rn-1q-MkwDLkqtU8`
      );
      const data = await response.json();

      setImages((prevImages) => [...prevImages, ...data.results]);
    } catch (err) {
      setError("Error loading images");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => {
      const nextPage = prevPage + 1;
      fetchImages(query, nextPage);
      return nextPage;
    });
  };

  const openModal = (image) => {
     if (!isModalOpen) {
       setSelectedImage(image);
       setIsModalOpen(true);
     }
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <SearchBar fetchImages={fetchImages} setQuery={setQuery} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {images.length > 0 && !loading && (
        <LoadMoreBtn loadMoreImages={handleLoadMore} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        image={selectedImage}
        onClose={closeModal}
      />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
