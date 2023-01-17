const FormButton = ({ label, btnStyle, onClick }) => {
    const buttonStyle = {
        primary: 'bg-blue-500 hover:bg-blue-700',
        success: 'bg-green-500 hover:bg-green-700',
        danger: 'bg-red-500 hover:bg-red-700',
        info: 'bg-purple-500 hover:bg-purple-700'
    }
    return (
        <button
            className={'border border-black w-full py-2 my-1 text-white rounded hover:text-white font-bold ' + buttonStyle[btnStyle]}
            type={'button'}
            onClick={onClick}>{label}
        </button>
    )
}

export default FormButton