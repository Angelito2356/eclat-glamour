# Eclat&Glamour — Guía rápida de personalización

## Cambiar los colores (lo que pediste)

Al inicio de `index.html`, dentro de `<style>`, busca este bloque:

```css
:root{
  --blush:      #FFF7F9;   /* fondo principal, blanco cálido */
  --blush-card: #FFFFFF;   /* fondo de tarjetas de producto */
  --rose-soft:  #F3C8D9;   /* rosa suave, para bordes/detalles */
  --fuchsia:    #C81E64;   /* rosa fuerte, botones y acentos principales */
  --fuchsia-dk: #9E1750;   /* rosa fuerte oscuro, hover de botones */
  --ink:        #1A1117;   /* negro cálido, para textos y sección noche */
}
```

Cambia solo los valores hexadecimales (`#C81E64` etc.) y **todo el sitio se actualiza automáticamente**
— botones, títulos, tarjetas, sección de contacto, todo usa estas mismas variables.

Si tienes el código de color exacto de tu logo (por ejemplo desde Canva: clic derecho en el color → "copiar código hex"),
solo reemplaza `--fuchsia` por ese valor.

## Qué más puedes editar

- **Productos:** cada bloque `<div class="card" data-category="damas">` es un producto.
  Cambia el `data-category` a `damas`, `caballeros` o `ninos` según corresponda — las pestañas
  de filtro ya funcionan automáticamente con eso.
- **Fotos:** reemplaza los recuadros "FOTO DEL PRODUCTO" agregando `<img src="foto.jpg">` dentro de `.card-img`.
- **WhatsApp:** el número ya está puesto (+593 98 831 8915), aparece 2 veces en el archivo.
- **Nombre/tagline:** busca "Eclat" y "Perfumería" para ajustar textos.

## Publicar (igual que antes)

1. netlify.com → crear cuenta gratis
2. Arrastra la carpeta completa (`index.html`, `manifest.json`, `sw.js`, e íconos) a "Deploy manually"
3. Te da un link tipo `https://eclatglamour.netlify.app`
4. En el celular: Android → menú → "Añadir a pantalla de inicio". iPhone → compartir → "Añadir a inicio"

## Fondo del hero: rotación por marca (nuevo)

El fondo del encabezado ahora rota automáticamente cada 5 segundos entre 3 fotos, una por marca,
y también se puede cambiar manualmente con las pastillas **L'bel / Ésika / Cyzone** debajo de los botones.

Archivos actuales:
- `fondo-lbel.jpg` → **temporal** (degradado negro/dorado), reemplázalo por una foto real de L'bel
- `fondo-esika.jpg` → la foto que subiste de productos Ésika
- `fondo-cyzone.jpg` → **temporal** (degradado fucsia/turquesa), reemplázalo por una foto real de Cyzone

