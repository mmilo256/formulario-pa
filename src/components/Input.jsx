import Modal from "./Modal";

const Input = ({ label, type, options, value, onChange, modal, setModal, modalData, help }) => {

    let input;
    const inputStyles = "border w-full border-slate-400 py-1 px-2 text-sm rounded"

    switch (type) {
        case "text":
            input = <textarea value={value} onChange={onChange} className={inputStyles} />
            break;

        case "select":
            input = <select value={value} onChange={onChange} className={inputStyles}>
                {options.map((option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                )))}
            </select>
            break;
        case "date":
            input = <input type="date" value={value} onChange={onChange} className={inputStyles} />
            break;
        case "multiple":
            input =
                <div>
                    {options.map((option) => (
                        <label key={option.label} className="flex gap-2 text-sm mb-1 items-center">
                            <input
                                type="checkbox"
                                checked={option.checked}
                                onChange={(e) => { option.onChange(e.target.checked) }}
                            />
                            {option.label}
                        </label>
                    ))}
                </div>

            break;
        default:
            input = <input value={value} onChange={onChange} className={inputStyles} type="text" />
            break;
    }

    return (
        <>
            <label className="block">
                <div className="text-xs mb-1">
                    {help && <button onClick={() => setModal(true)} type="button" className="mr-1 h-4 w-4 rounded-full bg-blue-600 text-white">?</button>
                    }
                    <p className="inline">{label}</p>
                </div>
                {input}
            </label>
            <Modal modal={modal} setModal={setModal} modalData={modalData} />
        </>
    )
}

export default Input