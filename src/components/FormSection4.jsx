import { useEffect, useState } from 'react'
import BaseFormSection from './BaseFormSection'
import Input from './Input'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import { opAccesoExp, opAlcance, opFicha, opNivelDig, opTipoExpediente } from '../data/options'
import { useNavigate } from 'react-router-dom'
import useFormStore from '../stores/useFormStore'
import { infoAccesoExp, infoAlcancePlataformas, infoCanalesAtencion, infoCanalesTrans, infoNivelDig, infoNumPlataformas, infoTipoExp, infoUrlInicio } from '../data/infoData'

const FormSection4 = () => {

    // Navigation
    const navigate = useNavigate()

    // STORES
    const sectionData = useFormStore(state => state.section4)
    const setSectionData = useFormStore(state => state.setSection4)

    const [isValid, setIsValid] = useState(false)

    //MODALES
    const [nivelDigModal, setNivelDigModal] = useState(false)
    const [canalesAtencionModal, setCanalesAtencionModal] = useState(false)
    const [canalesTransModal, setCanalesTransModal] = useState(false)
    const [tipoExpModal, setTipoExpModal] = useState(false)
    const [accesoExpModal, setAccesoExpModal] = useState(false)
    const [urlInicioModal, setUrlInicioModal] = useState(false)
    const [numPlataformasModal, setNumPlataformasModal] = useState(false)
    const [alcancePlataformasModal, setAlcancePlataformasModal] = useState(false)

    // CAMPOS
    const [nivelDig, setNivelDig] = useState(sectionData.nivelDig)
    const [fechaDig, setFechaDig] = useState(sectionData.fechaDig)
    const [tipoExp, setTipoExp] = useState(sectionData.tipoExp)
    const [accesoExp, setAccesoExp] = useState(sectionData.accesoExp)
    const [urlInicio, setUrlInicio] = useState(sectionData.urlInicio)
    const [chileAtiende, setChileAtiende] = useState(sectionData.chileAtiende)
    const [urlChileAtiende, setUrlChileAtiende] = useState(sectionData.urlChileAtiende)
    const [numPlataformas, setNumPlataformas] = useState(sectionData.numPlataformas)
    const [alcancePlataformas, setAlcancePlataformas] = useState(sectionData.alcancePlataformas)

    useEffect(() => {

        if (nivelDig !== "Nivel 0") {
            if (fechaDig && tipoExp && accesoExp && urlInicio && numPlataformas && alcancePlataformas) {
                setIsValid(true)
            } else {
                setIsValid(false)
            }
        } else {
            if (chileAtiende === "Si") {
                if (urlChileAtiende) {
                    setIsValid(true)
                } else {
                    setIsValid(false)
                }
            } else {
                setIsValid(true)
            }
        }

    }, [nivelDig, fechaDig, tipoExp, accesoExp, urlInicio, chileAtiende, urlChileAtiende, numPlataformas, alcancePlataformas])

    // Checkboxes canales de atención
    const [canalesAtencionCheckbox1, setCanalesAtencionCheckbox1] = useState(sectionData.canalesAtencion.digital || false)
    const [canalesAtencionCheckbox2, setCanalesAtencionCheckbox2] = useState(sectionData.canalesAtencion.presencial || false)
    const [canalesAtencionCheckbox3, setCanalesAtencionCheckbox3] = useState(sectionData.canalesAtencion.telefonico || false)
    const [canalesAtencionCheckbox4, setCanalesAtencionCheckbox4] = useState(sectionData.canalesAtencion.autoatencion || false)

    // Checkboxes canales transaccionales
    const [canalesTransCheckbox1, setCanalesTransCheckbox1] = useState(sectionData.canalesTransaccionales.digital || false)
    const [canalesTransCheckbox2, setCanalesTransCheckbox2] = useState(sectionData.canalesTransaccionales.presencial || false)
    const [canalesTransCheckbox3, setCanalesTransCheckbox3] = useState(sectionData.canalesTransaccionales.telefonico || false)
    const [canalesTransCheckbox4, setCanalesTransCheckbox4] = useState(sectionData.canalesTransaccionales.autoatencion || false)

    // Checkboxes plataformas de digitalización
    const [plataformasCheckbox1, setPlataformasCheckbox1] = useState(sectionData.plataformas.simple_saas || false)
    const [plataformasCheckbox2, setPlataformasCheckbox2] = useState(sectionData.plataformas.simple_onPremise || false)
    const [plataformasCheckbox3, setPlataformasCheckbox3] = useState(sectionData.plataformas.desarrollo_propio || false)
    const [plataformasCheckbox4, setPlataformasCheckbox4] = useState(sectionData.plataformas.plataformas_estado || false)


    const opCanalesAtencion = [
        { checked: canalesAtencionCheckbox1, label: 'Canal Digital', onChange: setCanalesAtencionCheckbox1 },
        { checked: canalesAtencionCheckbox2, label: 'Canal Presencial', onChange: setCanalesAtencionCheckbox2 },
        { checked: canalesAtencionCheckbox3, label: 'Canal Telefónico', onChange: setCanalesAtencionCheckbox3 },
        { checked: canalesAtencionCheckbox4, label: 'Módulos de autoatención', onChange: setCanalesAtencionCheckbox4 },
    ];

    const opCanalesTrans = [
        { checked: canalesTransCheckbox1, label: 'Canal Digital', onChange: setCanalesTransCheckbox1 },
        { checked: canalesTransCheckbox2, label: 'Canal Presencial', onChange: setCanalesTransCheckbox2 },
        { checked: canalesTransCheckbox3, label: 'Canal Telefónico', onChange: setCanalesTransCheckbox3 },
        { checked: canalesTransCheckbox4, label: 'Módulos de autoatención', onChange: setCanalesTransCheckbox4 },
    ];

    const opPlataformas = [
        { checked: plataformasCheckbox1, label: 'SIMPLE con modalidad SaaS (como servicio dispuesto por DGD)', onChange: setPlataformasCheckbox1 },
        { checked: plataformasCheckbox2, label: 'SIMPLE con modalidad On Premise (instalación local o servidores propios)', onChange: setPlataformasCheckbox2 },
        { checked: plataformasCheckbox3, label: 'Plataformas desarrolladas por la misma institución (equipo propio de la institución)', onChange: setPlataformasCheckbox3 },
        { checked: plataformasCheckbox4, label: 'Plataformas transversales provistas por el Estado', onChange: setPlataformasCheckbox4 },
    ];

    const handleSubmit = () => {
        const data = {
            nivelDig,
            fechaDig,
            tipoExp,
            accesoExp,
            urlInicio,
            chileAtiende,
            urlChileAtiende,
            numPlataformas,
            alcancePlataformas,
            canalesAtencion: {
                digital: canalesAtencionCheckbox1,
                presencial: canalesAtencionCheckbox2,
                telefonico: canalesAtencionCheckbox3,
                autoatencion: canalesAtencionCheckbox4
            },
            canalesTransaccionales: {
                digital: canalesTransCheckbox1,
                presencial: canalesTransCheckbox2,
                telefonico: canalesTransCheckbox3,
                autoatencion: canalesTransCheckbox4
            },
            plataformas: {
                simple_saas: plataformasCheckbox1,
                simple_onPremise: plataformasCheckbox2,
                desarrollo_propio: plataformasCheckbox3,
                plataformas_estado: plataformasCheckbox4
            }
        }
        setSectionData(data)
        navigate("/identidad-digital")
    }

    return (
        <>
            <BaseFormSection className="grid gap-2 grid-cols-2" sectionName="4. Soporte Electrónico">
                <Input help modal={nivelDigModal} setModal={setNivelDigModal} modalData={infoNivelDig} value={nivelDig} onChange={setNivelDig} type="select" options={opNivelDig} label="Nivel de digitalización" />
                {nivelDig !== "" && nivelDig === "Nivel 5" && <Input value={fechaDig} onChange={setFechaDig} type="date" label="Fecha de digitalización" />}
                <div className='col-span-2'>
                    <Input help modal={canalesAtencionModal} setModal={setCanalesAtencionModal} modalData={infoCanalesAtencion} type="multiple" options={opCanalesAtencion} label="Canales disponibles para la atención" />
                </div>
                <div className="col-span-2">
                    <Input help modal={canalesTransModal} setModal={setCanalesTransModal} modalData={infoCanalesTrans} type="multiple" options={opCanalesTrans} label="Canales transaccionales" />
                </div>
                {nivelDig !== "" && nivelDig !== "Nivel 0" && <Input help modal={tipoExpModal} setModal={setTipoExpModal} modalData={infoTipoExp} value={tipoExp} onChange={setTipoExp} type="select" options={opTipoExpediente} label="Tipo de expediente" />}
                {nivelDig !== "" && nivelDig !== "Nivel 0" && <Input help modal={accesoExpModal} setModal={setAccesoExpModal} modalData={infoAccesoExp} value={accesoExp} onChange={setAccesoExp} type="select" options={opAccesoExp} label="Acceso al expediente electrónico por parte de los interesados" />}
                {nivelDig !== "" && nivelDig !== "Nivel 0" && <Input help modal={urlInicioModal} setModal={setUrlInicioModal} modalData={infoUrlInicio} value={urlInicio} onChange={setUrlInicio} label="URL de inicio" />}
                <Input value={chileAtiende} onChange={setChileAtiende} type="select" options={opFicha} label="Ficha en ChileAtiende" />
                {chileAtiende === "Si" && <Input value={urlChileAtiende} onChange={setUrlChileAtiende} label="Enlace a ficha en ChileAtiende" />}
                {nivelDig !== "" && nivelDig !== "Nivel 0" && <Input help modal={numPlataformasModal} setModal={setNumPlataformasModal} modalData={infoNumPlataformas} numOnly maxLength={5} value={numPlataformas} onChange={setNumPlataformas} label="Número de plataformas electrónicas" />}
                {nivelDig !== "" && nivelDig !== "Nivel 0" && <Input help modal={alcancePlataformasModal} setModal={setAlcancePlataformasModal} modalData={infoAlcancePlataformas} value={alcancePlataformas} onChange={setAlcancePlataformas} type="select" options={opAlcance} label="Alcance de las plataformas electrónicas" />}
                <div className="col-span-2">
                    {nivelDig !== "" && nivelDig !== "Nivel 0" && <Input type="multiple" options={opPlataformas} label="Plataforma o sistema utilizado para la digitalización" />}
                </div>
            </BaseFormSection>
            <div className='flex justify-end py-4 gap-4'>
                <SecondaryButton type='link' href="/usuarios">Anterior</SecondaryButton>
                <PrimaryButton disabled={!isValid} onClick={handleSubmit}>Siguiente</PrimaryButton>
            </div>
        </>
    )
}

export default FormSection4