const Form = ({ children }) => {
    return (
        <form className="w-[60rem] mt-4 p-4 rounded bg-slate-100 mx-auto" action="">
            {children}
        </form>
    )
}

export default Form