import { forwardRef, useId, useImperativeHandle, useRef } from "react"
import { useRecoilState } from "recoil"
import { inputState } from "../recoil/atom"

const FormRadio = ({ label }, ref) => {
    const radioRefs = useRef({})
    const [value, setValue] = useRecoilState(inputState)
    const [idDebit, idKredit] = useId()

    useImperativeHandle(ref, () => ({
        checked: (key) => {
            radioRefs.current[key].checked = true
        },
        unChecked: () => {
            radioRefs.current['debit'].checked = false
            radioRefs.current['kredit'].checked = false
        }
    }))

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
                <input className='mx-1' id={idDebit} name={'radioButton'} onChange={onChangeHandler} type={'radio'} value={'debit'} defaultChecked={value['jenis'] === 'D'}
                    ref={el => (radioRefs.current['debit'] = el)} />
                <label className='mr-4' htmlFor={idDebit}>{'Masuk'}</label>
                <input className='mx-1' id={idKredit} name={'radioButton'} onChange={onChangeHandler} type={'radio'} value={'kredit'} defaultChecked={value['jenis'] === 'K'}
                    ref={el => (radioRefs.current['kredit'] = el)} />
                <label className='mr-4' htmlFor={idKredit}>{'Keluar'}</label>
            </div>
        </div>
    )
}

export default forwardRef(FormRadio)