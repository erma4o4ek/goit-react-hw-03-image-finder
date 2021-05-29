import React from "react";
// import PropTypes from "prop-types";
import styles from "../ImageGalleryItem/ImageGalleryItem.module.css";

function ImageGalleryItem({ id, src, alt, largeImageURL, onClick }) {
  return (
    <li key={id} className={styles.ImageGalleryItem}>
      <img
        src={src}
        alt={alt}
        className={styles.ImageGalleryItemImage}
        onClick={() => {
          onClick(largeImageURL);
        }}
        data-source={largeImageURL}
      />
    </li>
  );
}
export default ImageGalleryItem;