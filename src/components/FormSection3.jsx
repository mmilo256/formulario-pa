import BaseFormSection from './BaseFormSection'
import Input from './Input'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

const FormSection3 = () => {

    const opPagoAsociado = [
        { label: "Si", value: "Si" },
        { label: "No", value: "No" },
        { label: "En algunos casos", value: "En algunos casos" },
    ]
    const opTipoMoneda = [
        { label: "Peso Chileno (CLP)", value: "Peso Chileno (CLP)" },
        { label: "Unidad de Fomento (UF)", value: "Unidad de Fomento (UF)" },
        { label: "Unidad Tributaria Mensual (UTM)", value: "Unidad Tributaria Mensual (UTM)" },
    ]
    const opTipoUsuario = [
        { label: "Persona Natural", value: "Persona Natural" },
        { label: "Persona Jurídica", value: "Persona Jurídica" },
        { label: "Ambos tipos de personas", value: "Ambos tipos de personas" },
    ]
    const opSegmentoUsuarios = [
        { label: "Género", value: "Género" },
        { label: "Productividad y emprendimiento", value: "Productividad y emprendimiento" },
        { label: "Calidad Indígena", value: "Calidad Indígena" },
        { label: "Discapacidad", value: "Discapacidad" },
        { label: "Medio Ambiente", value: "Medio Ambiente" },
        { label: "Migración", value: "Migración" },
        { label: "Personas Mayores", value: "Personas Mayores" },
        { label: "Infancia", value: "Infancia" },
        { label: "No aplica", value: "No aplica" },
    ]
    const opRSH = [
        { label: "Si, se interopera con el Munisterio de Desarrollo Social y Familia", value: "Si, se interopera con el Munisterio de Desarrollo Social y Familia" },
        { label: "Si, se solicita a los(as) usuarios(as)", value: "Si, se solicita a los(as) usuarios(as)" },
        { label: "No se requiere información", value: "No se requiere información" },
    ]
    const opDisponibilidad = [
        { label: "Se puede realizar durante todo el año", value: "Se puede realizar durante todo el año" },
        { label: "Se puede realizar sólo en algunos períodos del año", value: "Se puede realizar sólo en algunos períodos del año" },
    ]

    return (
        <>
            <BaseFormSection className="grid grid-cols-2" sectionName="3. Usuarios(as)">
                <Input type="select" options={opPagoAsociado} label="Pago asociado" />
                <Input type="select" options={opTipoMoneda} label="Tipo de moneda" />
                <Input label="Monto a pagar" />
                <Input type="select" options={opTipoUsuario} label="Tipo de usuario(a)" />
                <Input type="select" options={opSegmentoUsuarios} label="Segmento de usuarios(as)" />
                <Input type="select" options={opDisponibilidad} label="Disponibilidad para su realización" />
                <Input type="select" options={opRSH} label="Relación con el Registro Social de Hogares y/o Registro de Información Social" />
            </BaseFormSection>
            <div className='flex justify-end py-4 gap-4'>
                <SecondaryButton type='link' href="/marco-normativo">Anterior</SecondaryButton>
                <PrimaryButton type='link' href="/soporte-electronico">Siguiente</PrimaryButton>
            </div>
        </>
    )
}

export default FormSection3