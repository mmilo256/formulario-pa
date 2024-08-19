import { useState } from 'react'
import BaseFormSection from './BaseFormSection'
import Input from './Input'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

const FormSection2 = () => {

    const [fuentesNorm, setFuentesNorm] = useState("No")

    const otrasFuentes = [
        { value: "Si", label: "Si" },
        { value: "No", label: "No" }
    ]

    const fuentesNormativas = [
        { value: "Decreto (reglamento)", label: "Decreto (reglamento)" },
        { value: "Resolución", label: "Resolución" },
        { value: "Circular", label: "Circular" },
        { value: "Ordenanza", label: "Ordenanza" },
        { value: "Instrucciones generales", label: "Instrucciones generales" },
        { value: "Otro", label: "Otro" },
    ]

    return (
        <>
            <BaseFormSection className="grid grid-cols-2" sectionName="2. Marco Normativo">
                <Input label="N° de Ley" />
                <Input label={<span>URL de la Ley en Ley Chile <a target='_blank' className='text-blue-600' href='https://www.bcn.cl/leychile/'>(Ir a Ley Chile)</a></span>} />
                <Input value={fuentesNorm} onChange={(e) => { setFuentesNorm(e.target.value) }} type="select" options={otrasFuentes} label="Otras fuentes normativas" />
                {fuentesNorm === "Si" && <Input type="select" options={fuentesNormativas} label="Tipo de fuente normativa" />}
                {fuentesNorm === "Si" && <Input label="Nombre de fuente normativa" />}
                {fuentesNorm === "Si" && <Input label="URL de la otra fuente normativa" />}
            </BaseFormSection>
            <div className='flex justify-end py-4 gap-4'>
                <SecondaryButton type='link' href="/">Anterior</SecondaryButton>
                <PrimaryButton type='link' href="/usuarios">Siguiente</PrimaryButton>
            </div>
        </>
    )
}

export default FormSection2