import Modal from "./Modal";

const Input = ({
    label,
    type,
    options,
    value,
    onChange,
    modal,
    setModal,
    modalData,
    help,
    placeholder,
    numOnly,
    maxLength = 100
}) => {

    let input;
    const inputStyles = "border w-full border-slate-400 py-1 px-2 text-sm rounded outline-blue-400"

    const validateNumOnly = (val) => {
        if (/^\d*$/.test(val)) {
            onChange(val);
        }
    }

    switch (type) {
        case "text":
            input = <textarea maxLength={350} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className={`h-28 ${inputStyles}`} />
            break;

        case "select":
            input = <select value={value} onChange={(e) => onChange(e.target.value)} className={inputStyles}>
                <option disabled value="">Seleccione una opción</option>
                {options.map((option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                )))}
            </select>
            break;
        case "date":
            input = <input type="date" value={value} onChange={(e) => onChange(e.target.value)} className={inputStyles} />
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
            input = <input maxLength={maxLength} placeholder={placeholder} value={value} onChange={numOnly ? (e) => { validateNumOnly(e.target.value) } : (e) => onChange(e.target.value)} className={inputStyles} type={type} />
            break;
    }

    return (
        <>
            <label className="block">
                <div className="text-xs mb-1">
                    {help && <button tabIndex={-1} onClick={() => setModal(true)} type="button" className="mr-1 h-4 w-4 rounded-full bg-blue-600 text-white">?</button>
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