
import api from './api-core';

/**
 * @description Use API to list part-qualities
 * @param {object} params
 * @return {Promise}
 */
function listPartQualities(params) {
  return api.get('/partqualities', {params});
}

export default listPartQualities;
