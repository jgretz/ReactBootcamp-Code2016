import _ from 'lodash';
import axios from 'axios';
import { apiUrl } from './url';

// header helper
const multipartHeaders = { headers: { 'Content-Type': 'multipart/form-data' } };
const isMultipartForm = (body) => {
  let isMultipart = false;
  _.forOwn(body, (value) => {
    isMultipart |= value instanceof File;
  });
  return isMultipart;
};

// logic
export default class Http {
  get(relativeUrl, params) {
    return axios({
      method: 'get',
      url: apiUrl(relativeUrl),
      params,
    });
  }

  put(relativeUrl, body) {
    if (isMultipartForm(body)) {
      return this.postMultipartForm(relativeUrl, body);
    }

    return axios.put(apiUrl(relativeUrl), body);
  }

  post(relativeUrl, body) {
    if (isMultipartForm(body)) {
      return this.postMultipartForm(relativeUrl, body);
    }

    return axios.post(apiUrl(relativeUrl), body);
  }

  postMultipartForm(relativeUrl, body) {
    const data = new FormData();
    _.forOwn(body, (value, prop) => {
      data.append(prop, value);
    });

    return axios.post(apiUrl(relativeUrl), data, multipartHeaders);
  }

  delete(relativeUrl) {
    return axios.delete(apiUrl(relativeUrl));
  }
}
