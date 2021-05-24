import React, { Component } from "react";
import Button from "./Button/Button";
import Container from "./Container/Container";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import Searchbar from "./Searchbar/Searchbar";
import apiService from "./Service/apiService";
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    images: [],
    showModal: false,
    largeImageUrl: "",
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage }
    this.setState({ isLoading: true });

    apiService(options)
      .then(images => {
        this.setState((prevState) => ({
          currentPage: prevState.page + 1,
          images: [...prevState.images, ...images],
        }));
      })
      .catch(error => this.state({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
        
      });
  };

  largeImage = (largeImageURL) => {
    this.setState({ largeImageUrl:largeImageURL});
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, isLoading, showModal, largeImageUrl, error } = this.state;
    const loadMoreBtn = images.length > 0 && !isLoading;

    return (
      <Container>
        {error && <h1>Erorr! Try again</h1>}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} imgClick={this.largeImage} />

        {isLoading && <Loader />}
        {loadMoreBtn && <Button onClick={this.fetchImages} />}

        {showModal && (
          <Modal onClose={this.largeImage}>
            <img src={largeImageUrl} alt="" />
          </Modal>
        )}
      </Container>
    );
  }
}

App.propTypes = {
  images: PropTypes.array,
  currentPage: PropTypes.number,
  searchQuery: PropTypes.string,
  largeImageUrl: PropTypes.string,
  showModal: PropTypes.bool,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default App;
