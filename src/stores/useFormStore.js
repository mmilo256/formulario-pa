import { create } from 'zustand'

const useFormStore = create((set) => ({
    section1: {
        nombrePA: "",
        tipoRegistro: "",
        descripcion: "",
        areaResponsable: "",
        cargoResponsable: "",
        tipoInicio: "",
        actoInicio: "",
        actoTermino: "",
        prodInstitucional: "",
    },
    section2: {
        numLey: "",
        urlLey: "",
        fuentesNorm: "",
        tipoFuente: "",
        nombreFuente: "",
        urlFuente: "",
    },
    section3: {
        pago: "",
        tipoMoneda: "",
        monto: "",
        tipoUsuario: "",
        segmentoUsuarios: "",
        disponibilidad: "",
        rsh: "",
    },
    section4: {
        nivelDig: "",
        fechaDig: "",
        tipoExp: "",
        accesoExp: "", value: "",
        urlInicio: "",
        chileAtiende: "",
        urlChileAtiende: "",
        numPlataformas: "",
        alcancePlataformas: "",
        canalesAtencion: {
            digital: false,
            presencial: false,
            telefonico: false,
            autoatencion: false
        },
        canalesTransaccionales: {
            digital: false,
            presencial: false,
            telefonico: false,
            autoatencion: false
        },
        plataformas: {
            simple_saas: false,
            simple_onPremise: false,
            desarrollo_propio: false,
            plataformas_estado: false
        }
    },
    section5: {
        autenticacionUsuario: "",
        autenticacionFuncionario: "",
        firmaElec: ""
    },
    section6: {
        notificaciones: "",
        notifInicio: "",
        notifInstruc: "",
        notifTermino: "",
        comInstitucionales: "",
        comPersonales: "",
        etapasNotif: {
            inicio: false,
            instruccion: false,
            termino: false,
        }
    },
    section7: {
        docsOrganos: "",
        mediosOrganos: "",
        institucionProveedora: "",
        nombreDoc: "",
        medioInterop: "",
        institucionProveedora2: "",
        servicioWeb: "",
        docNotarial: "",
        nombreDocNotarial: "",
        medioComOficial: "",
    },
    setSection1: (data) => set(() => ({ section1: data })),
    setSection2: (data) => set(() => ({ section2: data })),
    setSection3: (data) => set(() => ({ section3: data })),
    setSection4: (data) => set(() => ({ section4: data })),
    setSection5: (data) => set(() => ({ section5: data })),
    setSection6: (data) => set(() => ({ section6: data })),
    setSection7: (data) => set(() => ({ section7: data })),
    resetForm: () => set(() => (
        {
            section1: {
                nombrePA: "",
                tipoRegistro: "",
                descripcion: "",
                areaResponsable: "",
                cargoResponsable: "",
                tipoInicio: "",
                actoInicio: "",
                actoTermino: "",
                prodInstitucional: "",
            },
            section2: {
                numLey: "",
                urlLey: "",
                fuentesNorm: "",
                tipoFuente: "",
                nombreFuente: "",
                urlFuente: "",
            },
            section3: {
                pago: "",
                tipoMoneda: "",
                monto: "",
                tipoUsuario: "",
                segmentoUsuarios: "",
                disponibilidad: "",
                rsh: "",
            },
            section4: {
                nivelDig: "",
                fechaDig: "",
                tipoExp: "",
                accesoExp: "", value: "",
                urlInicio: "",
                chileAtiende: "",
                urlChileAtiende: "",
                numPlataformas: "",
                alcancePlataformas: "",
                canalesAtencion: {
                    digital: false,
                    presencial: false,
                    telefonico: false,
                    autoatencion: false
                },
                canalesTransaccionales: {
                    digital: false,
                    presencial: false,
                    telefonico: false,
                    autoatencion: false
                },
                plataformas: {
                    simple_saas: false,
                    simple_onPremise: false,
                    desarrollo_propio: false,
                    plataformas_estado: false
                }
            },
            section5: {
                autenticacionUsuario: "",
                autenticacionFuncionario: "",
                firmaElec: ""
            },
            section6: {
                notificaciones: "",
                notifInicio: "",
                notifInstruc: "",
                notifTermino: "",
                comInstitucionales: "",
                comPersonales: "",
                etapasNotif: {
                    inicio: false,
                    instruccion: false,
                    termino: false,
                }
            },
            section7: {
                docsOrganos: "",
                mediosOrganos: "",
                institucionProveedora: "",
                nombreDoc: "",
                medioInterop: "",
                institucionProveedora2: "",
                servicioWeb: "",
                docNotarial: "",
                nombreDocNotarial: "",
                medioComOficial: "",
            }
        }
    ))
}))

export default useFormStore