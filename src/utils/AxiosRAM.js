import axios from "axios";

const AxiosRAM = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    headers: {
        'Content-type': 'application/json',
         Accept: 'application/json',
    }
})

export default AxiosRAM