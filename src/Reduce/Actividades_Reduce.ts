import type { DatosExtra } from "../types/Types"

export type ActividadGuardada = DatosExtra & { i: number }

export type ActividadActions = {
    type: "GuardarActividad"
    payload: { NuevaActividad: DatosExtra } } | {
        type: "ActividadEnviada"
        payload: { id: DatosExtra['id'] } } | {
            type: "Eliminar"
            payload: { id: DatosExtra['id'] } } | {
                type: "Reiniciar" }

export type DatoActividad = {
    Variable1: ActividadGuardada[],
    ActividadID : ActividadGuardada['id']
}

const local = () : ActividadGuardada[] => {
    const Variable1 = localStorage.getItem('Variable1')
    return  Variable1 ? JSON.parse(Variable1) : []
}

export const StateInicial: DatoActividad = {
    Variable1: local(),
    ActividadID : ''
}

export const ActividadReducer = (
    state: DatoActividad = StateInicial,
    actions: ActividadActions
): DatoActividad => {
    if (actions.type === "GuardarActividad") {
        let Actualizacion: ActividadGuardada[]

        if (state.ActividadID) {
            Actualizacion = state.Variable1.map((lol) =>
                lol.id === state.ActividadID
                    ? { ...actions.payload.NuevaActividad, i: lol.i }
                    : lol
            )
        } else {
            Actualizacion = [
                ...state.Variable1,
                { ...actions.payload.NuevaActividad, i: Date.now() },
            ]
        }
        return {
            ...state,
            Variable1: Actualizacion,
            ActividadID: ''
        }
    }

    if (actions.type === 'ActividadEnviada') {
        return {
            ...state,
            ActividadID:actions.payload.id
        }
    }

    if(actions.type === 'Eliminar'){
        return {
            ...state,
            Variable1: state.Variable1.filter(pop => pop.id !== actions.payload.id)
        }
    }

    if(actions.type === 'Reiniciar'){
        return {
            Variable1: [],
            ActividadID: ''
        }
    }

    return state
}
