import type { DatosExtra } from "../types/Types"

export type ActividadGuardada = DatosExtra & { i: number }

export type ActividadActions = {
    type: "GuardarActividad"
    payload: { NuevaActividad: DatosExtra }
}

export type DatoActividad = {
    Variable1: ActividadGuardada[]
}

export const StateInicial: DatoActividad = {
    Variable1: [],
}

export const ActividadReducer = (
    state: DatoActividad = StateInicial,
    actions: ActividadActions
): DatoActividad => {
    if (actions.type === "GuardarActividad") {
        const item: ActividadGuardada = {
            i : Date.now(),
            ...actions.payload.NuevaActividad,
        }
        return {
            ...state,
            Variable1: [...state.Variable1, item],
        }
    }
    return state
}
