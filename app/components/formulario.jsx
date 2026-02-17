"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import style from './formulario.module.css'
import {Servicios} from '../DB/servicios'
import { useField} from '../Controladores/formularioCTRL'


export default function Formulario({ServicioQuery, PaqueteQuery}) {
  const nombre = useField({type: 'text', id:'nombre', clase : style.formInput})
  const email = useField({type: 'email', id: 'email', clase : style.formInput})
  const telefono = useField({type: 'tel', id: 'telefono', clase : style.formInput})
  const servicio_elegido = Servicios.find(Servicio => Servicio.id === ServicioQuery)
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
      const Servicio_elegido = servicio_elegido.nombre 
      const Paquete_elegido = servicio_elegido.paquetes.find(paquete => paquete.id === PaqueteQuery).nombre
      console.log(Servicio_elegido)
      console.log(Paquete_elegido)
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
      

    } catch (error) {
      // 3. Error
      setMessage(`Error: ${error.message}. Por favor, verifica tus datos e inténtalo de nuevo.`);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  
  
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