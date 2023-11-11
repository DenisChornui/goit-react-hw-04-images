import { useEffect, useState } from 'react';
import { fetchImg } from 'components/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { SearchBar } from './Searchbar/SearchBar';
import { Loader } from './Loader/Loader';
import { ErrorMessage } from './ErrorMessage';
import { Container } from './App.styled';


export const App = () => {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [loadMore, setLoadMore] = useState(false)


useEffect( () => {
  if(query === ''){
    return;
  }
  async function getImages() {
    try {
      setLoading(true)
      setError(false)
      const fetchedImg = await fetchImg(query, page);
      setImages(prevImages => [...prevImages, ...fetchedImg.hits])
      setLoadMore(page < Math.ceil(fetchedImg.totalHits / 12))
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }
  getImages()
}, [page, query])

  const handleFormSubmit = value => {

    if (query === value) {
      return;
    }
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(false);
    setLoadMore(false)
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage +1)
  };

  return (
    <Container>
      <SearchBar onSubmit={handleFormSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && <Loader />}
      {error && (
        <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
      )}
      {loadMore && <Button onClick={handleLoadMore}>Load More</Button>}
    </Container>
  );
}

  

  


  
