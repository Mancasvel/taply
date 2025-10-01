import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal | Taply',
  description: 'Aviso legal de Taply. Información sobre la empresa, condiciones de uso y responsabilidades según la LSSI-CE.',
}

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-taply-dark text-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Aviso Legal
        </h1>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-taply-gray-dark/50 p-8 rounded-2xl border border-gray-800">
            <pre className="whitespace-pre-wrap text-gray-300 leading-relaxed">
{`AVISO LEGAL

1. INFORMACIÓN GENERAL

Este sitio web taply.com y la aplicación móvil TAPLY son propiedad de TAPLY, S.L. (en adelante, "la empresa"), con domicilio social en [Dirección completa], [Código Postal], [Ciudad], [Provincia], España, y CIF/NIF [Número de identificación fiscal].

Registro mercantil: Inscrita en el Registro Mercantil de [Ciudad], Tomo [Número], Folio [Número], Sección [Número], Hoja [Número].

2. OBJETO

El presente aviso legal regula el uso del sitio web taply.com y la aplicación móvil TAPLY, que la empresa pone a disposición de los usuarios de Internet.

3. CONDICIONES DE USO

3.1 Acceso al sitio web:
El acceso a este sitio web es responsabilidad exclusiva del usuario. El acceso no implica ningún tipo de relación comercial entre TAPLY y el usuario.

3.2 Uso correcto del sitio web:
El usuario se compromete a utilizar el sitio web de conformidad con la ley, la moral, las buenas costumbres y el orden público.

3.3 Propiedad intelectual:
Todo el contenido del sitio web (textos, imágenes, diseños, software, etc.) está protegido por derechos de propiedad intelectual propiedad de TAPLY o sus licenciantes.

4. EXCLUSIÓN DE RESPONSABILIDAD

4.1 Por el contenido:
TAPLY no se hace responsable de las opiniones expresadas en el sitio web por terceros, ni de la información contenida en páginas web de terceros a las que se pueda acceder mediante enlaces.

4.2 Por el funcionamiento técnico:
TAPLY no garantiza la disponibilidad, continuidad ni infalibilidad del funcionamiento del sitio web, y en consecuencia excluye cualquier responsabilidad por daños y perjuicios de toda naturaleza que puedan deberse a la falta de disponibilidad o continuidad.

4.3 Por daños al usuario:
TAPLY no se hace responsable de los posibles daños o perjuicios al usuario como consecuencia de interferencias, interrupciones, virus informáticos, averías telefónicas o desconexiones en el funcionamiento operativo del sistema electrónico.

5. PROTECCIÓN DE DATOS PERSONALES

De acuerdo con el Reglamento (UE) 2016/679 y la Ley Orgánica 3/2018, TAPLY trata los datos personales según su Política de Privacidad, disponible en el sitio web.

6. LEGISLACIÓN APLICABLE

El presente aviso legal se rige por la legislación española vigente:
- Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE)
- Reglamento (UE) 2016/679 relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales
- Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales

7. JURISDICCIÓN

Para la resolución de cualquier controversia que pueda surgir en relación con este sitio web, las partes se someten a los Juzgados y Tribunales de [Ciudad], España, renunciando a cualquier otro fuero que pudiera corresponderles.

8. MODIFICACIONES

TAPLY se reserva el derecho de modificar el presente aviso legal en cualquier momento, publicando las modificaciones en el sitio web.

9. CONTACTO

Para cualquier consulta relacionada con este aviso legal, puede contactar con TAPLY en:
- Dirección: [Dirección completa de la empresa]
- Teléfono: [+34] [Número de teléfono]
- Email: legal@taply.com
- Sitio web: taply.com

Última actualización: Octubre 2025`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
