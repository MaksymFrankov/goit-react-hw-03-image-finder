import React, { useState } from 'react';
import SearchBar from './Searchbar';
import ImageGallery from './ImageGallery';

function fetchImages(options) {
  // Set default values if options are not provided
  options = options || {};
  options.q = options.q || 'cat'; // default to searching for cats
  options.page = options.page || 1; // default to first page
  options.per_page = options.per_page || 12; // default to 12 images per page
  options.key = options.key || '31754990-fc9ecefcb1bab85f0803676bc'; // your API key

  // Construct query string from options
  const queryParams = Object.keys(options)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(options[key]))
    .join('&');

  // Use query string in fetch request
  return fetch(`https://pixabay.com/api/?${queryParams}`)
    .then(response => response.json())
    .then(data => data.hits)
    .catch(error => console.error(error));
}

const App = () => {
  const [images, setImages] = useState([]);

  const handleSearch = (query) => {
    fetchImages({ q: query })
      .then((images) => setImages(images))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} />
    </div>
  );
};

export default App;