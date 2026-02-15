import axios from "axios";

const bookInstance = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 1000,
  headers: {
    "content-type": "application/json",
  },
});

const unsplashInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
  timeout: 1000,
  headers: {
    "content-type": "application/json",
    Authorization: 'Client-ID Eu6MdzH8a_iqvU1h_uB6YXIphrqTLgEIqhsXByFm95U'
  },
});

export const bookAPI = {
  addBook: (request) => bookInstance.post("books", request),
  fetchBooks: () => bookInstance.get("books"),
};

export const unsplashAPI =  {
  fetchImages: () => unsplashInstance.get("/photos"),
  searchImage: () => unsplashInstance.get("/photos/random"),
};
