import BaseFormSection from './BaseFormSection'
import Input from './Input'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

const FormSection5 = () => {

    const opAuthUsuarios = [
        { label: "No utiliza mecanismo de autenticación digital", value: "No utiliza mecanismo de autenticación digital" },
        { label: "Utiliza ClaveÚnica", value: "Utiliza ClaveÚnica" },
        { label: "Utiliza Clave Tributaria", value: "Utiliza Clave Tributaria" },
        { label: "Utiliza un mecanismo de autenticación propio", value: "Utiliza un mecanismo de autenticación propio" },
    ]
    const opAuthFuncionarios = [
        { label: "No utiliza mecanismo de autenticación digital", value: "No utiliza mecanismo de autenticación digital" },
        { label: "Utiliza ClaveÚnica", value: "Utiliza ClaveÚnica" },
        { label: "Utiliza un mecanismo de autenticación propio", value: "Utiliza un mecanismo de autenticación propio" },
    ]
    const opFirmaElec = [
        { label: "No utiliza", value: "No utiliza" },
        { label: "Utiliza Firma Electrónica Avanzada del Estado (Firma Gob)", value: "Utiliza Firma Electrónica Avanzada del Estado (Firma Gob)" },
        { label: "Utiliza firma electrónica avanzada provista por un externo", value: "Utiliza firma electrónica avanzada provista por un externo" },
        { label: "Utiliza ambos tipos de firma (Firma Gob y provista por un externo)", value: "Utiliza ambos tipos de firma (Firma Gob y provista por un externo)" }
    ]

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