import { forwardRef, useImperativeHandle, useRef } from 'react'
import DatePicker from 'react-datepicker'
import { useRecoilState } from 'recoil'
import { inputState } from '../recoil/atom'

const FormInput = ({ label, type, name }, ref) => {
    const [value, setValue] = useRecoilState(inputState)
    const inputRef = useRef()

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus()
        },
        setFocus: () => {
            inputRef.current.setFocus()
        }
    }))

    const onChangeHandler = (e) => {
        const val = name === 'tanggal' ? e : e.target.value
        setValue(
            { ...value, [name]: val }
        )
    }

    return (
        <div className={`${label === 'ID' ? 'hidden' : 'flex'} flex-row mx-2`}>
            <div className='flex w-64 items-center'>
                <p className='text-lg'>{label}</p>
            </div>
            <div className='w-full'>
                {name === 'tanggal'
                    ?
                    <DatePicker
                        className='bg-white border border-black rounded my-2 py-2 px-1 w-full'
                        maxDate={new Date()}
                        dateFormat={'dd/MM/yyyy'}
                        onChange={onChangeHandler}
                        selected={value[name]}
                        ref={inputRef} />
                    :
                    <input
                        className='bg-white border border-black rounded my-2 py-2 px-1 w-full'
                        type={type}
                        name={name}
                        value={value[name]}
                        onChange={onChangeHandler}
                        ref={inputRef} />
                }
            </div>
        </div>
    )
}

export default forwardRef(FormInput)