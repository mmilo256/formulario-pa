import BaseFormSection from './BaseFormSection'
import Input from './Input'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import { opPagoAsociado, opTipoMoneda, opTipoUsuario, opSegmentoUsuarios, opDisponibilidad, opRSH } from '../data/options'
import { useEffect, useState } from 'react'
import { infoRsh, infoSegmentoUsuarios } from '../data/infoData'
import { useNavigate } from 'react-router-dom'
import useFormStore from '../stores/useFormStore'

const FormSection3 = () => {

    // Navigation
    const navigate = useNavigate()

    // STORES
    const sectionData = useFormStore(state => state.section3)
    const setSectionData = useFormStore(state => state.setSection3)

    const [isValid, setIsValid] = useState(false)

    const [modal, setModal] = useState(false)
    const [rshModal, setRshModal] = useState(false)

    const [pago, setPago] = useState(sectionData.pago)
    const [tipoMoneda, setTipoMoneda] = useState(sectionData.tipoMoneda)
    const [monto, setMonto] = useState(sectionData.monto)
    const [tipoUsuario, setTipoUsuario] = useState(sectionData.tipoUsuario)
    const [segmentoUsuarios, setSegmentoUsuarios] = useState(sectionData.segmentoUsuarios)
    const [disponibilidad, setDisponibilidad] = useState(sectionData.disponibilidad)
    const [rsh, setRsh] = useState(sectionData.rsh)

    useEffect(() => {
        if (pago && tipoUsuario && segmentoUsuarios && disponibilidad && rsh) {
            if (pago !== "No") {
                if (tipoMoneda && monto) {
                    setIsValid(true)
                } else {
                    setIsValid(false)
                }
            } else {
                setIsValid(true)
            }
        } else {
            setIsValid(false)
        }
    }, [pago, monto, tipoMoneda, tipoUsuario, segmentoUsuarios, disponibilidad, rsh])

    const handleSubmit = () => {
        const data = {
            pago,
            tipoMoneda,
            monto,
            tipoUsuario,
            segmentoUsuarios,
            disponibilidad,
            rsh
        }
        setSectionData(data)
        navigate("/soporte-electronico")
    }

    return (
        <>
            <BaseFormSection className="grid grid-cols-2" sectionName="3. Usuarios(as)">
                <Input value={pago} onChange={setPago} type="select" options={opPagoAsociado} label="Pago asociado" />
                {pago !== "No" && pago !== "" && <Input value={tipoMoneda} onChange={setTipoMoneda} type="select" options={opTipoMoneda} label="Tipo de moneda" />}
                {pago !== "No" && pago !== "" && <Input numOnly maxLength={15} value={monto} onChange={setMonto} label="Monto a pagar" />}
                <Input value={tipoUsuario} onChange={setTipoUsuario} type="select" options={opTipoUsuario} label="Tipo de usuario(a)" />
                <Input value={segmentoUsuarios} onChange={setSegmentoUsuarios} help modal={modal} setModal={setModal} modalData={infoSegmentoUsuarios} type="select" options={opSegmentoUsuarios} label="Segmento de usuarios(as)" />
                <Input value={disponibilidad} onChange={setDisponibilidad} type="select" options={opDisponibilidad} label="Disponibilidad para su realización" />
                <Input help modal={rshModal} setModal={setRshModal} modalData={infoRsh} value={rsh} onChange={setRsh} type="select" options={opRSH} label="Relación con el Registro Social de Hogares y/o Registro de Información Social" />
            </BaseFormSection>
            <div className='flex justify-end py-4 gap-4'>
                <SecondaryButton type='link' href="/marco-normativo">Anterior</SecondaryButton>
                <PrimaryButton onClick={handleSubmit} disabled={!isValid} >Siguiente</PrimaryButton>
            </div>
        </>
    )
}

export default FormSection3