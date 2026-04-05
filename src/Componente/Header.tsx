import { useMemo, type Dispatch } from "react"
import type { ActividadActions, DatoActividad } from "../Reduce/Actividades_Reduce"

type HeaderProps = {
    state: DatoActividad
    dispatch: Dispatch<ActividadActions>
}

function Header({ state, dispatch }: HeaderProps) {
    const puedeBorrar = useMemo(
        () => state.Variable1.length > 0,
        [state.Variable1]
    )

    return (
        <>
            <header className="bg-[#222222]  py-4">
                <div className="flex justify-between mx-auto px-4 max-w-4xl">
                    <h1 className=" text-center  uppercase font-serif -tracking-tight  text-5xl text-white">
                        Registro de Calorias
                    </h1>
                    <button
                        type="button"
                        disabled={!puedeBorrar}
                        onClick={() => dispatch({ type: "Reiniciar" })}
                        className=" disabled:opacity-10 bg-white rounded-2xl p-2 hover:scale-105 hover:bg-red-600 cursor-pointer hover:text-white disabled:cursor-not-allowed"
                    >
                        Borrar Registros
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header
