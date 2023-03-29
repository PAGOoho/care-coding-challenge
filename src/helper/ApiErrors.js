import { toast } from 'react-toastify';

// helper-function for error-catching
export const errorCheck = (err) => {
  if (err.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(err.response);

    toast.error(
      `API Error: ${err.response.status}, ${err.response.data.message}`
    );
  } else if (err.request) {
    // The request was made but no response was received
    // `err.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(err.request);

    toast.error('API Error: ' + err.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', err.message);

    toast.error('API Error: ' + err.message);
  }
};
