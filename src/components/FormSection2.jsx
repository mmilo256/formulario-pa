import { useEffect, useState } from 'react'
import BaseFormSection from './BaseFormSection'
import Input from './Input'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import { opSiNo, fuentesNormativas } from '../data/options'
import { useNavigate } from 'react-router-dom'
import useFormStore from '../stores/useFormStore'
import { infoNumLey } from '../data/infoData'

const FormSection2 = () => {

    // Navigation
    const navigate = useNavigate()

    // STORES
    const sectionData = useFormStore(state => state.section2)
    const setSection2 = useFormStore(state => state.setSection2)

    // CAMPOS
    const [numLey, setNumLey] = useState(sectionData.numLey)
    const [urlLey, setUrlLey] = useState(sectionData.urlLey)
    const [fuentesNorm, setFuentesNorm] = useState(sectionData.fuentesNorm)
    const [tipoFuente, setTipoFuente] = useState(sectionData.tipoFuente)
    const [nombreFuente, setNombreFuente] = useState(sectionData.nombreFuente)
    const [urlFuente, setUrlFuente] = useState(sectionData.urlFuente)

    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        if (numLey && urlLey && fuentesNorm) {
            if (fuentesNorm === "Si") {
                if (tipoFuente && nombreFuente && urlFuente) {
                    setIsValid(true)
                } else {
                    setIsValid(false)
                }
            } else {
                setIsValid(true)
            }
        } else {
            setIsValid(false)
        }
    }, [numLey, urlLey, fuentesNorm, tipoFuente, nombreFuente, urlFuente])

    // MODALES
    const [modalLey, setModalLey] = useState(false)

    const handleSubmit = () => {
        const data = {
            numLey,
            urlLey,
            fuentesNorm,
            tipoFuente,
            nombreFuente,
            urlFuente
        }
        setSection2(data)
        navigate("/usuarios")
    }


    return (
        <>
            <BaseFormSection className="grid grid-cols-2" sectionName="2. Marco Normativo">
                <Input placeholder="Ej: 20927" help modal={modalLey} setModal={setModalLey} modalData={infoNumLey} value={numLey} onChange={setNumLey} label="N° de Ley" />
                <Input value={urlLey} onChange={setUrlLey} label={<span>URL de la Ley en Ley Chile <a target='_blank' className='text-blue-600' href='https://www.bcn.cl/leychile/'>(Ir a Ley Chile)</a></span>} />
                <Input value={fuentesNorm} onChange={setFuentesNorm} type="select" options={opSiNo} label="Otras fuentes normativas" />
                {fuentesNorm === "Si" && <Input value={tipoFuente} onChange={setTipoFuente} type="select" options={fuentesNormativas} label="Tipo de fuente normativa" />}
                {fuentesNorm === "Si" && <Input value={nombreFuente} onChange={setNombreFuente} label="Nombre de fuente normativa" />}
                {fuentesNorm === "Si" && <Input value={urlFuente} onChange={setUrlFuente} label="URL de la otra fuente normativa" />}
            </BaseFormSection>
            <div className='flex justify-end py-4 gap-4'>
                <SecondaryButton type='link' href="/identificacion">Anterior</SecondaryButton>
                <PrimaryButton disabled={!isValid} onClick={handleSubmit}>Siguiente</PrimaryButton>
            </div>
        </>
    )
}

export default FormSection2