// app/api/subscribe/route.js
// Instala 'resend' si aún no lo has hecho: npm install resend

import { Resend } from 'resend';

// Inicializar Resend con la clave de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

// Función auxiliar para enviar la notificación (usando Resend)
async function sendNotificationEmail(leadData) {
    const DESTINO = process.env.EMAIL_DESTINO;
    const { Nombre, Email, Telefono, Servicio_elegido, Paquete_elegido } = leadData;
    
    // Verificación de credenciales básicas
    if (!DESTINO || !process.env.RESEND_API_KEY) {
        console.error("Resend no configurado. No se enviará la notificación.");
        return; 
    }

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <body>
            <h2>🎉 Nuevo Lead de Cotización Recibido</h2>
            <p><strong>Nombre:</strong> ${Nombre}</p>
            <p><strong>Email:</strong> ${Email}</p>
            <p><strong>Teléfono:</strong> ${Telefono || 'N/A'}</p>
            <p><strong>Servicio:</strong> ${Servicio_elegido}</p>
            <p><strong>Paquete:</strong> ${Paquete_elegido}</p>

        </body>
        </html>
    `;
    
    try {
        await resend.emails.send({
            // El 'from' debe ser un dominio verificado o un dominio de prueba de Resend
            from: 'TwoShotFilms Leads <onboarding@resend.dev>', // Ejemplo con dominio de Resend
            to: [DESTINO], // Tu email personal
            subject: `NUEVO LEAD: ${Nombre} - ${Paquete_elegido}`,
            html: htmlContent,
        });
        console.log("Notificación por Resend enviada con éxito.");
    } catch (error) {
        console.error("Error al enviar notificación por Resend:", error);
    }
}


export async function POST(request) {
    // 1. Obtener todos los datos del formulario
    const leadData = await request.json(); 
    const { Email, Nombre, Telefono, Servicio_elegido, Paquete_elegido } = leadData;

    // Verificación de datos esenciales
    if (!Email) {
        return new Response(JSON.stringify({ error: "El email es requerido." }), { status: 400 });
    }

    // 2. Definir credenciales de Mailchimp
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;
    const mailchimpUrl = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;
    
    // 3. Crear el objeto para Mailchimp (asegúrate de que los MERGE FIELDS coincidan con tu cuenta)
    const mailchimpData = {
        email_address: Email,
        status: 'subscribed', 
        merge_fields: {
          FNAME: Nombre || '',
          PHONE: Telefono || '',
          SERVICE: Servicio_elegido || '',  
          PACK: Paquete_elegido || '',        
        }
    };

    try {
        // --- 4. Enviar a MAILCHIMP ---
        const response = await fetch(mailchimpUrl, {
            method: 'POST',
            headers: {
                Authorization: `apikey ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mailchimpData),
        });

        const mailchimpResponseData = await response.json();

        // 5. Manejar el éxito (o si el usuario ya existe)
        if (response.status === 200 || response.status === 201 || mailchimpResponseData.title === "Member Exists") {
            
            // 6. Si Mailchimp fue exitoso, envía la notificación a tu email (Resend)
            await sendNotificationEmail(leadData);
            
            return new Response(JSON.stringify({ message: "¡Solicitud recibida! Te contactaremos pronto." }), { status: 200 });
        }
        
        // Manejar otros errores de Mailchimp
        return new Response(JSON.stringify({ error: mailchimpResponseData.detail || "Error al suscribir el email." }), { status: response.status });

    } catch (error) {
        console.error("Fallo general en la API Route:", error);
        return new Response(JSON.stringify({ error: "Error de servidor interno." }), { status: 500 });
    }
}