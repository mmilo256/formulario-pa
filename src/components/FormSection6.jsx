import { useEffect, useState } from 'react'
import BaseFormSection from './BaseFormSection'
import Input from './Input'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import { opTiposNotif, opSiNo, opTiposNotifInstit } from '../data/options'
import { useNavigate } from 'react-router-dom'
import useFormStore from '../stores/useFormStore'
import { infoComInsti, infoComPer, infoNotif } from '../data/infoData'

const FormSection6 = () => {

    // Navigation
    const navigate = useNavigate()

    // STORES
    const sectionData = useFormStore(state => state.section6)
    const setSectionData = useFormStore(state => state.setSection6)

    //MODALES
    const [notifModal, setNotifModal] = useState(false)
    const [comInstiModal, setComInstiModal] = useState(false)
    const [comPerModal, setComPerModal] = useState(false)

    // CAMPOS
    const [notificaciones, setNotificaciones] = useState(sectionData.notificaciones)
    const [notifInicio, setNotifInicio] = useState(sectionData.notifInicio)
    const [notifInstruc, setNotifInstruc] = useState(sectionData.notifInstruc)
    const [notifTermino, setNotifTermino] = useState(sectionData.notifTermino)
    const [comInstitucionales, setComInstitucionales] = useState(sectionData.comInstitucionales)
    const [comPersonales, setComPersonales] = useState(sectionData.comPersonales)

    const [etapaNotifCheckbox1, setEtapaNotifCheckbox1] = useState(sectionData.etapasNotif.inicio)
    const [etapaNotifCheckbox2, setEtapaNotifCheckbox2] = useState(sectionData.etapasNotif.instruccion)
    const [etapaNotifCheckbox3, setEtapaNotifCheckbox3] = useState(sectionData.etapasNotif.termino)

    const [isValid, setIsValid] = useState(false)

    const opEtapaNotif = [
        { checked: etapaNotifCheckbox1, label: 'Inicio', onChange: setEtapaNotifCheckbox1 },
        { checked: etapaNotifCheckbox2, label: 'Instrucción', onChange: setEtapaNotifCheckbox2 },
        { checked: etapaNotifCheckbox3, label: 'Término', onChange: setEtapaNotifCheckbox3 },
    ];

    useEffect(() => {
        let isValid = true;

        if (notificaciones === "Si") {
            if (etapaNotifCheckbox1 && !notifInicio) {
                isValid = false;
            }
            if (etapaNotifCheckbox2 && !notifInstruc) {
                isValid = false;
            }
            if (etapaNotifCheckbox3 && !notifTermino) {
                isValid = false;
            }
            if (!etapaNotifCheckbox1 && !etapaNotifCheckbox2 && !etapaNotifCheckbox3) {
                isValid = false
            }
        }

        if (!(notificaciones && comInstitucionales && comPersonales)) {
            isValid = false;
        }

        setIsValid(isValid);
    }, [comInstitucionales, comPersonales, etapaNotifCheckbox1, etapaNotifCheckbox2, etapaNotifCheckbox3, notifInicio, notifInstruc, notifTermino, notificaciones]);

    const handleSubmit = () => {
        const data = {
            notificaciones,
            notifInicio,
            notifInstruc,
            notifTermino,
            comInstitucionales,
            comPersonales,
            etapasNotif: {
                inicio: etapaNotifCheckbox1,
                instruccion: etapaNotifCheckbox2,
                termino: etapaNotifCheckbox3,
            }
        }
        setSectionData(data)
        navigate("/datos-documentos")
    }


    return (
        <>
            <BaseFormSection className="grid grid-cols-2" sectionName="6. Notificaciones">
                <div className="col-span-2">
                    <Input modalData={infoNotif} help modal={notifModal} setModal={setNotifModal} value={notificaciones} onChange={setNotificaciones} type="select" options={opSiNo} label="Notificaciones practicadas" />
                </div>
                {notificaciones === "Si" && <div className='col-span-2'><Input type="multiple" options={opEtapaNotif} label="Etapa de las notificaciones" /></div>}
                {etapaNotifCheckbox1 && <Input value={notifInicio} onChange={setNotifInicio} type="select" options={opTiposNotif} label="Medio utilizado para notificar en la etapa de inicio" />}
                {etapaNotifCheckbox2 && <Input value={notifInstruc} onChange={setNotifInstruc} type="select" options={opTiposNotif} label="Medio utilizado para notificar en la etapa de instrucción" />}
                {etapaNotifCheckbox3 && <Input value={notifTermino} onChange={setNotifTermino} type="select" options={opTiposNotif} label="Medio utilizado para notificar en la etapa de término" />}
                <Input modalData={infoComInsti} help modal={comInstiModal} setModal={setComInstiModal} value={comInstitucionales} onChange={setComInstitucionales} type="select" options={opTiposNotifInstit} label="Medio utilizado para enviar comunicaciones institucionales" />
                <Input modalData={infoComPer} help modal={comPerModal} setModal={setComPerModal} value={comPersonales} onChange={setComPersonales} type="select" options={opTiposNotifInstit} label="Medio utilizado para enviar comunicaciones personales" />
            </BaseFormSection>
            <div className='flex justify-end py-4 gap-4'>
                <SecondaryButton type='link' href="/identidad-digital">Anterior</SecondaryButton>
                <PrimaryButton disabled={!isValid} onClick={handleSubmit}>Siguiente</PrimaryButton>
            </div>
        </>
    )
}

export default FormSection6