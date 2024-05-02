import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 100,
  },
  headers: {
    'X-RapidAPI-Key': '547c74bcdemsh8baed559c58e1fdp113009jsn7c1bf6864d95',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};