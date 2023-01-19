import axios from "axios"
import Swal from "sweetalert2-neutral"
import { API_EXPORT_URL } from "../config"
import checkValueInput from "./checkValueInput"
import convertDate from "./convertDate"

export const onClickBtnSave = (val, refs, setData, resetVal) => {
    if (!checkValueInput(val, refs)) return 0
    const newData = {
        ...val, id: Date.now(), uang: parseInt(val.uang, 10)
    }
    setData(newData)
    Swal.fire({
        title: 'Success',
        text: 'Data Berhasil ditambahkan',
        icon: 'success'
    })
    resetVal()
    refs.current['radio'].unChecked()
}

export const onClickBtnEdit = (val, refs, setData, resetVal) => {
    if (!checkValueInput(val, refs)) return 0
    setData(val)
    resetVal()
    Swal.fire({
        title: 'Success',
        text: 'Data Berhasil diubah',
        icon: 'success'
    })
    refs.current['radio'].unChecked()
}

export const onClickBtnDel = async (val, refs, setData, resetVal) => {
    if (!checkValueInput(val, refs)) return 0
    const result = await Swal.fire({
        title: 'Confirmation',
        text: 'Apakah Anda Ingin Menghapus Data ini',
        icon: 'question',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak'
    })
    if (result.isConfirmed) {
        setData(val)
        resetVal()
        Swal.fire({
            title: 'Success',
            text: 'Data Berhasil dihapus',
            icon: 'success'
        })
        refs.current['radio'].unChecked()
    }
}

export const onClickBtnExport = async (dataTable) => {
    const fileName = `Data Pencatatan Uang - ${convertDate(Date.now()).replaceAll('-', '_')}.xlsx`
    const result = await Swal.fire({
        title: 'Confirmation',
        text: 'Apakah Anda ingin mengexport data ini menjadi file Excel, setelah anda menekan tombol Ya file akan otomatis terdownload',
        icon: 'question',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak'
    })
    if (result.isConfirmed) {
        axios({
            url: API_EXPORT_URL,
            method: 'POST',
            responseType: 'blob', // important
            data: { data: dataTable }
        }).then((response) => {
            // create file link in browser's memory
            const href = URL.createObjectURL(response.data);

            // create "a" HTML element with href to file & click
            const link = document.createElement('a');
            link.href = href;
            link.setAttribute('download', fileName); //or any other extension
            document.body.appendChild(link);
            link.click();

            // clean up "a" element & remove ObjectURL
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
        });
    }
}