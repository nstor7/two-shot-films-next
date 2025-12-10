"use client";

import {useState} from 'react'

export const useField =({type, id, clase})=> {
  const [value, setValue] = useState('')

  const className = clase
  const onChange = event =>{
    setValue(event.target.value)
  }
  const clean = ()=>{
    setValue('')
  }
  
  return{
    type,
    id,
    value,
    className,
    onChange,
    clean
  }
}


export const useServicio =({ firstValue})=>{
    const [value, setValue] = useState(firstValue)

  const onChange = event =>{
    setValue(event.target.value)
  }
  const clean = ()=>{
    setValue(firstValue)
  }
  
  return{
    firstValue,
    value,
    onChange,
    clean
  }
}


export const usePaquete=({ servicios })=>{
    const proyectoInicial = servicios[0].id
    const [proyecto, setProyecto] = useState(proyectoInicial)
    
    const elegir = eleccion =>{
        setProyecto(eleccion)
    }

    

    return(
        proyecto,
        elegir
    )
}

   
    