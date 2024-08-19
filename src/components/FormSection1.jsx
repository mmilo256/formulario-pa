import BaseFormSection from './BaseFormSection'
import PrimaryButton from './PrimaryButton'
import Input from './Input'
import { tiposRegistros, areasMunicipales, tiposInicio, productosInstitucionales } from '../utils/options'

const FormSection1 = () => {


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