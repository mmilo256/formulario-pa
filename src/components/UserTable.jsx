import { useEffect } from "react"
import useProcedureStore from "../stores/useProcedureStore"

const UserTable = () => {

    const procedures = useProcedureStore(state => state.procedures)
    const addProcedure = useProcedureStore(state => state.addProcedure)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('procedures'))
        addProcedure(data)
    }, [addProcedure])

    return (

        procedures ? <div className="overflow-x-scroll shadow border">
            <table onClick={() => { console.log(procedures) }} className="w-full text-sm mt-2">
                <thead>
                    <tr>
                        <th className="bg-black text-white text-left px-2">Nombre del procedimiento</th>
                        <th className="bg-black text-white text-left px-2">Tipo de registro</th>
                        <th className="bg-black text-white text-left px-2">Área responsable</th>
                        <th className="bg-black text-white text-left px-2">Cargo del responsable</th>
                    </tr>
                </thead>
                <tbody>
                    {procedures.length > 0 && procedures.map((procedure, index) => (
                        <tr key={index}>
                            <td className="border border-slate-500 px-2">{procedure.name}</td>
                            <td className="border border-slate-500 px-2">{procedure.type}</td>
                            <td className="border border-slate-500 px-2">{procedure.area}</td>
                            <td className="border border-slate-500 px-2">{procedure.person}</td>
                        </tr>
                    ))}
                    {/* <tr>
                <td className="border border-slate-500 px-2">prodecimiento administrativo</td>
                <td className="border border-slate-500 px-2">PA de función específica</td>
                <td className="border border-slate-500 px-2">Administración municipal</td>
                <td className="border border-slate-500 px-2">Ingeniero Informático</td>
            </tr> */}
                </tbody>
            </table>
        </div> : <p className="text-center text-slate-500 text-xl">No ha registrado ningún procedimiento administrativo</p>
    )
}

export default UserTable