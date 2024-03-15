//Now this file will help us connet to the backend
//we have already loaded axios library to connect and display the response of the rest API
import axios from "axios";

const BASE_URL_TO_CONNECT_TO= "http://localhost:8098/api/employees"

export const listOfAllEmployees =()=> axios.get(BASE_URL_TO_CONNECT_TO);
//we are returning the response received through axios library after connecting with GetMapping REST Api