import { FormButton, FormInput, FormRadio, TableRow } from "./components"

const App = () => {
  return (
    <div>
      <div className="bg-gray-800 flex flex-col justify-center h-14">
        <p className="text-4xl text-white text-center">Pencatatan Uang Masuk dan Keluar</p>
      </div>
      <div className="flex flex-row justify-between mx-10">
        <div className="my-5">
          <table className="table-fixed">
            <thead className="bg-white">
              <tr>
                <th className="border border-black text-lg w-40">Tanggal</th>
                <th className="border border-black text-lg w-40">Masuk</th>
                <th className="border border-black text-lg w-40">Keluar</th>
                <th className="border border-black text-lg w-40">Sisa</th>
                <th className="border border-black text-lg w-60">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <TableRow />
              <TableRow />
              <TableRow />
            </tbody>
          </table>
        </div>
        <div className="flex flex-col w-96 px-1 mx-3 my-5 bg-white rounded-md shadow-xl sticky top-5 right-0 min-h-[380px] max-h-[380px]">
          <h3 className="text-xl text-black font-bold underline mx-2 text-center">Tambah Data</h3>
          <form>
            <FormInput label={'Tanggal'} name='tanggal' type={'text'} />
            <FormInput label={'Jumlah Uang'} name='uang' type={'number'} />
            <FormRadio label={'Masuk/Keluar'} />
            <FormInput label={'Keterangan'} name='keterangan' type={'text'} />
            <FormButton label={'Simpan Data'} btnStyle={'primary'} />
            <div className='flex flex-row gap-1'>
              <FormButton btnStyle={'success'} label={'Edit'} />
              <FormButton btnStyle={'danger'} label={'Hapus'}  />
            </div>
            <FormButton label={'Export Data to Excel File'} btnStyle={'info'} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default App