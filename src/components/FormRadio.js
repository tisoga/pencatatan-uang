const FormRadio = ({ label, onChange }) => {
    const RadioButton = ({ radioText, id }) => {
        return (
            <>
                <input className='mx-1' id={id} name={'radioButton'}  onChange={onChange} type={'radio'} value={'debit'}/>
                <label className='mr-4' htmlFor={id}>{radioText}</label>
            </>
        )
    }
    return (
        <div className='flex flex-row mx-2'>
            <div className='flex w-64 items-center'>
                <label className='text-lg'>{label}</label>
            </div>
            <div className='w-full'>
                <RadioButton radioText={'Masuk'} id={'debit'} />
                <RadioButton radioText={'Keluar'} id={'kredit'} />
            </div>
        </div>
    )
}

export default FormRadio