import axios from 'axios';

const client = axios.create({
  baseURL:
    'https://outside-in-dev-api.herokuapp.com/QslGKqtVNQC7yVS60dzCNWbOPB3vVqcv/',
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
  createRestaurant(name) {
    return client.post('/restaurants', {name}).then(response => response.data);
  },
};

export default api;
