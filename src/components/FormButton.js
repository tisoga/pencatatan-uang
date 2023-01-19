import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"
import { inputState, modeState } from "../recoil/atom"
import { dataStateWithTotal } from "../recoil/selector"

const FormButton = ({ label, btnStyle, refs, onClick, setData }) => {
    const val = useRecoilValue(inputState)
    const changeMode = useSetRecoilState(modeState)
    const resetVal = useResetRecoilState(inputState)
    const dataTable = useRecoilValue(dataStateWithTotal)
    const style = {
        primary: 'bg-blue-500 hover:bg-blue-700',
        success: 'bg-green-500 hover:bg-green-700',
        danger: 'bg-red-500 hover:bg-red-700',
        info: 'bg-purple-500 hover:bg-purple-700'
    }

    const onClickHandler = () => {
        if (label === 'Tambah Data Baru') {
            onClick(val, refs, changeMode, resetVal)
        }
        else if (label === 'Export Data to Excel File') {
            onClick(dataTable)
        }
        else {
            onClick(val, refs, setData, resetVal)
        }
    }

    return (
        <button
            className={'border border-black w-full py-2 my-1 text-white rounded hover:text-white font-bold ' + style[btnStyle]}
            type={'button'}
            onClick={onClickHandler}>{label}
        </button>
    )
}

export default FormButton