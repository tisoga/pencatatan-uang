import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { inputState } from "../recoil/atom"
import { changeModeState, dataStateWithTotal } from "../recoil/selector"
import TableRow from "./TableRow"

const Table = ({ refs }) => {
    const tableData = useRecoilValue(dataStateWithTotal)
    const [inputVal, setInputVal] = useRecoilState(inputState)
    const changeMode = useSetRecoilState(changeModeState)

    const onClickHandler = (id) => {
        refs.current[id].clicked()
        changeMode('updateData')
        tableData.forEach((item) => {
            if (item.id !== id) {
                refs.current[item.id].unClicked()
            }
        })
        setInputVal(
            { ...inputVal, id: id }
        )
    }

    return (
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
                    {tableData.map(data => (
                        <TableRow data={data} key={data.id} ref={el => (refs.current[data.id]) = el} onClick={onClickHandler} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table