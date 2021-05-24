import React from 'react';
import Loader from "react-loader-spinner";
import styles from "../Loader/Loader.module.css";

const LoaderComponent = () => {
  return (
    <div className={styles.loader}>
      <Loader
        type="Circles"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={4000}
      />
    </div>
  );
};

export default LoaderComponent;
