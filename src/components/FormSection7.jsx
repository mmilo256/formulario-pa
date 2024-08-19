import BaseFormSection from './BaseFormSection'
import Input from './Input'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

const FormSection7 = () => {

    const saludar = () => {
        alert("Terminado")
    }

    return (
        <>
            <BaseFormSection className="grid grid-cols-2" sectionName="7. Datos y Documentos Requeridos">
                <Input label="Datos, documentos y/o expedientes de otros órganos de la administración del Estado" />
                <Input label="Medio utilizado para obtener datos, documentos y/o expedientes de otros órganos de la administración del Estado" />
                <Input label="Identifique la institución que provee el dato, documento (certificado) y/o expediente obtenido manualmente o que solicita a sus usuarios" />
                <Input label="Nombre del dato, documento,(certificado) y/o expediente obtenido manualmente o que solicita el usuario" />
                <Input label="Medio utilizado para interoperar electrónicamente" />
                <Input label="Institución que provee el dato, documento (certificado) y/o expediente a través de la PISEE o que interopera otros medios" />
                <Input label="Servicio web que consume a través de la PISEE o que interopera por otros medios" />
                <Input label="Documento notarial" />
                <Input label="Nombre del documento notarial" />
                <Input label="Medio utilizado para enviar comunicaciones oficiales entre órganos de la Administración del Estado" />
            </BaseFormSection>
            <div className='flex justify-end py-4 gap-4'>
                <SecondaryButton type='link' href="/notificaciones">Anterior</SecondaryButton>
                <PrimaryButton onClick={saludar} >Finalizar</PrimaryButton>
            </div>
        </>
    )
}

export default FormSection7