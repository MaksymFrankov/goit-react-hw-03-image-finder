const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '31754990-fc9ecefcb1bab85f0803676bc';

function fetchQuery(searchQuery, page) {
  return fetch(
    `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}
      &image_type=photo&orientation=horizontal&page=
      ${page}&per_page=12`
  ).then(response => response.json());
}

const api = { fetchQuery };

export default api;
