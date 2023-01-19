import { useEffect } from "react"
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"
import { onClickBtnDel, onClickBtnEdit, onClickBtnSave, onClickBtnExport } from "../functions"
import { inputState } from "../recoil/atom"
import { changeModeState, dataStateWithTotal, editDataState, hapusDataState } from "../recoil/selector"
import FormButton from "./FormButton"
import FormInput from "./FormInput"
import FormRadio from "./FormRadio"

const Form = ({ refs }) => {
    const [mode, changeMode] = useRecoilState(changeModeState)
    const inputVal = useRecoilValue(inputState)
    const newData = useSetRecoilState(dataStateWithTotal)
    const editData = useSetRecoilState(editDataState)
    const hapusData = useSetRecoilState(hapusDataState)
    const resetVal = useResetRecoilState(inputState)

    useEffect(() => {
        if (mode === 'newData' && inputVal.id !== 'new') {
            refs.current[inputVal.id].unClicked()
            refs.current['radio'].unChecked()
            resetVal()
        }
        // eslint-disable-next-line
    }, [mode])

    return (
        <div className="flex flex-col w-96 px-1 mx-3 my-5 bg-white rounded-md shadow-xl sticky top-5 right-0 min-h-[380px] max-h-[380px]">
            <h3 className="text-xl text-black font-bold underline mx-2 text-center">{mode === 'newData' ? 'Tambah ' : 'Edit/Hapus '}Data</h3>
            <form onSubmit={(e) => e.preventDefault()}>
                <FormInput label={'ID'} name='id' type={'text'} />
                <FormInput label={'Tanggal'} name='tanggal' type={'text'} ref={el => (refs.current['tanggal'] = el)} />
                <FormInput label={'Jumlah Uang'} name='uang' type={'number'} ref={el => (refs.current['uang'] = el)} />
                <FormRadio label={'Masuk/Keluar'} ref={el => (refs.current['radio'] = el)} />
                <FormInput label={'Keterangan'} name='keterangan' type={'text'} ref={el => (refs.current['keterangan'] = el)} />
                <FormButton
                    label={mode === 'newData' ? 'Simpan Data' : 'Tambah Data Baru'}
                    btnStyle={'primary'}
                    refs={refs}
                    setData={newData}
                    onClick={mode === 'newData' ? onClickBtnSave : changeMode} />
                {mode === 'updateData' &&
                    <div className='flex flex-row gap-1'>
                        <FormButton
                            btnStyle={'success'}
                            label={'Edit'}
                            refs={refs}
                            setData={editData}
                            onClick={onClickBtnEdit} />
                        <FormButton
                            btnStyle={'danger'}
                            label={'Hapus'}
                            refs={refs}
                            setData={hapusData}
                            onClick={onClickBtnDel} />
                    </div>
                }
                <FormButton
                    label={'Export Data to Excel File'}
                    btnStyle={'info'}
                    refs={refs}
                    onClick={onClickBtnExport} />
            </form>
        </div>
    )
}

export default Form