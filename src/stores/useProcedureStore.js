import { create } from 'zustand'

const useProcedureStore = create((set) => ({
    procedures: [],
    addProcedure: (data) => set(() => ({
        procedures: data
    }))
}))

export default useProcedureStore