
const axios = require('axios');

const initiateAxiosConfig = () => {
  axios.defaults.baseURL = 'https://gateway.eu1.mindsphere.io';
  axios.defaults.headers.common['Authorization'] = 'example';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  // Interceptors to check the request before calling
  axios.interceptors.request.use((request) => {
    // If the request is to renew the token, then dont include Authorization in header
    if (request.url === '/api/technicaltokenmanager/v3/oauth/token'){
      request.headers.common['Authorization'] = '';
    }
    return request
  })

  // Interceptors to check the response
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      const originalRequest = error.config;
      // If the response is unauthorized (401) or access denied (403), then renew the token and include new token in header, then execute the failed request again.
      if ((error.response.status === 401 && !originalRequest._retry) || (error.response.status === 403 && !originalRequest._retry)) {
        originalRequest._retry = true;
        // Process of renew the token
        const clientId = process.env.MDSP_KEY_STORE_CLIENT_ID;
        const clientSecret = process.env.MDSP_KEY_STORE_CLIENT_SECRET;
        const encodedString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
        const data = {
            appName: process.env.MDSP_OS_VM_APP_NAME,
            appVersion: process.env.MDSP_OS_VM_APP_VERSION,
            hostTenant: process.env.MDSP_HOST_TENANT,
            userTenant: process.env.MDSP_USER_TENANT,
            json: true
        }
        try {
            return axios.post('/api/technicaltokenmanager/v3/oauth/token', data, {
                headers: {
                    'X-SPACE-AUTH-KEY' : `Basic ${encodedString}`,
                    "Content-Type": "application/json"
                }
            }).then((res) => {
              // Change Authorization header
              axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access_token;
              originalRequest.headers['Authorization'] = 'Bearer ' + res.data.access_token;
              // return originalRequest object with Axios. It means that execute the failed request
              return axios.request(originalRequest);
            })
        } catch (err) {
            // console.log(err)
        }
      }
      // // return Error object with Promise
      return Promise.reject(error);
    }
  );
}

module.exports = initiateAxiosConfig
