
<script>
import axios from 'axios';

const api = axios.create({
  baseURL: `https://api-qa.fairgarage.de/smp/api/`,
  headers: {
    // Authorization: 'Bearer {token}'
  },
  params: {
    contextKey: 'BIhYGSk-DlrnijwhGHI-FwoS4etKfqi',
  },
});

export default {
  name: 'Api',
  data() {
    return {};
  },

  listPartQualities(params) {
    return api.get('/partqualities', {params});
  },
};
</script>
