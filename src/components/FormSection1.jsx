import BaseFormSection from './BaseFormSection'
import PrimaryButton from './PrimaryButton'
import Input from './Input'
import { tiposRegistros, areasMunicipales, tiposInicio, productosInstitucionales } from '../data/options'
import { useEffect, useState } from 'react'
import { infoTipoRegistro, infoTipoInicio, infoActoInicio, infoActoTermino } from '../data/infoData'
import useFormStore from '../stores/useFormStore'
import { useNavigate } from 'react-router-dom'
const FormSection1 = () => {

    // Navigation
    const navigate = useNavigate()

    // STORES
    const sectionData = useFormStore(state => state.section1)
    const setSection1 = useFormStore(state => state.setSection1)

    // CAMPOS
    const [nombrePA, setNombrePA] = useState(sectionData.nombrePA)
    const [tipoRegistro, setTipoRegistro] = useState(sectionData.tipoRegistro)
    const [descripcion, setDescripcion] = useState(sectionData.descripcion)
    const [areaResponsable, setAreaResponsable] = useState(sectionData.areaResponsable)
    const [cargoResponsable, setCargoResponsable] = useState(sectionData.cargoResponsable)
    const [tipoInicio, setTipoInicio] = useState(sectionData.tipoInicio)
    const [actoInicio, setActoInicio] = useState(sectionData.actoInicio)
    const [actoTermino, setActoTermino] = useState(sectionData.actoTermino)
    const [prodInstitucional, setProdInstitucional] = useState(sectionData.prodInstitucional)

    const [isValid, setIsValid] = useState(false)

    // MODALES
    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)
    const [modal3, setModal3] = useState(false)
    const [modal4, setModal4] = useState(false)

    // VALIDACIÓN DEL FORMULARIO
    useEffect(() => {
        if (nombrePA && tipoRegistro && descripcion && areaResponsable && cargoResponsable && tipoInicio && actoInicio && actoTermino && prodInstitucional) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [nombrePA, tipoRegistro, descripcion, areaResponsable, cargoResponsable, tipoInicio, actoInicio, actoTermino, prodInstitucional])

    // ON SUBMIT
    const handleSubmit = () => {
        const data = {
            nombrePA,
            tipoRegistro,
            descripcion,
            areaResponsable,
            cargoResponsable,
            tipoInicio,
            actoInicio,
            actoTermino,
            prodInstitucional
        }
        setSection1(data)
        navigate("/marco-normativo")
    }

    return (
        <>

            <BaseFormSection sectionName="1. Identificación" className="grid grid-cols-2">

                <Input placeholder="Ej: Postulación a fondo concursable DGD" value={nombrePA} onChange={setNombrePA} label="Nombre del procedimiento" />
                <Input value={tipoRegistro} onChange={setTipoRegistro} help modal={modal} setModal={setModal} modalData={infoTipoRegistro} options={tiposRegistros} type="select" label="Tipo de registro" />
                <div className='col-span-2'>
                    <Input placeholder="Breve descripción del prodecimiento administrativo" value={descripcion} onChange={setDescripcion} type="text" label="Descripción" />
                </div>
                <Input value={areaResponsable} onChange={setAreaResponsable} type="select" options={areasMunicipales} label="Área responsable" />
                <Input placeholder="Ej: Asesor(a) de Políticas y Estudios" value={cargoResponsable} onChange={setCargoResponsable} label="Cargo del responsable" />
                <Input value={tipoInicio} onChange={setTipoInicio} help modal={modal2} setModal={setModal2} modalData={infoTipoInicio} type="select" options={tiposInicio} label="Tipo de inicio" />
                <Input placeholder="Ej: Solicitud de interesado(a) a postulación Fondo Concursable Transformación Digital" value={actoInicio} onChange={setActoInicio} help modal={modal3} setModal={setModal3} modalData={infoActoInicio} label="Acto de inicio" />
                <Input placeholder="Ej: Resolución que adjudica Fondo Concursable sobre Transformación Digital" value={actoTermino} onChange={setActoTermino} help modal={modal4} setModal={setModal4} modalData={infoActoTermino} label="Acto de término" />
                <Input value={prodInstitucional} onChange={setProdInstitucional} type="select" options={productosInstitucionales} label="Producto Institucional" />


            </BaseFormSection>
            <div className='flex justify-end py-4'>
                <PrimaryButton disabled={!isValid} onClick={handleSubmit}>Siguiente</PrimaryButton>
            </div>
        </>
    )
}

export default FormSection1