import { useState } from 'react'
import BaseFormSection from './BaseFormSection'
import Input from './Input'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import { opTiposNotif, opSiNo, opTiposNotifInstit } from '../data/options'

const FormSection6 = () => {

    const [etapaNotifCheckbox1, setEtapaNotifCheckbox1] = useState(false)
    const [etapaNotifCheckbox2, setEtapaNotifCheckbox2] = useState(false)
    const [etapaNotifCheckbox3, setEtapaNotifCheckbox3] = useState(false)

    const opEtapaNotif = [
        { checked: etapaNotifCheckbox1, label: 'Inicio', onChange: setEtapaNotifCheckbox1 },
        { checked: etapaNotifCheckbox2, label: 'Instrucción', onChange: setEtapaNotifCheckbox2 },
        { checked: etapaNotifCheckbox3, label: 'Término', onChange: setEtapaNotifCheckbox3 },
    ];


    return (
        <>
            <BaseFormSection className="grid grid-cols-2" sectionName="6. Notificaciones">
                <Input type="select" options={opSiNo} label="Notificaciones practicadas" />
                <Input type="multiple" options={opEtapaNotif} label="Etapa de las notificaciones" />
                <Input type="select" options={opTiposNotif} label="Medio utilizado para notificar en la etapa de inicio" />
                <Input type="select" options={opTiposNotif} label="Medio utilizado para notificar en la etapa de instrucción" />
                <Input type="select" options={opTiposNotif} label="Medio utilizado para notificar en la etapa de término" />
                <Input type="select" options={opTiposNotifInstit} label="Medio utilizado para enviar comunicaciones institucionales" />
                <Input type="select" options={opTiposNotifInstit} label="Medio utilizado para enviar comunicaciones personales" />
            </BaseFormSection>
            <div className='flex justify-end py-4 gap-4'>
                <SecondaryButton type='link' href="/identidad-digital">Anterior</SecondaryButton>
                <PrimaryButton type='link' href="/datos-documentos">Siguiente</PrimaryButton>
            </div>
        </>
    )
}

export default FormSection6