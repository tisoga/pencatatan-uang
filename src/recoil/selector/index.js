import { selector } from "recoil";
import { dataState, modeState } from "../atom";

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

export const editDataState = selector({
    key: 'editDataState',
    get: ({ get }) => {
        return get(dataStateWithTotal)
    },
    set: ({ get, set }, newData) => {
        const data = [...get(dataState)]
        const dataIndex = data.findIndex((item) => newData.id === item.id)
        const tanggal = typeof newData['tanggal'] === 'number' ? new Date(newData['tanggal']) : newData['tanggal']
        data[dataIndex] = { ...newData, uang: parseInt(newData.uang), tanggal: tanggal.getTime() }
        set(dataState, data)
    }
})

export const hapusDataState = selector({
    key: 'hapusDataState',
    get: ({ get }) => {
        return get(dataStateWithTotal)
    },
    set: ({ get, set }, val) => {
        const data = [...get(dataState)]
        const newData = data.filter(item => item.id !== val.id)
        set(dataState, newData)
        set(changeModeState, 'newData')
    }
})

export const changeModeState = selector({
    key: 'changeModeState',
    get: ({ get }) => {
        return get(modeState)
    },
    set: ({ set }, val) => {
        if (val === 'updateData') set(modeState, 'updateData')
        else set(modeState, 'newData')
    }
})