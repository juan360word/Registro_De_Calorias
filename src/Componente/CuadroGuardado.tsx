

// importtaciones 

import type { DatosExtra } from "../types/Types"
import { Categoria } from "../Datos/Datos"



type variable1actividades = {
    variable1: DatosExtra[]
    
}

function CuadroGuardado({variable1} : variable1actividades) {

  return (
    <>
        
        <h1 className="text-5xl text-center  text-olive-700 p-8 font-black transition delay-150  duration-300 ease-in-out hover:text-lime-600 hover:scale-105">
            Muestra de lo Guardado
        </h1>
       
        {variable1.map(item =>(
            <div key={item.id} className="max-w-3xl mx-auto mt-16  font-black text-white bg-black p-5 rounded-lg ">
                <div className="flex justify-between">
                    <p className={`text-2xl uppercase ${item.Categoria === 1  ? 'text-orange-300' : 'text-red-400'}`}>
                         {Categoria.find(cat => cat.id === item.Categoria)?.Categoria ?? ''}
                    </p>
                    <p className=" text-4xl pt-6  ">
                        {item.name}
                    </p>
                    <p className="text-2xl ">
                        {item.Calorias} {''}
                        <span className="text-[#89E900]">Calorias</span>
                    </p>
                </div>

                <div>

                </div>
            </div>
       
        ))}
        
    </>
  )
}

export default CuadroGuardado