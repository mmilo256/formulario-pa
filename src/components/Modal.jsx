const Modal = ({ modal, setModal, modalData }) => {

    if (!modal) return null

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg">
                <div className="flex justify-between items-center border-b p-4">
                    <h2 className="text-xl font-semibold">{modalData.title}</h2>
                    <button onClick={() => { setModal(false) }} className="text-gray-500 hover:text-gray-700">
                        ✖
                    </button>
                </div>
                <div className="p-4">
                    {modalData.body.map((p, index) => (
                        <p className="mb-2 list-item ml-4 text-sm" key={index}>{p}</p>
                    ))}
                </div>
                <div className="flex justify-end p-4 border-t">
                    <button onClick={() => { setModal(false) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal