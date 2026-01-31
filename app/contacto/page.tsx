import style from './contacto.module.css'
import {Form} from '../Controladores/formularioCTRL'
import { Suspense } from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contacto - TwoShotFilms",
  robots: {index: false, follow: false}
};

const Contacto = ()=>{

    return(
        <main className={style.contacto} >
            <div className={style.contactoContenido} >
                <Suspense fallback={<div>Cargando formulario...</div>}>
                    <Form />
                </Suspense>
                    
            </div>
        </main>    
    )
}

export default Contacto