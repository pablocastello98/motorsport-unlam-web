import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Inicializamos Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // 1. Extraemos los datos del formulario
    const { company, contactName, email, message } = await req.json();

    // 2. Validación 
    if (!email || !message || !company || !contactName) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" }, 
        { status: 400 }
      );
    }

    // 3. Envío del mail
    const data = await resend.emails.send({
      from: 'Web Motorsport <onboarding@resend.dev>', 
      to: [process.env.CONTACT_RECEIVER_EMAIL || 'cejasnahuel89@gmail.com'], 
      replyTo: email, // Esto permite que si le das a "Responder" en el mail, le escribas al interesado
      subject: `Nueva Consulta: ${company}`,
       html: `

        <h2>Nuevo mensaje desde la web de Motorsport UNLaM</h2>

        <p><strong>Empresa/Organización:</strong> ${company}</p>

        <p><strong>Persona de contacto:</strong> ${contactName}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Mensaje:</strong></p>

        <p>${message}</p>

      `,
    });

    // 4. Verificamos si hubo error en el envío de Resend
    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    return NextResponse.json({ message: "Email enviado con éxito", id: data.data?.id });

  } catch (error) {
    console.error("Error en el servidor:", error);
    return NextResponse.json(
      { error: "Error interno al procesar el envío" }, 
      { status: 500 }
    );
  }
}