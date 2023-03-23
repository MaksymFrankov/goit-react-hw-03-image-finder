import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';


const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
         {images.map((image, index) => (
        <ImageGalleryItem key={index} image={image} index={index} />
         ))}
    </ul>
  );
};

export default ImageGallery;