**Para cambiar cualquiera de las 3:** solo reemplaza el archivo por tu nueva foto usando el mismo nombre
(por ejemplo, reemplaza `fondo-lbel.jpg` por tu foto real de L'bel, con ese mismo nombre de archivo).

Recomendación: usa fotos oficiales que te compartan tus proveedoras/las marcas para consultoras,
así te aseguras de tener permiso de uso y buena calidad de imagen.

Si quieres agregar una cuarta marca o quitar alguna, dímelo y ajustamos el código.

## Ver la foto en grande (nuevo)

Ahora, al hacer clic (o tap en el celular) sobre la foto de cualquier producto, se abre en grande sobre la pantalla.
Para que esto funcione con tus fotos reales:

1. Crea una carpeta llamada `fotos` en el mismo lugar donde está `index.html`
2. Guarda cada foto con el nombre exacto que ya está asignado en el código, por ejemplo:
   - `fotos/eau-de-parfum-fleur.jpg`
   - `fotos/set-skincare-glow.jpg`
   - `fotos/eau-de-toilette-noir.jpg`
   - `fotos/kit-afeitado-premium.jpg`
   - `fotos/colonia-suave-baby.jpg`
   - `fotos/set-bano-divertido.jpg`

Si agregas un producto nuevo, copia una tarjeta existente y cambia el nombre en `data-img="fotos/tu-archivo.jpg"`
(esa línea está justo dentro de `<div class="card-img" data-img="...">`).

Mientras no exista la foto, al hacer clic aparecerá un aviso indicando la ruta exacta donde debes colocarla —
así sabrás si falta algún archivo.

## Logo (ya integrado)

- `logo-header.png` → versión sin fondo, usada en el encabezado del sitio
- `logo-full.png` → versión completa con el tagline "...más que moda y belleza", sin fondo (por si quieres usarla en otra parte, como redes sociales)
- `icon-192.png` / `icon-512.png` → recorte cuadrado solo de la flor, ya listos como íconos de la app
- Los colores del sitio (`--fuchsia`, `--fuchsia-dk`, `--rose-soft`) ya fueron ajustados al tono **exacto** de tu logo real

Si más adelante cambias de logo, solo reemplaza estos 4 archivos por los nuevos (mismo nombre) y el sitio se actualiza automáticamente.

## Catálogo por lista de datos (nuevo)

Ya no hay que copiar/pegar tarjetas HTML. Todo el catálogo vive en un solo lugar dentro de `index.html`:
busca `const PRODUCTOS = [` (cerca del final del archivo, dentro de `<script>`).

Cada producto es un bloque así:

```js
{ id:'nombre-unico', marca:"Ésika", categoria:'damas', nombre:"Nombre del perfume",
  descripcion:"Frase corta.", precio:"$30.00",
  foto:"fotos/nombre-del-archivo.jpg",
  notas:{ tipo:'detallada', familia:'Floral',
    salida:"...", corazon:"...", fondo:"..." } },
```

**Para agregar un producto nuevo:** copia un bloque completo (con sus llaves `{ }`), pégalo antes del `];` que cierra la lista, y cambia:
- `id` → algo único, sin espacios ni tildes (ej: `'mi-perfume-nuevo'`)
- `categoria` → `'damas'`, `'caballeros'` o `'ninos'`
- `foto` → la ruta dentro de `fotos/`
- `precio` → puedes escribir el precio real, o dejar `"Consultar precio"` si aún no lo tienes

**Sobre los precios:** como no me diste los precios reales de los 19 productos nuevos, los dejé todos en `"Consultar precio"`. Búscalos en el archivo y reemplázalos por el valor real cuando los tengas — no hace falta tocar nada más, el catálogo se genera solo.

## Pestaña "Notas Olfativas" (nuevo)

Cada producto ahora tiene, dentro del `notas:{ ... }`, uno de estos 3 tipos:

- `tipo:'detallada'` → cuando encontré el desglose oficial completo (salida / corazón / fondo)
- `tipo:'general'` → cuando la marca solo publicó una descripción general del aroma (no el desglose completo)
- `tipo:'pendiente'` → cuando aún no se han investigado/agregado (por ejemplo, en productos que no pertenecen a L'bel, Ésika o Cyzone)

Las notas de los 19 productos que enviaste vienen directamente de fichas oficiales de fabricante/tienda — no fueron inventadas. Para "Vibranza Provocative", "Oud Elixir", "Nitro", "Illusion" y "Fist Victory" solo encontré descripciones generales (no el desglose completo salida/corazón/fondo), así que quedaron marcadas como `tipo:'general'`.

## Productos de skincare / dermocosmética (nuevo)

Ya agregué los 9 productos de L'bel que enviaste (Concentré Total B3, Concentré Cell+ 45, Concentré Cell Hialurónico FPS30, Défense Total FPS50, Forever Hydra 72H, Forever Ultra Matte, Nocturne Sérum PM, Spécialiste Aclarador Nocturno y Spécialiste Matificante).

Para estos productos, la pestaña del lightbox dice **"Características"** en vez de "Notas Olfativas" — esto es automático: solo agrega `tipoProducto:'skincare'` al producto y el sitio se encarga del resto.

La estructura de `notas` para skincare es distinta a la de perfumes:

```js
{ id:'mi-producto-skincare', marca:"L'bel", categoria:'damas', nombre:"Nombre del producto",
  descripcion:"Frase corta.", precio:"Consultar precio",
  foto:"fotos/archivo.jpg", tipoProducto:'skincare',
  notas:{ tipo:'detallada',
    activos:"Ingrediente(s) principal(es)",
    beneficios:"Qué logra el producto",
    modoUso:"Cómo y cuándo aplicarlo",
    piel:"Para qué tipo de piel es ideal" } },
```

Si NO agregas `tipoProducto:'skincare'`, el producto se trata como perfume por defecto (pestaña "Notas Olfativas").

## Formulario de contacto: recibir mensajes por correo y WhatsApp (nuevo)

El formulario ya no es una demo. Ahora tiene dos formas reales de contacto:

**1. Botón "Enviar mensaje"** → envía los datos a tu correo usando **Netlify Forms** (gratis, ya viene incluido con tu hosting).

**2. Botón "Escribir por WhatsApp"** → toma lo que la persona ya escribió en el formulario y abre WhatsApp con el mensaje listo para enviar.

### Paso obligatorio para activar el correo (hazlo una sola vez)

El correo **jimenezjaneth525@gmail.com** ya aparece visible en la sección de contacto del sitio (para que cualquiera te escriba directo). Pero para que los mensajes del **formulario** lleguen también a ese correo, falta un paso que NO se hace en el código — se hace en el panel de Netlify:

Netlify Forms **solo funciona después de publicar el sitio** — no funciona en el archivo local ni en la vista previa del chat, es normal que ahí no pase nada.

1. Sube/actualiza tu sitio en Netlify como siempre (arrastrando la carpeta o el .zip).
2. Entra a tu sitio en **netlify.com** → pestaña **"Forms"** (aparece en el menú del sitio, arriba).
   - La primera vez puede tardar un par de minutos en aparecer el formulario "contacto" ahí, es normal.
3. Dentro de "Forms" → **"Settings and usage"** → **"Form notifications"** → **"Add notification"** → **"Email notification"**.
4. Escribe **jimenezjaneth525@gmail.com** y guarda.

Desde ese momento, cada vez que alguien llene el formulario en el sitio publicado, te llegará un correo automático con su nombre, teléfono y mensaje.

### Notas

- El plan gratuito de Netlify incluye 100 envíos de formulario por mes — más que suficiente para empezar.
- Si cambias el número de WhatsApp más adelante, búscalo en `index.html` (variable `NUMERO_WHATSAPP`, cerca del final del archivo) y también en el botón flotante 💬.

## Lote 5 (nuevo) — 8 productos agregados

Se agregaron los 8 productos de la nueva tanda de fotos, todos con notas verificadas en fichas oficiales/tiendas de cada marca:

- Concentré · Sérum Relleno de Arrugas 15% Ácido Hialurónico (L'bel)
- Triple Acción Max · Sérum Antiedad 10X Colágeno Vegano (Ésika)
- Homme Expert · Shampoo 3X (L'bel)
- Comando Force · Shampoo 2 en 1 Spumatak (Ésika)
- Nocturne · Sérum Antiedad Concentrado (L'bel) — **distinto** del "Nocturne Sérum PM 12% Ácido Glicólico" que ya estaba en el catálogo; son dos productos diferentes de la misma línea Nocturne.
- Skin First · Set Limpiadora + Hidratante Hello Age Prevent (Cyzone) — se cargó como un solo producto porque tu foto muestra los 2 envases juntos como set.
- Triple Acción Max · Suero Anti-Imperfecciones (Ésika)
- Multicare · Talco para Pies (Ésika)

**Nota sobre el Shampoo Homme Expert 3X:** no encontré ficha oficial independiente en línea con el desglose completo, así que sus beneficios se tomaron directamente de lo que dice el propio empaque en tu foto (marcado como `tipo:'general'` en el código, en vez de `'detallada'`).

## Pendiente de tu parte

- Confirmar/agregar los precios reales de los 19 productos del lote anterior + los 8 del lote 5 (todos en "Consultar precio")
- Revisar que la categoría (Damas/Caballeros/Niños) de cada uno sea la correcta — la asigné según cómo se comercializa cada línea. En particular, el Talco para Pies lo puse en "Damas" pero es un producto unisex para toda la familia — dime si prefieres crear una categoría "Unisex" o dejarlo así.
- Si tienes el desglose oficial de notas para "Noir · 4 Elements No.1", dímelo y lo agrego
- Si quieres, puedo separar la foto del Set Skin First en 2 fotos individuales (una por producto) si me compartes las imágenes por separado
