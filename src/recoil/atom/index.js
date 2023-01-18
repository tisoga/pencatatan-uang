import { atom } from "recoil";

export const inputState = atom({
    key: 'inputState',
    default: {
        id: 'new',
        uang: '',
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
            tanggal: Date.now(),
        },
        {
            id: '2',
            uang: 1000,
            jenis: 'K',
            keterangan: 'Test 2',
            tanggal: Date.now(),
        },
    ]
})