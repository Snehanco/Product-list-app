import axios from "axios";

const BASE_URL_TO_CONNECT= "http://localhost:8098/api/products"

export const listOfAllProducts =()=> axios.get(BASE_URL_TO_CONNECT);