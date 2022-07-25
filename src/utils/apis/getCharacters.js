import AxiosRAM from "../AxiosRAM";

const getCharacters = () => {
    return new Promise((resolve, reject) => {
        AxiosRAM.get(`character/`)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}

export default getCharacters