import { useState } from 'react'
import BaseFormSection from './BaseFormSection'
import Input from './Input'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

const FormSection4 = () => {

    const [canalesAtencionCheckbox1, setCanalesAtencionCheckbox1] = useState(false)
    const [canalesAtencionCheckbox2, setCanalesAtencionCheckbox2] = useState(false)
    const [canalesAtencionCheckbox3, setCanalesAtencionCheckbox3] = useState(false)
    const [canalesAtencionCheckbox4, setCanalesAtencionCheckbox4] = useState(false)

    const [canalesTransCheckbox1, setCanalesTransCheckbox1] = useState(false)
    const [canalesTransCheckbox2, setCanalesTransCheckbox2] = useState(false)
    const [canalesTransCheckbox3, setCanalesTransCheckbox3] = useState(false)
    const [canalesTransCheckbox4, setCanalesTransCheckbox4] = useState(false)

    const [plataformasCheckbox1, setPlataformasCheckbox1] = useState(false)
    const [plataformasCheckbox2, setPlataformasCheckbox2] = useState(false)
    const [plataformasCheckbox3, setPlataformasCheckbox3] = useState(false)
    const [plataformasCheckbox4, setPlataformasCheckbox4] = useState(false)

    const opNivelDig = [
        { label: "Nivel 0", value: "Nivel 0" },
        { label: "Nivel 1", value: "Nivel 1" },
        { label: "Nivel 2", value: "Nivel 2" },
        { label: "Nivel 3", value: "Nivel 3" },
        { label: "Nivel 4 (Sólo aplica para PA de función específica y otras tramitaciones)", value: "Nivel 4 (Sólo aplica para PA de función específica y otras tramitaciones)" },
        { label: "Nivel 5", value: "Nivel 5" },
    ]

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

    const opTipoExpediente = [
        { label: "Expediente físico", value: "Expediente físico" },
        { label: "Expediente electrónico", value: "Expediente electrónico" },
        { label: "Expediente físico y electrónico", value: "Expediente físico y electrónico" },
        { label: "No genera un expediente", value: "No genera un expediente" },
    ]
    const opAccesoExp = [
        { label: "Si, los(as) interesados(as) tienen acceso al expediente electrónico", value: "Si, los(as) interesados(as) tienen acceso al expediente electrónico" },
        { label: "No, los(as) interesados(as) no tienen acceso al expediente", value: "No, los(as) interesados(as) no tienen acceso al expediente" },
    ]
    const opFicha = [
        { label: "Si", value: "Si" },
        { label: "No", value: "No" },
    ]
    const opAlcance = [
        { label: "Las plataformas electrónicas soportan todas las etapas de tramitación del procedimiento administrativo u otra tramitación", value: "Las plataformas electrónicas soportan todas las etapas de tramitación del procedimiento administrativo u otra tramitación" },
        { label: "Las plataformas electrónicas soportan parcialmente las etapas de tramitación del procedimiento administrativo u otra tramitación", value: "Las plataformas electrónicas soportan parcialmente las etapas de tramitación del procedimiento administrativo u otra tramitación" },
    ]
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