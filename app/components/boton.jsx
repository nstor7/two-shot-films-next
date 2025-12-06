import Link  from 'next/link'
import style from './boton.module.css'

const boton = ({ texto, link}) => {
    return(
        <Link href={link} className={style.btnNegativo}>{texto}</Link>
    )
    
}

export default boton