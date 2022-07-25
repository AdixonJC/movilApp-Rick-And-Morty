import AxiosRAM from "../AxiosRAM";

const getEpisode = () => {
    return new Promise((resolve, reject) => {
        AxiosRAM.get(`episode/`)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}

export default getEpisode