import axios from "axios";

// export const userInstance = axios.create({
//   baseURL: 'https://fastdata.sizeandme.com/'
// });

// export const loginInstance = axios.create({
//   baseURL: 'https://verify.sizeandme.com/api'
// });

export const userInstance = axios.create({
  baseURL: "http://localhost:3001/"
});

export const loginInstance = axios.create({
  baseURL: "http://localhost:3002/api"
});
