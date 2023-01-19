import { atom } from "recoil";

export const inputState = atom({
    key: 'inputState',
    default: {
        id: 'new',
        uang: 0,
        jenis: '',
        keterangan: '',
        tanggal: Date.now(),
    }
})

export const dataState = atom({
    key: 'dataState',
    default: [
        {
            id: '1',
            uang: 100000,
            jenis: 'D',
            keterangan: 'Start',
            tanggal: 1672746403000,
        },
        {
            id: '2',
            uang: 1000,
            jenis: 'K',
            keterangan: 'Beli Cilok',
            tanggal: 1673351203000,
        },
    ]
})

export const modeState = atom({
    key: 'modeState',
    default: 'newData'
})