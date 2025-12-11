import style from './contacto.module.css'
import {Form} from '../Controladores/formularioCTRL'

    
const Contacto = ()=>{

    return(
        <main className={style.contacto} >
            <div className={style.contactoContenido} >
                <Form />
            </div>
        </main>    
    )
}

export default Contacto