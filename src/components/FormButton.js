import { useRecoilValue, useSetRecoilState } from "recoil"
import { inputState } from "../recoil/atom"
import { dataStateWithTotal } from "../recoil/selector"

const FormButton = ({ label, btnStyle, refs }) => {
    const val = useRecoilValue(inputState)
    const setData = useSetRecoilState(dataStateWithTotal)
    const style = {
        primary: 'bg-blue-500 hover:bg-blue-700',
        success: 'bg-green-500 hover:bg-green-700',
        danger: 'bg-red-500 hover:bg-red-700',
        info: 'bg-purple-500 hover:bg-purple-700'
    }

    const onClickHandler = () => {
        // const newData = {
        //     ...val, id : Date.now()
        // }
        // setData(newData)
        refs.current['keterangan'].focus()
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