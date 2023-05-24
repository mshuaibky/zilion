import axios from "axios";

const baseUrl = axios.create({ baseURL: 'https://server_shuhaib.dynotxt.com/', withCredentials: true })
export default baseUrl;
