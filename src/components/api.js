import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '39323740-3487a835420c601222e532d94';

export const fetchImg = async (query, page) => {
  const response = await axios.get(
    `/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
