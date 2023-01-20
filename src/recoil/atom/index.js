import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
import exampleData from "../../data/exampleData";

const { persistAtom } = recoilPersist({
    key: 'pencatatan-uang',
    storage: localStorage
})

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
    default: exampleData,
    effects_UNSTABLE: [persistAtom]
})

export const modeState = atom({
    key: 'modeState',
    default: 'newData'
})