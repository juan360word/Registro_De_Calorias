// Importaciones
import { Categoria } from "../Datos/Datos"
import {  type ActividadActions, type DatoActividad } from "../Reduce/Actividades_Reduce"
import type { DatosExtra } from "../types/Types"
import { useState, type Dispatch,useEffect } from "react"
import {v4 as uuidv4} from 'uuid'


type FormsProp = {
    dispatch: Dispatch<ActividadActions>
    state: DatoActividad
}

 export const Informacion = {
    id: uuidv4(),
    Categoria: 1,
        name : '',
        Calorias: 0
}

function Formulario({ dispatch,state }: FormsProp) {

    const [Actividad,SetActividad] = useState<DatosExtra>(
        Informacion
    )


    useEffect(() => {
        if(state.ActividadID){
            const SeleccionActividad = state.Variable1.filter(stateItem => stateItem.id === state.ActividadID)[0]
            SetActividad(SeleccionActividad)
        }
    },[state.ActividadID])

    const Handle = (e : React.ChangeEvent<HTMLSelectElement> |  React.ChangeEvent<HTMLInputElement>) => {
        
        const EncontrarNumero = ['Categoria','Calorias'].includes(e.target.id)
        
        SetActividad({
            ...Actividad,[e.target.id] : EncontrarNumero ? +e.target.value : e.target.value
        })
    }

    
    const ValidacionActividad = () => {
        const {name,Calorias} = Actividad
        return name.trim() !== '' && Calorias > 0
    }
    
    const Envio = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({
            type: "GuardarActividad",
            payload: { NuevaActividad: Actividad },
        })
        SetActividad({...Informacion, id : uuidv4()})
    }


    
  return (
   <>
   
   <section className=" bg-linear-to-r from-blue-600 to-cyan-400  max-w-6xl rounded-3xl mt-16 mx-auto py-30 px-5">
      <div className=" mx-auto max-w-5xl">
      <form  onSubmit={Envio} className="p-10 space-y-5 bg-white shadow-white rounded-4xl">
        <div className="grid grid-cols-2 gap-4">
            <label className="font-black" htmlFor="Categoria">Categoria ➡️ </label>
            <select value={Actividad.Categoria} onChange={Handle} id="Categoria" className="w-full border rounded-3xl bg-white  text-shadow-amber-500">
                {Categoria.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.Categoria}
                    </option>
                ))}
            </select>

        </div>

        <div className="grid grid-cols-2 gap-4">
        <label className="font-black" htmlFor="name">Actividad ➡️ </label>
        <input value={Actividad.name} onChange={Handle} type="text" placeholder=" Ingresa tu Actividad" id="name" className="w-full border rounded-3xl  bg-white " />
        </div>

        <div className="grid grid-cols-2 gap-4">
        <label className="font-black" htmlFor="categoria">Calorias ➡️ </label>
        <input value={Actividad.Calorias} type="Number" onChange={Handle} placeholder=" Ingresa lo que quemaste 300 o 500" id="Calorias" className="w-full border rounded-3xl  bg-white " />
        </div>

        <input type="submit" disabled={!ValidacionActividad()} className=" bg-white  rounded-3xl border w-full  cursor-pointer hover:bg-[#222222] transition duration-400 ease-in hover:text-white "
        value={Actividad.Categoria === 1 ? ' Registrar Comida ' : 'Registrar Ejercicio'}
        />
      </form>
      </div>
    </section>
   </>
  )
}

export default Formulario