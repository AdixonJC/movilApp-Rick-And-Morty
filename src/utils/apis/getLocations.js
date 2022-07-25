import AxiosRAM from "../AxiosRAM";

const getLocations = () => {
    return new Promise((resolve, reject) => {
        AxiosRAM.get(`location/`)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}

export default getLocations