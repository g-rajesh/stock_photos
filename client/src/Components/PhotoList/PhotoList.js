import React, { useEffect } from "react";

import SinglePhoto from "./SinglePhoto";
import styles from "./PhotoList.module.css";

const PhotoList = ({ data }) => {
     return (
          <div className={styles.photolist}>
               {data &&
                    data.getPhotos.photos.map((photo, index) => {
                         return <SinglePhoto key={index} {...photo} />;
                    })}
          </div>
     );
};

export default PhotoList;
