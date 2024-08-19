import BaseFormSection from './BaseFormSection'
import Input from './Input'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import { opPagoAsociado, opTipoMoneda, opTipoUsuario, opSegmentoUsuarios, opDisponibilidad, opRSH } from '../utils/options'

const FormSection3 = () => {



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