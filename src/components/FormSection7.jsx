import { useNavigate } from 'react-router-dom'
import { opMedioCom, opMedioInterop, opMediosEstado, opSiNo } from '../data/options'
import BaseFormSection from './BaseFormSection'
import Input from './Input'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import useFormStore from '../stores/useFormStore'
import { useEffect, useState } from 'react'
import { infoDocsOrganos, infoMedioCom } from '../data/infoData'

const FormSection7 = () => {

    // Navigation
    const navigate = useNavigate()

    // STORES
    const sectionData = useFormStore(state => state.section7)
    const setSectionData = useFormStore(state => state.setSection7)

    //MODALES
    const [docsOrganosModal, setDocsOrganosModal] = useState(false)
    const [medioComModal, setMedioComModal] = useState(false)

    // CAMPOS
    const [docsOrganos, setDocsOrganos] = useState(sectionData.docsOrganos)
    const [mediosOrganos, setMediosOrganos] = useState(sectionData.mediosOrganos)
    const [institucionProveedora, setInstitucionProveedora] = useState(sectionData.institucionProveedora)
    const [medioInterop, setMedioInterop] = useState(sectionData.medioInterop)
    const [servicioWeb, setServicioWeb] = useState(sectionData.servicioWeb)
    const [docNotarial, setDocNotarial] = useState(sectionData.docNotarial)
    const [nombreDocNotarial, setNombreDocNotarial] = useState(sectionData.nombreDocNotarial)
    const [medioComOficial, setMedioComOficial] = useState(sectionData.medioComOficial)

    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        let isValid = false;

        if (docsOrganos && docNotarial && medioComOficial) {
            isValid = true
        }

        if (docsOrganos === "Si") {
            if (mediosOrganos) {
                if (mediosOrganos !== "Hay interoperabilidad electrónica con la institución") {
                    if (institucionProveedora) {
                        isValid = true
                    } else {
                        isValid = false
                    }
                } else {
                    if (medioInterop && servicioWeb && institucionProveedora) {
                        isValid = true
                    } else {
                        isValid = false
                    }
                }
            } else {
                isValid = false
            }
        }

        if (docNotarial === "Si") {
            if (nombreDocNotarial) {
                isValid = true
            } else {
                isValid = false
            }
        }

        setIsValid(isValid)
    }, [docNotarial, docsOrganos, servicioWeb, institucionProveedora, medioComOficial, medioInterop, mediosOrganos, nombreDocNotarial]);

    const handleSubmit = () => {
        const data = {
            docsOrganos,
            mediosOrganos,
            institucionProveedora,
            medioInterop,
            servicioWeb,
            docNotarial,
            nombreDocNotarial,
            medioComOficial
        }
        setSectionData(data)
        navigate("/confirmar")
    }

    return (
        <>
            <BaseFormSection className="grid grid-cols-1" sectionName="7. Datos y Documentos Requeridos">
                <Input help modal={docsOrganosModal} setModal={setDocsOrganosModal} modalData={infoDocsOrganos} value={docsOrganos} onChange={setDocsOrganos} type="select" options={opSiNo} label="Datos, documentos y/o expedientes de otros órganos de la administración del Estado" />

                {docsOrganos === "Si" && <Input value={mediosOrganos} onChange={setMediosOrganos} type="select" options={opMediosEstado} label="Medio utilizado para obtener datos, documentos y/o expedientes de otros órganos de la administración del Estado" />}

                {docsOrganos === "Si" && mediosOrganos === "Hay interoperabilidad electrónica con la institución" && <Input value={medioInterop} onChange={setMedioInterop} type="select" options={opMedioInterop} label="Medio utilizado para interoperar electrónicamente" />}

                {mediosOrganos !== "" && docsOrganos === "Si" && <Input type="text" placeholder={`Certificado de posesión efectiva (Registro Civil)\nCertificado de afiliación Fonasa (Fondo Nacional de Salud)\nCertificado Tributario (SII)`} value={institucionProveedora} onChange={setInstitucionProveedora} label="Nombre de los datos, documentos (certificado) y/o expedientes obtenidos y las instituciones que los proveen." />}

                {docsOrganos === "Si" && mediosOrganos === "Hay interoperabilidad electrónica con la institución" && <Input value={servicioWeb} onChange={setServicioWeb} label="Servicio web que consume a través de la PISEE o que interopera por otros medios" />}

                <Input value={docNotarial} onChange={setDocNotarial} type="select" options={opSiNo} label="Requiere documento notarial" />

                {docNotarial === "Si" && <Input placeholder="Ej: Escritura pública" value={nombreDocNotarial} onChange={setNombreDocNotarial} label="Nombre del documento notarial" />}

                <Input help modal={medioComModal} setModal={setMedioComModal} modalData={infoMedioCom} value={medioComOficial} onChange={setMedioComOficial} type="select" options={opMedioCom} label="Medio utilizado para enviar comunicaciones oficiales entre órganos de la Administración del Estado" />
            </BaseFormSection>
            <div className='flex justify-end py-4 gap-4'>
                <SecondaryButton type='link' href="/notificaciones">Anterior</SecondaryButton>
                <PrimaryButton disabled={!isValid} onClick={handleSubmit} >Finalizar</PrimaryButton>
            </div>
        </>
    )
}

export default FormSection7