import convertDate from "../functions/convertDate"

const TableRow = ({ data }) => {
    return (
        <tr className="bg-white hover:bg-gray-200 cursor-pointer">
            <td className="text-center border border-black">{convertDate(data.tanggal)}</td>
            {data.jenis === 'D' ?
                <>
                    <td className="text-center border border-black">{data.uang}</td>
                    <td className="text-center border border-black">-</td>
                </>
                :
                <>
                    <td className="text-center border border-black">-</td>
                    <td className="text-center border border-black">{data.uang}</td>
                </>
            }
            <td className="text-center border border-black">{data.total}</td>
            <td className="text-center border border-black">{data.keterangan}</td>
        </tr>
    )
}

export default TableRow