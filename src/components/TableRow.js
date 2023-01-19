import { forwardRef, useImperativeHandle, useRef } from "react"
import { convertToRupiah } from "../functions"
import convertDate from "../functions/convertDate"

const TableRow = ({ data, onClick }, ref) => {
    const tableRef = useRef()

    useImperativeHandle(ref, () => ({
        clicked: () => {
            tableRef.current.className = 'bg-gray-200 hover:bg-gray-200 cursor-pointer'
        },
        unClicked: () => {
            tableRef.current.className = 'bg-white hover:bg-gray-200 cursor-pointer'
        }
    }))
    

    return (
        <tr className="bg-white hover:bg-gray-200 cursor-pointer" ref={tableRef} onClick={() => onClick(data.id)}>
            <td className="text-center border border-black">{convertDate(data.tanggal)}</td>
            {data.jenis === 'D' ?
                <>
                    <td className="text-center border border-black">{convertToRupiah(data.uang)}</td>
                    <td className="text-center border border-black">-</td>
                </>
                :
                <>
                    <td className="text-center border border-black">-</td>
                    <td className="text-center border border-black">{convertToRupiah(data.uang)}</td>
                </>
            }
            <td className="text-center border border-black">{convertToRupiah(data.total)}</td>
            <td className="text-center border border-black">{data.keterangan}</td>
        </tr>
    )
}

export default forwardRef(TableRow)