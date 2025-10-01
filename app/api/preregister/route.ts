import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { validateEmail, validatePhone, type PreRegisterData } from '@/lib/models/PreRegister'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone } = body

    // Validaciones
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Nombre y email son requeridos' },
        { status: 400 }
      )
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    if (phone && !validatePhone(phone)) {
      return NextResponse.json(
        { error: 'Formato de teléfono inválido' },
        { status: 400 }
      )
    }

    // Conectar a MongoDB
    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB || 'taply')
    const collection = db.collection<PreRegisterData>('preregisters')

    // Verificar si el email ya está registrado
    const existingUser = await collection.findOne({ email })
    if (existingUser) {
      return NextResponse.json(
        { error: 'Este email ya está registrado' },
        { status: 409 }
      )
    }

    // Crear el registro
    const preRegister: PreRegisterData = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone?.trim() || undefined,
      createdAt: new Date(),
      source: 'landing',
    }

    const result = await collection.insertOne(preRegister)

    // Respuesta exitosa
    return NextResponse.json(
      {
        success: true,
        message: 'Prerregistro exitoso',
        id: result.insertedId,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error en prerregistro:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// Endpoint GET opcional para obtener estadísticas (proteger en producción)
export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB || 'taply')
    const collection = db.collection('preregisters')

    const count = await collection.countDocuments()

    return NextResponse.json({
      totalPreregisters: count,
    })
  } catch (error) {
    console.error('Error obteniendo estadísticas:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

