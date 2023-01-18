import { selector } from "recoil";
import { dataState } from "../atom";

export const dataStateWithTotal = selector({
    key: 'dataStateWithTotal',
    get: ({ get }) => {
        const data = [...get(dataState)]
        let total = 0
        data.sort((a, b) => a.tanggal - b.tanggal)
        data.forEach((item, index) => {
            item.jenis.toLowerCase() === 'd' ? total += parseInt(item.uang) : total -= parseInt(item.uang)
            data[index] = {
                ...data[index], total: total
            }
        })
        return data
    },
    set: ({ get, set }, newData) => {
        const data = [...get(dataState)]
        const tanggal = typeof newData['tanggal'] === 'number' ? new Date(newData['tanggal']) : newData['tanggal']
        data.push({
            ...newData, tanggal: tanggal.getTime()
        })
        set(dataState, data)
    }
})