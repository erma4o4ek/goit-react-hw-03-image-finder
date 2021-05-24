import React from "react";
import PropTypes from "prop-types";
import styles from "../ImageGalleryItem/ImageGalleryItem.module.css";

const ImageGalleryItem = ({ url, imgClick }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      className={styles.ImageGalleryItemImage}
      src={url}
      alt="img"
      onClick={imgClick}
    />
  </li>
);



ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

