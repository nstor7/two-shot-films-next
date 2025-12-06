'use client'
import {useState} from 'react'
import style from './player.module.css'
import { FaYoutube } from 'react-icons/fa'

export default function Player({imagen, video}){
    const [activo, setEstado] = useState(false)
    function abrirvideo(){
        setEstado(!activo)
    }
     var className = (activo) ? style.proyectoVideoActivo : style.proyectoVideo
    return(
        <>
            <div className={style.proyectoPlayer} onClick={abrirvideo} >
                    <div className={style.proyectoPlayerCover}>
                         <FaYoutube />
                    </div>
                    <img src={imagen} alt="" className={style.proyectoPlayerImagen}  />
                </div>
                <div className={className}>
                    <p onClick={abrirvideo} >Cerrar</p>
                     <iframe  src={video} >
                    </iframe>
        </div>
            
            
        </>
    )
}