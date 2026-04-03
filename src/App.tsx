// Importaciones
import { useReducer } from "react"
import Header from "./Componente/Header"
import Formulario from "./Componente/Formulario"
import { ActividadReducer, StateInicial } from "./Reduce/Actividades_Reduce"
import CuadroGuardado from "./Componente/CuadroGuardado"

function App() {
    const [state, dispatch] = useReducer(ActividadReducer, StateInicial)

    return (
        <>
            <Header />
            <Formulario dispatch={dispatch} />
            <CuadroGuardado variable1={state.Variable1}/>
        </>
    )
}

export default App
