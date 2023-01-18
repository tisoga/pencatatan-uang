import {
  Form,
  Table
} from "./components"

import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  return (
    <div>
      <div className="bg-gray-800 flex flex-col justify-center h-14">
        <p className="text-4xl text-white text-center">Pencatatan Uang Masuk dan Keluar</p>
      </div>
      <div className="flex flex-row justify-between mx-10">
        <Table />
        <Form />
      </div>
    </div>
  )
}

export default App