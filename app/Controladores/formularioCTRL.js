"use client";

import {useState} from 'react'
import { useSearchParams } from 'next/navigation';
import Formulario from '../components/formularioSubscripcion'
import MiniFormulario  from '../components/formulario'


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

export const Form = ()=>{
    const query = useSearchParams()
    if(query.size === 0){
        return(
          
            <Formulario/>
          
    )
    }
    else{
        const servicio = query.get('servicio')
        const paquete = query.get('paquete')

        return(
        <MiniFormulario
            ServicioQuery = {servicio}
            PaqueteQuery = {paquete}
           /> 
          
        )

    }
    

    
}

   
    