import BaseFormSection from './BaseFormSection'
import Input from './Input'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import { opAuthUsuarios, opAuthFuncionarios, opFirmaElec } from '../data/options'

const FormSection5 = () => {

    return (
        <>
            <BaseFormSection className="grid grid-cols-2" sectionName="5. Identidad Digital">
                <Input type="select" options={opAuthUsuarios} label="Mecanismo de autenticación digital para los usuarios" />
                <Input type="select" options={opAuthFuncionarios} label="Mecanismo de autenticación digital para los funcionarios" />
                <Input type="select" options={opFirmaElec} label="Firma electrónica avanzada" />
            </BaseFormSection>
            <div className='flex justify-end py-4 gap-4'>
                <SecondaryButton type='link' href="/soporte-electronico">Anterior</SecondaryButton>
                <PrimaryButton type='link' href="/notificaciones">Siguiente</PrimaryButton>
            </div>
        </>
    )
}

export default FormSection5