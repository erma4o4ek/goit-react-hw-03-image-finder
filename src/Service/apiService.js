import axios from "axios";
import PropTypes from 'prop-types';

const API_KEY = '20826045-1b0ebd8606e719c8c98efe6c3';
const BASE_URL = 'https://pixabay.com/api';


const apiService = ({ searchQuery = '', currentPage = 1}) => {
  return axios.get (`${BASE_URL}/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
  .then(response => response.data.hits); 
};

apiService.propTypes = {
  searchQuery: PropTypes.string.isRequired,    
  currentPage: PropTypes.number.isRequired,      
};

export default apiService;

