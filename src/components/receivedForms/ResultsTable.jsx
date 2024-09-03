import { API_URL } from "../../constants/constants"

const ResultsTable = ({ data, reloadTable, setReloadTable }) => {

    const headerStyle = "bg-slate-800 px-2 text-xs text-white font-normal min-w-40 border border-white"
    const cellStyle = "border px-2 w-64"

    const checkItem = async (procedure) => {
        await fetch(`${API_URL}/${procedure.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ marcado: !procedure.marcado })
        })
        setReloadTable(!reloadTable)
    }


    return (
        <div className="shadow rounded overflow-x-scroll">
            <table className="text-left text-xs">
                <thead>
                    <tr>
                        <th className="bg-lime-400"></th>
                        <th className="bg-blue-700 text-white text-center" colSpan={9}>1. Identificación</th>
                        <th className="bg-red-700 text-white text-center" colSpan={6}>2. Marco normativo</th>
                        <th className="bg-green-700 text-white text-center" colSpan={7}>3. Usuarios</th>
                        <th className="bg-purple-700 text-white text-center" colSpan={12}>4. Soporte electrónico</th>
                        <th className="bg-amber-700 text-white text-center" colSpan={3}>5. Identidad digital</th>
                        <th className="bg-cyan-700 text-white text-center" colSpan={7}>6. Notificaciones</th>
                        <th className="bg-red-700 text-white text-center" colSpan={8}>7. Datos y documentos requeridos</th>
                    </tr>
                    <tr>
                        <th className="w-auto bg-lime-400">Marcado</th>
                        <th className={headerStyle}>Nombre del procedimiento</th>
                        <th className={headerStyle}>Tipo de registro</th>
                        <th className={headerStyle}>Descripción</th>
                        <th className={headerStyle}>Área responsable</th>
                        <th className={headerStyle}>Cargo responsable</th>
                        <th className={headerStyle}>Tipo de inicio</th>
                        <th className={headerStyle}>Acto de inicio</th>
                        <th className={headerStyle}>Acto de término</th>
                        <th className={headerStyle}>Producto Institucional</th>

                        <th className={headerStyle}>Número de ley</th>
                        <th className={headerStyle}>URL de la ley en Ley Chile</th>
                        <th className={headerStyle}>Otras fuentes normativas</th>
                        <th className={headerStyle}>Tipo de fuente normativa</th>
                        <th className={headerStyle}>Nombre de la fuente normativa</th>
                        <th className={headerStyle}>URL de la fuente normativa</th>

                        <th className={headerStyle}>Pago asociado</th>
                        <th className={headerStyle}>Tipo de moneda</th>
                        <th className={headerStyle}>Monto</th>
                        <th className={headerStyle}>Tipo de usuario</th>
                        <th className={headerStyle}>Segmento de usuarios</th>
                        <th className={headerStyle}>Relación con Registro Social de Hogares y/o Registro de Información Social</th>
                        <th className={headerStyle}>Disponibilidad</th>

                        <th className={headerStyle}>Nivel de digitalización</th>
                        <th className={headerStyle}>Fecha de digitalización</th>
                        <th className={headerStyle}>Canales de atención</th>
                        <th className={headerStyle}>Canales transaccionales</th>
                        <th className={headerStyle}>Tipo de expediente</th>
                        <th className={headerStyle}>Acceso al expediente</th>
                        <th className={headerStyle}>URL de inicio</th>
                        <th className={headerStyle}>Ficha en ChileAtiende</th>
                        <th className={headerStyle}>URL ficha en ChileAtiende</th>
                        <th className={headerStyle}>Número de plataformas electrónicas</th>
                        <th className={headerStyle}>Alcance de las plataformas</th>
                        <th className={headerStyle}>Plataforma usada para la digitalización</th>

                        <th className={headerStyle}>Autenticación de usuarios</th>
                        <th className={headerStyle}>Autenticación de funcionarios</th>
                        <th className={headerStyle}>Firma electrónica avanzada</th>

                        <th className={headerStyle}>Notificaciones practicadas</th>
                        <th className={headerStyle}>Etapa de las notificaciones</th>
                        <th className={headerStyle}>Notificación en etapa de inicio</th>
                        <th className={headerStyle}>Notificación en etapa de instrucción</th>
                        <th className={headerStyle}>Notificación en etapa de término</th>
                        <th className={headerStyle}>Medio de comunicaciones institucionales</th>
                        <th className={headerStyle}>Medio de comunicaciones personales</th>

                        <th className={headerStyle}>Documentos de otros órganos del Estado</th>
                        <th className={headerStyle}>Medio para obtener documentos de otros órganos del Estado</th>
                        <th className={headerStyle}>Medio utilizado para interoperar electrónicamente</th>
                        <th className={headerStyle}>Documentos e institución que los provee</th>
                        <th className={headerStyle}>Servicio web que consume a través de PISEE u otro medio</th>
                        <th className={headerStyle}>Documento notarial</th>
                        <th className={headerStyle}>Nombre del documento notarial</th>
                        <th className={headerStyle}>Medio usado para enviar comunicaciones oficiales entre órganos del Estado</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((procedure, index) => (
                        <tr key={index}>
                            <td className={`${cellStyle}`}>
                                <button className="block relative h-8 w-8 bg-white border border-black" type="button" onClick={() => { checkItem(procedure) }} >
                                    {procedure.marcado && <span className="absolute inset-0 text-2xl text-green-500 flex items-center justify-center">X</span>}
                                </button>
                            </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.nombrePA} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.tipoRegistro} </td>
                            <td className={`border px-2 w-auto min-w-96 ${procedure.marcado && "bg-green-300"}`}> {procedure.descripcion} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.areaResponsable} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.cargoResponsable} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.tipoInicio} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.actoInicio} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.actoTermino} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.prodInstitucional} </td>

                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.numLey} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.urlLey} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.fuentesNorm} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.tipoFuente} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.nombreFuente} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.urlFuente} </td>

                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.pago} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.tipoMoneda} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.monto} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.tipoUsuario} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.segmentoUsuarios} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.rsh} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.disponibilidad} </td>

                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.nivelDig} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.fechaDig} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}>
                                <p>{procedure.canalAtencionDigital && "Digital"}</p>
                                <p>{procedure.canalAtencionPresencial && "Presencial"}</p>
                                <p>{procedure.canalAtencionTelefonico && "Telefónico"}</p>
                                <p>{procedure.canalAtencionAuto && "Autoatención"}</p>
                            </td>

                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}>

                                <p>{procedure.canalTransDigital && "Digital"}</p>
                                <p>{procedure.canalTransPresencial && "Presencial"}</p>
                                <p>{procedure.canalTransTelefonico && "Telefónico"}</p>
                                <p>{procedure.canalTransAuto && "Autoatención"}</p>

                            </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.tipoExp} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.accesoExp} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.urlInicio} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.chileAtiende} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.urlChileAtiende} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.numPlataformas} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.alcancePlataformas} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}>
                                <p>{procedure.platSimpleSaas && "SIMPLE SaaS"}</p>
                                <p>{procedure.platSimpleOnPremise && "SIMPLE On Premise"}</p>
                                <p>{procedure.platPropio && "Desarrollo propio"}</p>
                                <p>{procedure.platEstado && "Plataformas transversales del Estado"}</p>
                            </td>

                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.autenticacionUsuario} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.autenticacionFuncionario} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.firmaElec} </td>

                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.notificaciones} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}>
                                <p>{procedure.etapaNotifInicio && "Inicio"}</p>
                                <p>{procedure.etapaNotifInstruc && "Instrucción"}</p>
                                <p>{procedure.etapaNotifTermino && "Término"}</p>
                            </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.notifInicio} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.notifInstruc} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.notifTermino} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.comInstitucionales} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.comPersonales} </td>

                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.docsOrganos} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.mediosOrganos} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.medioInterop} </td>
                            <td className={`border px-2 w-auto min-w-96 ${procedure.marcado && "bg-green-300"}`}> {procedure.InstitucionProveedora} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.servicioWeb} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.docNotarial} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.nombreDocNotarial} </td>
                            <td className={`${cellStyle} ${procedure.marcado && "bg-green-300"}`}> {procedure.medioComOficial} </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ResultsTable