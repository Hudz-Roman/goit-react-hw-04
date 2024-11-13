import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const API_KEY = '274WIVsqkjCa9pYYmCFO6ryZWLZ39IBfhKQtIYxpENE';

const fetchImages = async () => {
  const resp = await axios.get('photos/', {
    params: {
      client_id: API_KEY,
    },
  });
  return resp.likes;
};

export default fetchImages;
