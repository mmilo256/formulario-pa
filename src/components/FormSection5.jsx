import BaseFormSection from './BaseFormSection'
import Input from './Input'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import { opAuthUsuarios, opAuthFuncionarios, opFirmaElec } from '../data/options'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFormStore from '../stores/useFormStore'

const FormSection5 = () => {

    // Navigation
    const navigate = useNavigate()

    // STORES
    const sectionData = useFormStore(state => state.section5)
    const setSectionData = useFormStore(state => state.setSection5)
    const nivelDig = useFormStore(state => state.section4.nivelDig)

    const [autenticacionUsuario, setAutenticacionUsuario] = useState(sectionData.autenticacionUsuario)
    const [autenticacionFuncionario, setAutenticacionFuncionario] = useState(sectionData.autenticacionFuncionario)
    const [firmaElec, setFirmaElec] = useState(sectionData.firmaElec)

    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        if (nivelDig !== "Nivel 0") {
            if (autenticacionUsuario && autenticacionFuncionario && firmaElec) {
                setIsValid(true)
            } else {
                setIsValid(false)
            }
        } else {
            setIsValid(true)
        }
    }, [autenticacionUsuario, autenticacionFuncionario, firmaElec, nivelDig])

    const handleSubmit = () => {
        const data = {
            autenticacionUsuario,
            autenticacionFuncionario,
            firmaElec
        }
        setSectionData(data)
        navigate("/notificaciones")
    }

    return (
        <>
            <BaseFormSection className="grid grid-cols-2" sectionName="5. Identidad Digital">
                {nivelDig === "Nivel 0" ? <p className='text-xl text-center col-span-2 py-4' >El nivel de digitalización es 0. Continúe con la siguiente sección</p> : <>
                    <Input value={autenticacionUsuario} onChange={setAutenticacionUsuario} type="select" options={opAuthUsuarios} label="Mecanismo de autenticación digital para los usuarios" />
                    <Input value={autenticacionFuncionario} onChange={setAutenticacionFuncionario} type="select" options={opAuthFuncionarios} label="Mecanismo de autenticación digital para los funcionarios" />
                    <Input value={firmaElec} onChange={setFirmaElec} type="select" options={opFirmaElec} label="Firma electrónica avanzada" />
                </>}
            </BaseFormSection>
            <div className='flex justify-end py-4 gap-4'>
                <SecondaryButton type='link' href="/soporte-electronico">Anterior</SecondaryButton>
                <PrimaryButton disabled={!isValid} onClick={handleSubmit}>Siguiente</PrimaryButton>
            </div>
        </>
    )
}

export default FormSection5