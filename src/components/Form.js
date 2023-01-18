import FormButton from "./FormButton"
import FormInput from "./FormInput"
import FormRadio from "./FormRadio"

const Form = () => {
    return (
        <div className="flex flex-col w-96 px-1 mx-3 my-5 bg-white rounded-md shadow-xl sticky top-5 right-0 min-h-[380px] max-h-[380px]">
            <h3 className="text-xl text-black font-bold underline mx-2 text-center">Tambah Data</h3>
            <form>
                <FormInput label={'ID'} name='id' type={'text'} />
                <FormInput label={'Tanggal'} name='tanggal' type={'text'} />
                <FormInput label={'Jumlah Uang'} name='uang' type={'number'} />
                <FormRadio label={'Masuk/Keluar'} />
                <FormInput label={'Keterangan'} name='keterangan' type={'text'} />
                <FormButton label={'Simpan Data'} btnStyle={'primary'} />
                <div className='flex flex-row gap-1'>
                    <FormButton btnStyle={'success'} label={'Edit'} />
                    <FormButton btnStyle={'danger'} label={'Hapus'} />
                </div>
                <FormButton label={'Export Data to Excel File'} btnStyle={'info'} />
            </form>
        </div>
    )
}

export default Form