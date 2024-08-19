import BaseFormSection from './BaseFormSection'
import PrimaryButton from './PrimaryButton'
import Input from './Input'

const FormSection1 = () => {

    const tiposRegistros = [
        { label: "Procedimiento Administrativo de función común", value: "Procedimiento Administrativo de función común" },
        { label: "Procedimiento Administrativo de función específica", value: "Procedimiento Administrativo de función específica" },
        { label: "Otras tramitaciones", value: "Otras tramitaciones" }
    ]
    const areasMunicipales = [
        { label: "Administración Municipal", value: "Administración Municipal" },
        { label: "Administración y Finanzas", value: "Administración y Finanzas" },
        { label: "Secretaría Municipal", value: "Secretaría Municipal" },
        { label: "Tránsito y Transporte Público", value: "Tránsito y Transporte Público" },
        { label: "DIDECO", value: "DIDECO" },
        { label: "DIDEL", value: "DIDEL" },
        { label: "Obras Municipales", value: "Obras Municipales" },
        { label: "SECPLAN", value: "SECPLAN" },
        { label: "Control Interno", value: "Control Interno" },
        { label: "Asesoría Jurídica", value: "Asesoría Jurídica" },
        { label: "Juzgado de Policía Local", value: "Juzgado de Policía Local" }
    ]
    const tiposInicio = [
        { value: "De oficio", label: "De oficio" },
        { value: "Solicitud de partes", label: "Solicitud de partes" },
        { value: "Ambos: De oficio y solicitud de partes", label: "Ambos: De oficio y solicitud de partes" }
    ]
    const productosInstitucionales = [
        { value: "Acreditación", label: "Acreditación" },
        { value: "Atención y/o información ciudadana", label: "Atención y/o información ciudadana" },
        { value: "Autorización", label: "Autorización" },
        { value: "Avalúo", label: "Avalúo" },
        { value: "Beca", label: "Beca" },
        { value: "Bienes fiscales", label: "Bienes fiscales" },
        { value: "Bonos", label: "Bonos" },
        { value: "Capacitación y asistencia técnica", label: "Capacitación y asistencia técnica" },
        { value: "Créditos", label: "Créditos" },
        { value: "Extensiones", label: "Extensiones" },
        { value: "Fiscalización", label: "Acreditación" },
        { value: "Fondos concursables y/o postulables", label: "Fondos concursables y/o postulables" },
        { value: "Pensiones", label: "Pensiones" },
        { value: "Prestaciones", label: "Prestaciones" },
        { value: "Pronunciamiento", label: "Pronunciamiento" },
        { value: "Subsidios", label: "Subsidios" },
        { value: "Recaudación y pagos", label: "Recaudación y pagos" },
        { value: "Registros", label: "Registros" },
        { value: "Otros", label: "Otros" }
    ]

    return (
        <>
            <BaseFormSection sectionName="1. Identificación" className="grid grid-cols-2">

                <Input label="Nombre del procedimiento" />
                <Input options={tiposRegistros} type="select" label="Tipo de registro" />
                <div className='col-span-2'>
                    <Input type="text" label="Descripción" />
                </div>
                <Input type="select" options={areasMunicipales} label="Área responsable" />
                <Input label="Cargo del responsable" />
                <Input type="select" options={tiposInicio} label="Tipo de inicio" />
                <Input label="Acto de inicio" />
                <Input label="Acto de término" />
                <Input type="select" options={productosInstitucionales} label="Producto Institucional" />


            </BaseFormSection>
            <div className='flex justify-end py-4'>
                <PrimaryButton type='link' href="marco-normativo">Siguiente</PrimaryButton>
            </div>
        </>
    )
}

export default FormSection1