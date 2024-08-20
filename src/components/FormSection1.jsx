import BaseFormSection from './BaseFormSection'
import PrimaryButton from './PrimaryButton'
import Input from './Input'
import { tiposRegistros, areasMunicipales, tiposInicio, productosInstitucionales } from '../data/options'
import { useState } from 'react'
import { infoTipoRegistro, infoTipoInicio, infoActoInicio, infoActoTermino } from '../data/infoData'

const FormSection1 = () => {

    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)
    const [modal3, setModal3] = useState(false)
    const [modal4, setModal4] = useState(false)

    return (
        <>
            <BaseFormSection sectionName="1. Identificación" className="grid grid-cols-2">

                <Input label="Nombre del procedimiento" />
                <Input help modal={modal} setModal={setModal} modalData={infoTipoRegistro} options={tiposRegistros} type="select" label="Tipo de registro" />
                <div className='col-span-2'>
                    <Input type="text" label="Descripción" />
                </div>
                <Input type="select" options={areasMunicipales} label="Área responsable" />
                <Input label="Cargo del responsable" />
                <Input help modal={modal2} setModal={setModal2} modalData={infoTipoInicio} type="select" options={tiposInicio} label="Tipo de inicio" />
                <Input help modal={modal3} setModal={setModal3} modalData={infoActoInicio} label="Acto de inicio" />
                <Input help modal={modal4} setModal={setModal4} modalData={infoActoTermino} label="Acto de término" />
                <Input type="select" options={productosInstitucionales} label="Producto Institucional" />


            </BaseFormSection>
            <div className='flex justify-end py-4'>
                <PrimaryButton type='link' href="marco-normativo">Siguiente</PrimaryButton>
            </div>
        </>
    )
}

export default FormSection1