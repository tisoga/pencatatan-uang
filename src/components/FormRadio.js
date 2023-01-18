import { useRecoilState } from "recoil"
import { inputState } from "../recoil/atom"

const FormRadio = ({ label }) => {
    const [value, setValue] = useRecoilState(inputState)

    const onChangeHandler = (e) => {
        const val = e.currentTarget.value === 'debit' ? 'D' : 'K'
        setValue(
            { ...value, jenis: val }
        )
    }

    return (
        <div className='flex flex-row mx-2'>
            <div className='flex w-64 items-center'>
                <label className='text-lg'>{label}</label>
            </div>
            <div className='w-full'>
                <input className='mx-1' id={'debit'} name={'radioButton'} onChange={onChangeHandler} type={'radio'} value={'debit'} defaultChecked={value['jenis'] === 'D'}/>
                <label className='mr-4' htmlFor={'debit'}>{'Masuk'}</label>
                <input className='mx-1' id={'kredit'} name={'radioButton'} onChange={onChangeHandler} type={'radio'} value={'kredit'} defaultChecked={value['jenis'] === 'K'}/>
                <label className='mr-4' htmlFor={'kredit'}>{'Keluar'}</label>
            </div>
        </div>
    )
}

export default FormRadio