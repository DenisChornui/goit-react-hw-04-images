import { Component } from 'react';
import { fetchImg } from 'components/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { SearchBar } from './Searchbar/SearchBar';
import { Loader } from './Loader/Loader';
import { ErrorMessage } from './ErrorMessage';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
    loadMore: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ loading: true, error: false });
        const fetchedImg = await fetchImg(query, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...fetchedImg.hits],
        }));
        this.setState({
          loadMore: page < Math.ceil(fetchedImg.totalHits / 12),
        });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleFormSubmit = value => {
    const { query } = this.state;

    if (query === value) {
      return;
    }
    this.setState({
      query: value,
      images: [],
      page: 1,
      error: false,
      loadMore: false,
    });
  };
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loading, error, loadMore } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {loading && <Loader />}
        {error && (
          <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
        )}
        {loadMore && <Button onClick={this.handleLoadMore}>Load More</Button>}
      </Container>
    );
  }
}
