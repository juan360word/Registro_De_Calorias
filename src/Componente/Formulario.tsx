


// Importaciones 

import { Categoria } from "../Datos/Datos"
import { useState } from "react"


function Formulario() {

    const [Actividad,SetActividad] = useState({
        Categoria: 1,
        name : '',
        Calorias: ''
    })

    const Handle = (e : React.ChangeEvent<HTMLSelectElement> |  React.ChangeEvent<HTMLInputElement>) => {
        SetActividad({
            ...Actividad,[e.target.id] : e.target.value
        })
    }

  return (
   <>
   <section className="bg-[#89E900] py-30 px-5">
      <div className=" mx-auto max-w-5xl">
      <form  className="p-10 space-y-5 bg-white shadow-white rounded-4xl">
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

        <input type="submit" className=" bg-white  rounded-3xl border w-full  cursor-pointer hover:bg-[#222222] transition duration-400 ease-in hover:text-white "
        value='Guardar Procedimiento'
        />
      </form>
      </div>
    </section>
   </>
  )
}

export default Formulario