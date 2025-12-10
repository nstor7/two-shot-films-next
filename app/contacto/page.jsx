'use client'

import style from './contacto.module.css'
import Formulario from '../components/formularioSubscripcion'
import { useSearchParams } from 'next/navigation'
import MiniFormulario  from '../components/formulario'



const Contacto = ()=>{
    const query = useSearchParams()
    console.log(query)
    if(query.size === 0){
        return(
        <main className={style.contacto} >
            <div className={style.contactoContenido} >
                <Formulario/>
            </div>
        </main>
    )
    }
    else{
        const servicio = query.get('servicio')
        const paquete = query.get('paquete')

        return(
        <main className={style.contacto} >
            <div className={style.contactoContenido} >
                <MiniFormulario
                    ServicioQuery = {servicio}
                    PaqueteQuery = {paquete}
                />
            </div>
        </main>
        )

    }
    

    
}

export default Contacto