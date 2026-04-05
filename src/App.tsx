// Importaciones
import { useReducer,useEffect } from "react"
import Header from "./Componente/Header"
import Formulario from "./Componente/Formulario"
import { ActividadReducer, StateInicial } from "./Reduce/Actividades_Reduce"
import CuadroGuardado from "./Componente/CuadroGuardado"
import TotalCalo from '../src/Componente/TotalCalo'

function App() {
    const [state, dispatch] = useReducer(ActividadReducer, StateInicial)

    

    useEffect(() =>{
        localStorage.setItem('Variable1',JSON.stringify(state.Variable1))
    },[state.Variable1])

    return (
        <>
            <Header  state={state} dispatch={dispatch}/>
            <Formulario dispatch={dispatch} state={state}/>
            <TotalCalo Variable1={state.Variable1}/>
            <CuadroGuardado variable1={state.Variable1} dispatch={dispatch}/>
        </>
    )
}

export default App
