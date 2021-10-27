import axios from 'axios';

const API_KEY = 'f9473a55788d30598282128bfd217ab8';

export default axios.create({
  baseURL: 'https://api.scripture.api.bible/v1/bibles',
  headers: {
    'api-key': API_KEY,
  },
});
