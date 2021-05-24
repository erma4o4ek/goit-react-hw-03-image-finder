import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "../ImageGallery/ImageGallery.module.css";

const ImageGallery = ({ images, imgClick }) => (
  <ul className={styles.ImageGallery}>
    {images.map(({ id, webformatURL, user, largeImageURL }) => {
      const handleClick = () => imgClick(largeImageURL);
      return (
        <ImageGalleryItem
          key={id}
          name={user}
          url={webformatURL}
          onClick={handleClick}
        />
      );
    })}
  </ul>
);



ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  imgClick: PropTypes.func.isRequired,
};
export default ImageGallery;
