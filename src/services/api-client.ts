import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7e396feaa1cf4cf281dc88ec247a7917',
  },
});
