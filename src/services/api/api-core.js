
import axios from 'axios';

const api = axios.create({
  // could be set by settings in  window.SMP_CONFIG
  baseURL: `https://api-qa.fairgarage.de/smp/api/`,
  headers: {
    // Authorization: 'Bearer {token}'
  },
  params: {
    contextKey: 'BIhYGSk-DlrnijwhGHI-FwoS4etKfqi',
  },
});

export default api;
