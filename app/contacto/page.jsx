'use client'

import style from './contacto.module.css'
import Formulario from '../components/formularioSubscripcion'
import { useSearchParams } from 'next/navigation'
import MiniFormulario  from '../components/formulario'
import { Suspense } from 'react'



const Contacto = ()=>{
    const query = useSearchParams()
    if(query.size === 0){
        return(
        <main className={style.contacto} >
            <div className={style.contactoContenido} >
                <Suspense fallback={<div>Cargando formulario...</div>}>
                    <Formulario/>
                </Suspense>
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
                <Suspense fallback={<div>Cargando formulario...</div>}>
                <MiniFormulario
                    ServicioQuery = {servicio}
                    PaqueteQuery = {paquete}
                />
                </Suspense>
                
            </div>
        </main>
        )

    }
    

    
}

export default Contacto