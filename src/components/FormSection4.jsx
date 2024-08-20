import { useState } from 'react'
import BaseFormSection from './BaseFormSection'
import Input from './Input'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import { opAccesoExp, opAlcance, opFicha, opNivelDig, opTipoExpediente } from '../data/options'

const FormSection4 = () => {

    // Checkboxes canales de atención
    const [canalesAtencionCheckbox1, setCanalesAtencionCheckbox1] = useState(false)
    const [canalesAtencionCheckbox2, setCanalesAtencionCheckbox2] = useState(false)
    const [canalesAtencionCheckbox3, setCanalesAtencionCheckbox3] = useState(false)
    const [canalesAtencionCheckbox4, setCanalesAtencionCheckbox4] = useState(false)

    // Checkboxes canales transaccionales
    const [canalesTransCheckbox1, setCanalesTransCheckbox1] = useState(false)
    const [canalesTransCheckbox2, setCanalesTransCheckbox2] = useState(false)
    const [canalesTransCheckbox3, setCanalesTransCheckbox3] = useState(false)
    const [canalesTransCheckbox4, setCanalesTransCheckbox4] = useState(false)

    // Checkboxes plataformas de digitalización
    const [plataformasCheckbox1, setPlataformasCheckbox1] = useState(false)
    const [plataformasCheckbox2, setPlataformasCheckbox2] = useState(false)
    const [plataformasCheckbox3, setPlataformasCheckbox3] = useState(false)
    const [plataformasCheckbox4, setPlataformasCheckbox4] = useState(false)


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

    return (
        <>
            <BaseFormSection className="grid gap-2 grid-cols-2" sectionName="4. Soporte Electrónico">
                <Input type="select" options={opNivelDig} label="Nivel de digitalización" />
                <Input type="date" label="Fecha de digitalización" />
                <Input type="multiple" options={opCanalesAtencion} label="Canales disponibles para la atención" />
                <Input type="multiple" options={opCanalesTrans} label="Canales transaccionales" />
                <Input type="select" options={opTipoExpediente} label="Tipo de expediente" />
                <Input type="select" options={opAccesoExp} label="Acceso al expediente electrónico por parte de los interesados" />
                <Input label="URL de inicio" />
                <Input type="select" options={opFicha} label="Ficha en ChileAtiende" />
                <Input label="Enlace a ficha en ChileAtiende" />
                <Input label="Número de plataformas electrónicas" />
                <Input type="select" options={opAlcance} label="Alcance de las plataformas electrónicas" />
                <Input type="multiple" options={opPlataformas} label="Plataforma o sistema utilizado para la digitalización" />
            </BaseFormSection>
            <div className='flex justify-end py-4 gap-4'>
                <SecondaryButton type='link' href="/usuarios">Anterior</SecondaryButton>
                <PrimaryButton type='link' href="/identidad-digital">Siguiente</PrimaryButton>
            </div>
        </>
    )
}

export default FormSection4