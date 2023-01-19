import { useEffect, useRef } from "react";
import {
  Form,
  Table
} from "./components"

import "react-datepicker/dist/react-datepicker.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { inputState } from "./recoil/atom";
import { dataStateWithTotal } from "./recoil/selector";

const App = () => {
  const refs = useRef({})
  const [inputVal, setInputVal] = useRecoilState(inputState)
  const dataTable = useRecoilValue(dataStateWithTotal)

  useEffect(() => {
    if (inputVal.id !== 'new') {
      const data = dataTable.find(x => x.id === inputVal.id)
      if (data.jenis === 'K') {
        refs.current['radio'].checked('kredit')
      }
      else {
        refs.current['radio'].checked('debit')
      }
      setInputVal(data)
    }
    // eslint-disable-next-line
  }, [inputVal.id, setInputVal])

  return (
    <div>
      <div className="bg-gray-800 flex flex-col justify-center h-14">
        <p className="text-4xl text-white text-center">Pencatatan Uang Masuk dan Keluar</p>
      </div>
      <div className="flex flex-row justify-between mx-10">
        <Table refs={refs} />
        <Form refs={refs} />
      </div>
    </div>
  )
}

export default App