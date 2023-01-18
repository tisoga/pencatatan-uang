import { useRecoilValue } from "recoil"
import { dataStateWithTotal } from "../recoil/selector"
import TableRow from "./TableRow"

const Table = () => {
    const tableData = useRecoilValue(dataStateWithTotal)
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
                        <TableRow data={data} key={data.id} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table