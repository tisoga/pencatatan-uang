const FormInput = ({ label, type, name, value }) => {
    return (
        <div className='flex flex-row mx-2'>
            <div className='flex w-64 items-center'>
                <p className='text-lg'>{label}</p>
            </div>
            <div className='w-full'>
                <input className='bg-white border border-black rounded my-2 py-2 px-1 w-full' type={type} name={name} value={value} />
            </div>
        </div>
    )
}

export default FormInput