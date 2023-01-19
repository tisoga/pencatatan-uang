import Swal from "sweetalert2-neutral"

const checkValueInput = (item, refs) => {
    if (!item.tanggal) {
        refs.current['tanggal'].setFocus()
        Swal.fire('Harap Lengkapi Seluruh Form', 'Silahkan isi Form Tanggal', 'error')
        return false 
    }
    if (!item.uang) {
        refs.current['uang'].focus()
        Swal.fire('Harap Lengkapi Seluruh Form', 'Silahkan isi Form Uang', 'error')
        return false 
    }
    if (!item.jenis) {
        Swal.fire('Harap Lengkapi Seluruh Form', 'Silahkan pilih tipe pencatatan', 'error')
        return false 
    }
    if (!item.keterangan) {
        refs.current['keterangan'].focus()
        Swal.fire('Harap Lengkapi Seluruh Form', 'Silahkan isi Form Keterangan', 'error')
        return false 
    }
    // console.log('complted')
    return true
}

export default checkValueInput