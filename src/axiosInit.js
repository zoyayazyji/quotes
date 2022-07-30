import axios from "axios";

const axiosInit = axios.create({
  baseURL: "https://js8-zoya-yazyji-default-rtdb.firebaseio.com/"
})

export default axiosInit;