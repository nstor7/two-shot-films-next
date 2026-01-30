import Trabajos from '../../DB/trabajos'
import style from './video.module.css'

import Player from '../../components/player'
import { TbHours12 } from 'react-icons/tb'
// import { useState } from 'react'

const video = async ({params})=>{
    const {trabajo} = await params
    const Trabajo = Trabajos.find(Trabajo => Trabajo.vinculo === trabajo)

    return(
        <main className={style.proyecto} >
            <div className={style.proyectoContenido} >

                <div className={style.proyectoInfo} >
                <h1>{Trabajo.Titulo} </h1>
                <p className={style.proyectoInfoSub} > <i>{Trabajo.SubTitulo}</i> </p>
                <aside>
                    <p>{Trabajo.Genero} </p> 
                    <p>{Trabajo.cliente} </p>
                </aside>
        
            </div>
            <Player
                imagen = {Trabajo.Thumnail}
                video = {Trabajo.video}
            />
            </div>
            
           </main>
    )
}



export default video