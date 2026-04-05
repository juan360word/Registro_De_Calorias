
// Importaciones 

import { useMemo } from "react"
import type {  ActividadGuardada } from "../Reduce/Actividades_Reduce"


type Props = {
    Variable1 : ActividadGuardada[]
}


function TotalCalo({Variable1} : Props) {

    // Constadores de las calorias

    const ContadoresAumentadas = useMemo(()  => Variable1.reduce((total ,actividad) => actividad.Categoria === 1 ? total + actividad.Calorias : total,0) ,[Variable1])
    const ContadoresQuemados = useMemo(()  => Variable1.reduce((total ,actividad) => actividad.Categoria === 2 ? total + actividad.Calorias : total,0) ,[Variable1])
   
    
        // Suma calorías por categoría

  return (
    <>
    <section>
        <h2 className="text-4xl p-7 text-center font-black ">
            Tus calorias
        </h2>
        
        <div className="grid grid-cols-2 ">
            <div className="w-2xs rounded-3xl border mx-auto ">
                <p className="font-black pt-7 text-5xl text-center">
                       {ContadoresAumentadas}
                </p>
                <span className="flex justify-center font-black pt-5">consumidas</span>
            </div>
            <div className="w-2xs rounded-3xl border mx-auto ">
                <p className="font-black pt-7 text-5xl   text-center">
                       {ContadoresQuemados}
                </p>
                <span className="flex justify-center font-black pt-5">Quemadas</span>
            </div>
            
            
        </div>
        
    </section>
    </>
  )
}

export default TotalCalo