
import { useState } from 'react';

const seleccionProyecto =({proyecto, servicios})=>{

    return(
        <>
         <div className="mb-4">
          <label htmlFor="servicios" >Tipo de Servicio Interesado *</label>
            {servicios.map((servicio) => {
              return( <>
                <input value={servicio.id} type='radio' name='servicios' id={servicio.id} onChange={proyecto.onChange} />
                <label htmlFor={servicio.id} className="block text-sm font-medium text-gray-700" >{servicio.nombre}</label>
              </>)
             
            }

            )}
        </div>
        <div className='mb-4'>
            
            <label htmlFor="">Paquetes de {proyecto.nombre}</label>
            {proyecto.paquetes.map((paquete) =>{
                return(
                    <>
                        <input type="radio" value={paquete.id} name='paquetes' id={paquete.id} />
                        <label htmlFor={paquete.id} >{paquete.nombre} </label>
                    </>
                    
                )
            }
                
            )}
             
            
            
        </div>
        </>
        
    )
}

export default seleccionProyecto