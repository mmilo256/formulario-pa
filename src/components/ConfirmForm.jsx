import { useNavigate } from "react-router-dom"
import useFormStore from "../stores/useFormStore"
import useProcedureStore from "../stores/useProcedureStore"
import PrimaryButton from "./PrimaryButton"
import SecondaryButton from "./SecondaryButton"
import { API_URL } from "../constants/constants"

const ConfirmForm = () => {

    const navigate = useNavigate()

    const addProcedure = useProcedureStore(state => state.addProcedure)
    const resetForm = useFormStore(state => state.resetForm)

    const data1 = useFormStore(state => state.section1)
    const data2 = useFormStore(state => state.section2)
    const data3 = useFormStore(state => state.section3)
    const data4 = useFormStore(state => state.section4)
    const data5 = useFormStore(state => state.section5)
    const data6 = useFormStore(state => state.section6)
    const data7 = useFormStore(state => state.section7)

    const submitForm = async () => {
        const formData = {
            nombrePA: data1.nombrePA,
            tipoRegistro: data1.tipoRegistro,
            descripcion: data1.descripcion,
            areaResponsable: data1.areaResponsable,
            cargoResponsable: data1.cargoResponsable,
            tipoInicio: data1.tipoInicio,
            actoInicio: data1.actoInicio,
            actoTermino: data1.actoTermino,
            prodInstitucional: data1.prodInstitucional,
            numLey: data2.numLey,
            urlLey: data2.urlLey,
            fuentesNorm: data2.fuentesNorm,
            tipoFuente: data2.tipoFuente,
            nombreFuente: data2.nombreFuente,
            urlFuente: data2.urlFuente,
            pago: data3.pago,
            tipoMoneda: data3.tipoMoneda,
            monto: data3.monto,
            tipoUsuario: data3.tipoUsuario,
            segmentoUsuarios: data3.segmentoUsuarios,
            disponibilidad: data3.disponibilidad,
            rsh: data3.rsh,
            nivelDig: data4.nivelDig,
            fechaDig: data4.fechaDig,
            tipoExp: data4.tipoExp,
            accesoExp: data4.accesoExp,
            urlInicio: data4.urlInicio,
            chileAtiende: data4.chileAtiende,
            urlChileAtiende: data4.urlChileAtiende,
            numPlataformas: data4.numPlataformas,
            alcancePlataformas: data4.alcancePlataformas,
            canalAtencionDigital: data4.canalesAtencion.digital,
            canalAtencionPresencial: data4.canalesAtencion.presencial,
            canalAtencionTelefonico: data4.canalesAtencion.telefonico,
            canalAtencionAuto: data4.canalesAtencion.autoatencion,
            canalTransDigital: data4.canalesTransaccionales.digital,
            canalTransPresencial: data4.canalesTransaccionales.presencial,
            canalTransTelefonico: data4.canalesTransaccionales.telefonico,
            canalTransAuto: data4.canalesTransaccionales.autoatencion,
            platSimpleSaas: data4.plataformas.simple_saas,
            platSimpleOnPremise: data4.plataformas.simple_onPremise,
            platPropio: data4.plataformas.desarrollo_propio,
            platEstado: data4.plataformas.plataformas_estado,
            autenticacionUsuario: data5.autenticacionUsuario,
            autenticacionFuncionario: data5.autenticacionFuncionario,
            firmaElec: data5.firmaElec,
            notificaciones: data6.notificaciones,
            notifInicio: data6.notifInicio,
            notifInstruc: data6.notifInstruc,
            notifTermino: data6.notifTermino,
            comInstitucionales: data6.comInstitucionales,
            comPersonales: data6.comPersonales,
            etapaNotifInicio: data6.etapasNotif.inicio,
            etapaNotifInstruc: data6.etapasNotif.instruccion,
            etapaNotifTermino: data6.etapasNotif.termino,
            docsOrganos: data7.docsOrganos,
            mediosOrganos: data7.mediosOrganos,
            InstitucionProveedora: data7.institucionProveedora,
            medioInterop: data7.medioInterop,
            servicioWeb: data7.servicioWeb,
            docNotarial: data7.docNotarial,
            nombreDocNotarial: data7.nombreDocNotarial,
            medioComOficial: data7.medioComOficial,
        }
        try {
            await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async () => {
        const data = {
            name: data1.nombrePA,
            type: data1.tipoRegistro,
            area: data1.areaResponsable,
            person: data1.cargoResponsable
        }
        alert("Enviado!")
        await submitForm()
        if (!localStorage.getItem('procedures')) {
            localStorage.setItem('procedures', JSON.stringify([data]))
            addProcedure(data)
        } else {
            const prevData = JSON.parse(localStorage.getItem('procedures'))
            const newData = [
                ...prevData,
                data
            ]
            localStorage.setItem('procedures', JSON.stringify(newData))
            addProcedure(newData)
        }
        resetForm()
        navigate("/")
    }

    return (
        <div className="text-slate-800">
            <h1 className="font-bold text-4xl py-4">Confirmación del Prodecimiento Administrativo</h1>
            <h2 className="font-bold text-2xl py-2">Resumen del procedimiento</h2>
            <div className="gap-x-2 grid grid-cols-2">
                <div className="border-b border-r mb-2 pb-2">
                    <p className=" font-semibold">1. Identificación</p>
                    <ul className="gap-x-2 grid grid-cols-2">
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Nombre del procedimiento: </span>
                            <span>{data1.nombrePA}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Tipo de registro: </span>
                            <span>{data1.tipoRegistro}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Descripción: </span>
                            <span>{data1.descripcion}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Área responsable: </span>
                            <span>{data1.areaResponsable}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Cargo responsable: </span>
                            <span>{data1.cargoResponsable}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Tipo de inicio: </span>
                            <span>{data1.tipoInicio}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Acto de inicio: </span>
                            <span>{data1.actoInicio}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Acto de término: </span>
                            <span>{data1.actoTermino}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Producto institucional: </span>
                            <span>{data1.prodInstitucional}</span>
                        </li>
                    </ul>
                </div>
                <div className="border-b border-r mb-2 pb-2">
                    <p className=" font-semibold">2. Marco Normativo</p>
                    <ul className="gap-x-2 grid grid-cols-2">
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Número de ley: </span>
                            <span>{data2.numLey}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">URL ley: </span>
                            <span>{data2.urlLey}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Otras fuentes normativas: </span>
                            <span>{data2.fuentesNorm}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Tipo de fuente normativa: </span>
                            <span>{data2.tipoFuente}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Nombre de la fuente normativa: </span>
                            <span>{data2.nombreFuente}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">URL de la fuente normativa: </span>
                            <span>{data2.urlFuente}</span>
                        </li>

                    </ul>
                </div>
                <div className="border-b border-r mb-2 pb-2">
                    <p className=" font-semibold">3. Usuarios(as)</p>
                    <ul className="gap-x-2 grid grid-cols-2">
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Pago asociado: </span>
                            <span>{data3.pago}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Tipo de moneda: </span>
                            <span>{data3.tipoMoneda}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Monto: </span>
                            <span>{data3.monto}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Tipo de usuario(s): </span>
                            <span>{data3.tipoUsuario}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Segmento de usuario(s): </span>
                            <span>{data3.segmentoUsuarios}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Disponibilidad: </span>
                            <span>{data3.disponibilidad}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Registro Social de Hogares: </span>
                            <span>{data3.rsh}</span>
                        </li>
                    </ul>
                </div>
                <div className="border-b border-r mb-2 pb-2">
                    <p className=" font-semibold">4. Soporte Electrónico</p>
                    <ul className="gap-x-2 grid grid-cols-2">
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Nivel de digitalización: </span>
                            <span>{data4.nivelDig}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Fecha de digitalización: </span>
                            <span>{data4.fechaDig}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Tipo de expediente: </span>
                            <span>{data4.tipoExp}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Acceso al expediente: </span>
                            <span>{data4.accesoExp}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">URL de inicio: </span>
                            <span>{data4.urlInicio}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Ficha en ChileAtiende: </span>
                            <span>{data4.chileAtiende}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">URL de la ficha en ChileAtiende: </span>
                            <span>{data4.urlChileAtiende}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Número de plataformas: </span>
                            <span>{data4.numPlataformas}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Alcance de las plataformas: </span>
                            <span>{data4.alcancePlataformas}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Canales de atención: </span>
                            {data4.canalesAtencion.digital && <span>Digital</span>}
                            <span> - </span>
                            {data4.canalesAtencion.presencial && <span>Presencial</span>}
                            <span> - </span>
                            {data4.canalesAtencion.telefonico && <span>Telefónico</span>}
                            <span> - </span>
                            {data4.canalesAtencion.autoatencion && <span>Autoatención</span>}
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Canales transaccionales: </span>
                            {data4.canalesTransaccionales.digital && <span>Digital</span>}
                            <span> - </span>
                            {data4.canalesTransaccionales.presencial && <span>Presencial</span>}
                            <span> - </span>
                            {data4.canalesTransaccionales.telefonico && <span>Telefónico</span>}
                            <span> - </span>
                            {data4.canalesTransaccionales.autoatencion && <span>Autoatención</span>}
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Plataformas: </span>
                            {data4.plataformas.simple_saas && <span>SIMPLE modalidad SaaS</span>}
                            <span> - </span>
                            {data4.plataformas.simple_onPremise && <span>SIMPLE modalidad On Premise</span>}
                            <span> - </span>
                            {data4.plataformas.desarrollo_propio && <span>Plataformas desarrolladas por la misma institución</span>}
                            <span> - </span>
                            {data4.plataformas.plataformas_estado && <span>Plataformas Transversales provistas por el Estado</span>}

                        </li>

                    </ul>
                </div>
                <div className="border-b border-r mb-2 pb-2">
                    <p className=" font-semibold">5. Identidad Digital</p>
                    <ul className="gap-x-2 grid grid-cols-2">
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Método de autenticación de los usuarios: </span>
                            <span>{data5.autenticacionUsuario}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Método de autenticación de los funcionarios: </span>
                            <span>{data5.autenticacionFuncionario}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Uso de Firma Electrónica: </span>
                            <span>{data5.firmaElec}</span>
                        </li>

                    </ul>
                </div>
                <div className="border-b border-r mb-2 pb-2">
                    <p className=" font-semibold">6. Notificaciones</p>
                    <ul className="gap-x-2 grid grid-cols-2">
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Notificaciones practicadas: </span>
                            <span>{data6.notificaciones}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Etapas con notificaciones: </span>
                            {data6.etapasNotif.inicio && <span>Inicio</span>}
                            <span> - </span>
                            {data6.etapasNotif.instruccion && <span>Instrucción</span>}
                            <span> - </span>
                            {data6.etapasNotif.termino && <span>Término</span>}
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Notificaciones en etapa de inicio: </span>
                            <span>{data6.notifInicio}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Notificaciones en etapa de instrucción: </span>
                            <span>{data6.notifInstruc}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Notificaciones en etapa de término: </span>
                            <span>{data6.notifTermino}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Comunicados institucionales: </span>
                            <span>{data6.comInstitucionales}</span>
                        </li>
                        <li className="ml-5 text-sm">
                            <span className="font-semibold">Comunicados personales: </span>
                            <span>{data6.comPersonales}</span>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="border-b border-r mb-2 pb-2">
                <p className=" font-semibold">7. Datos y documentos requeridos</p>
                <ul className="gap-x-2 grid grid-cols-2">
                    <li className="ml-5 text-sm">
                        <span className="font-semibold">Requiere documentos de otros órganos del Estado: </span>
                        <span>{data7.docsOrganos}</span>
                    </li>
                    <li className="ml-5 text-sm">
                        <span className="font-semibold">Nombre de los documentos y su institución proveedora correspondiente : </span>
                        <span>{data7.institucionProveedora}</span>
                    </li>
                    <li className="ml-5 text-sm">
                        <span className="font-semibold">Medio de interoperabilidad: </span>
                        <span>{data7.medioInterop}</span>
                    </li>
                    <li className="ml-5 text-sm">
                        <span className="font-semibold">Institución que provee documentos a través de PISEE: </span>
                        <span>{data7.institucionProveedora2}</span>
                    </li>
                    <li className="ml-5 text-sm">
                        <span className="font-semibold">Servicio web que consume a través de PISEE: </span>
                        <span>{data7.servicioWeb}</span>
                    </li>
                    <li className="ml-5 text-sm">
                        <span className="font-semibold">Requiere documento notarial: </span>
                        <span>{data7.docNotarial}</span>
                    </li>
                    <li className="ml-5 text-sm">
                        <span className="font-semibold">Nombre del documento notarial: </span>
                        <span>{data7.nombreDocNotarial}</span>
                    </li>
                    <li className="ml-5 text-sm">
                        <span className="font-semibold">Medio de comunicación oficial: </span>
                        <span>{data7.medioComOficial}</span>
                    </li>

                </ul>
            </div>

            <p className="py-4">¿Estás seguro de que deseas enviar este procedimiento administrativo? Por favor, revisa la información antes de continuar.</p>

            <div className='flex justify-end py-4 gap-4'>
                <SecondaryButton type='link' href="/datos-documentos">Volver</SecondaryButton>
                <PrimaryButton onClick={handleSubmit} >Confirmar y enviar</PrimaryButton>
            </div>

        </div>
    )
}

export default ConfirmForm