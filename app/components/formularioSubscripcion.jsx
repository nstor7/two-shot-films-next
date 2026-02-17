"use client"; 

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import style from './formulario.module.css'
import Proyecto from './seleccionProyecto'
import {Servicios} from '../DB/servicios'
import { useField, useServicio} from '../Controladores/formularioCTRL'

export default function SubscriptionForm() {
  const router = useRouter()
  const nombre = useField({type: 'text', id:'nombre', clase : style.formInput})
  const email = useField({type: 'email', id: 'email', clase : style.formInput})
  const telefono = useField({type: 'tel', id: 'telefono', clase : style.formInput})
  const servicio_elegido = useServicio({firstValue: Servicios[0].id})
  const paquete_elegido = useServicio({firstValue:''})

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setIsError(false);
      const Nombre = nombre.value
      const Email = email.value
      const Telefono = telefono.value
      const Servicio_elegido = servicio_elegido.value
      const Paquete_elegido = paquete_elegido.value
    try {
      // 1. Enviar TODOS los datos a la API Route
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Nombre , Email, Telefono, 
            Servicio_elegido, Paquete_elegido}),
            
      });
      
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Error desconocido.');
      }

      // 2. Éxito
      router.replace('/gracias')
      setIsError(false);
      
      // Limpiar formulario
      nombre.clean()
      email.clean()
      telefono.clean()
      servicio_elegido.clean();
      paquete_elegido.clean()
      

    } catch (error) {
      // 3. Error
      setMessage(`Error: ${error.message}. Por favor, verifica tus datos e inténtalo de nuevo.`);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  
  const Service = Servicios.find(Servicio => Servicio.id === servicio_elegido.value)
  
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h2 className="text-2xl font-bold mb-4">Solicita tu Cotización Personalizada</h2>
      
      {/* --- Campos de Contacto --- */}
      <div className={style.formBasicos}>
        <div className={style.formBasicosCampo}>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
          <input 
          {...nombre}
          required />
        </div>
        <div className={style.formBasicosCampo}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico *</label>
          <input 
          {...email} 
          required  />
        </div>
        <div className={style.formBasicosCampo}>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
          <input 
          {...telefono}
          />
        </div>
        
      </div>
      {/* --- Campos del Proyecto --- */}
    
         <div className={style.formServicios}>
          <label htmlFor="servicios" >Tipo de Servicio Interesado *</label>
          <div className={style.formServiciosRadio} >
            {Servicios.map((servicio) => {
              return( <div className={style.formServiciosRadioItem}>
                <input value={servicio.id} type='radio' name='servicios' id={servicio.id} onChange={servicio_elegido.onChange} />
                
                <label htmlFor={servicio.id} className="block text-sm font-medium text-gray-700" >{servicio.nombre}</label>
              </div>)
             
            }

            )}
          </div>  
        </div>
        <div className={style.formServicios}>
            
            <label htmlFor="">Paquetes de {Service.nombre}</label>
            <div className={style.formServiciosRadio}></div>
            {Service.paquetes.map((paquete) =>{
                return(
                    <div className={style.formServiciosRadioItem} >
                        <input type="radio" value={paquete.id} name='paquetes' id={paquete.id} onChange={paquete_elegido.onChange}/>
                        <label htmlFor={paquete.id} >{paquete.nombre} </label>
                    
                   </div>
                    
                )
            }
                
            )}
             
            
            
        </div>
      <button 
        type="submit" 
        disabled={isLoading} 
        className={style.formButton}
      >
        {isLoading ? 'Enviando Solicitud...' : 'Solicitar Cotización'}
      </button>

      {message && <p className={`mt-3 text-sm ${isError ? 'text-red-500' : 'text-green-600'}`}>{message}</p>}
    </form>
  );
}