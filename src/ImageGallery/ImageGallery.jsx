import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "../ImageGallery/ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => (
  <ul className={styles.ImageGallery}>
    {images.map(({ id, webformatURL, tags, largeImageURL }) => {
      return (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          alt={tags}
          largeImageURL={largeImageURL}
          onClick={onClick}
        />
      );
    })}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ),
  imgClick: PropTypes.func.isRequired,
};

export default ImageGallery;
