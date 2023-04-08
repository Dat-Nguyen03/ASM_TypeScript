import axios from "axios";

// const value = localStorage.getItem("user");
// if (typeof value === "string") {
//   const data = JSON.parse(value);
//   console.log(data);
// }

const { accessToken } = JSON.parse(localStorage.getItem("user") || "false");

const instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

export default instance;
