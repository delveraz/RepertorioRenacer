# Repertorio Renacer

Aplicación web del repertorio musical del Grupo Renacer.

## Despliegue en Vercel

Importa este repositorio en Vercel y usa la raíz del repositorio como directorio raíz. No se requiere comando de compilación. Vercel sirve `index.html` y publica las funciones de `api/`.

La aplicación usa `letras.pdf` para mostrar las letras y las funciones de `api/` para consultar y actualizar los datos del backend de Google Apps Script.

## Actualizar el backend

`Codigo.gs` está en la carpeta del proyecto para copiarlo manualmente a Apps Script; no lo publiques en GitHub porque contiene la clave administrativa. Después de pegarlo, guarda y actualiza el despliegue existente de la Aplicación web para que conserve su URL. El frontend usa esa URL a través de las funciones de Vercel en `api/`.

La selección de la próxima canción queda compartida para todos los usuarios en las propiedades del proyecto de Apps Script. El modo administrador permanece activo en la pestaña actual y se restaura al recargarla.
