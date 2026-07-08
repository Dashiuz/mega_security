# Plan de Diseño e Implementación de Modificaciones

Este documento describe detalladamente los aspectos técnicos, procedimientos y resultados esperados para las modificaciones de diseño e interacción en la landing page de **Megaseguridad**.

El objetivo es potenciar el dinamismo visual y la experiencia de usuario (UX) manteniendo la coherencia estética premium de la página actual (tonos oscuros, acentos verdes neón y cian, animaciones sutiles y de alta calidad).

---

## 1. Ajuste de Navegación SPA
* **Componente**: `SectionNuestraOferta.tsx`
* **Apartado Técnico**:
  * Modificar los destinos del atributo `targetId` en las tarjetas de la cuadrícula interactiva de 5 columnas.
  * Cambiar los valores de los hashes de direccionamiento interno para que coincidan con los IDs que tienen los componentes correspondientes en la raíz de la SPA.
* **Procedimiento**:
  * Abrir [SectionNuestraOferta.tsx](file:///d:/projects/mega_security/src/components/SectionNuestraOferta.tsx).
  * Reemplazar los valores de `targetId` obsoletos:
    * `01. MEGASEGURIDAD`: de `problema` a `megaseguridad`.
    * `02. QUÉ HACEMOS`: de `servicios` a `que-hacemos`.
    * `03. CÓMO LO HACEMOS`: de `operativa` a `como-lo-hacemos`.
    * `04. PARA QUIEN LO HACEMOS`: de `filosofia` a `para-quien-lo-hacemos`.
    * `05. POR QUÉ ELEGIRNOS`: de `como-trabajamos` a `por-que-elegirnos`.
* **Resultado**: Al hacer clic en cualquiera de las 5 columnas de la sección "Nuestra Oferta", el navegador realizará un desplazamiento suave (scroll) directo al inicio del componente correspondiente en la página principal.

---

## 2. Optimización de Botones de Acción (CTAs)
* **Componentes**: `SectionComoLoHacemos.tsx` y cualquier otro componente con botones inactivos.
* **Apartado Técnico**:
  * Vincular eventos de despacho de eventos personalizados (`CustomEvent`) de JavaScript a los botones que actualmente no tienen una acción asociada.
  * Por defecto, asociarlos al formulario principal de cotización/diagnóstico (`open-tally-sidebar`).
* **Procedimiento**:
  * Auditar y localizar botones `.btn-premium-cta` sin interacción (`onClick`).
  * En [SectionComoLoHacemos.tsx](file:///d:/projects/mega_security/src/components/SectionComoLoHacemos.tsx) (bloque resumen de la operativa), agregar `onClick` para disparar el evento:
    ```tsx
    window.dispatchEvent(
      new CustomEvent("open-tally-sidebar", {
        detail: {
          formId: "VLMgEl",
          formTitle: "Solicite un diagnóstico para su operación"
        }
      })
    );
    ```
  * Realizar el mismo ajuste en el botón del bloque final de `SectionParaQuienLoHacemos.tsx`.
* **Resultado**: Todos los botones de llamado a la acción serán funcionales y abrirán inmediatamente el formulario Tally respectivo en la barra lateral sin fallos de redirección.

---

## 3. Modificación de Hover e Interacción en el Header
* **Componente**: `Header.tsx`
* **Apartado Técnico**:
  * Modificar los estilos de color en los enlaces de navegación de la barra superior.
  * Cambiar el color base sin interacción (Idle) de un tono gris metálico (`text-mega-silver/80`) a blanco puro (`text-white`), y la tonalidad de hover de azul/cian (`hover:text-mega-cyan`) a verde neón (`hover:text-mega-green`).
  * Asegurar que tras un clic o al retirar el cursor, vuelva dinámicamente a blanco.
* **Procedimiento**:
  * Editar [Header.tsx](file:///d:/projects/mega_security/src/components/Header.tsx).
  * Para cada etiqueta `<a>` de navegación, cambiar las clases Tailwind:
    * Reemplazar `text-mega-silver/80` por `text-white/90 hover:text-mega-green`.
    * Quitar transiciones manuales que puedan interferir y re-estilizar para asegurar la consistencia.
* **Resultado**: Un menú más limpio y visible en reposo (blanco) que destaca inmediatamente con el color identitario de la marca (verde neón) solo al interactuar.

---

## 4. Efecto Cinemático Premium en las Tarjetas de Nuestra Oferta
* **Componente**: `SectionNuestraOferta.tsx`
* **Apartado Técnico**:
  * Implementar una estructura de columnas de flex acordeón horizontal en pantallas grandes (`lg:flex-row`).
  * Cada tarjeta tiene un comportamiento interactivo en hover: se expande horizontalmente (`lg:hover:flex-[2.2]`) empujando el resto de columnas.
  * El contenedor de texto se contrae hacia un lado (`lg:group-hover:w-[50%]`), mientras en la otra mitad se revela con un panel lateral la imagen `/cameras.jpg` (`w-0 group-hover:w-[45%] opacity-0 group-hover:opacity-80`).
* **Procedimiento**:
  * Editar la cuadrícula en [SectionNuestraOferta.tsx](file:///d:/projects/mega_security/src/components/SectionNuestraOferta.tsx).
  * Cambiar de grid a flex row en desktop.
  * Añadir un panel absoluto con la imagen `/cameras.jpg` alineado a la derecha, con escala y desvanecido en hover.
  * Ajustar el ancho del contenedor de texto y aplicar `line-clamp` para evitar saltos de línea indeseados.
* **Resultado**: Un efecto inmersivo extremadamente elegante y fluido en la oferta de servicios, donde al pasar el cursor por un bloque, este se ensancha revelando un panel cinematográfico sin ocultar la información textual.

---

## 5. Carrusel de Marcas en Loop Infinito (Social Proof)
* **Componente**: `SocialProof.tsx`
* **Apartado Técnico**:
  * Reemplazar el listado estático por un carrusel dinámico autodesplazable de forma infinita (horizontal marquee) sin cortes visuales.
  * Ampliar la lista de marcas de 6 a 12 nombres corporativos ficticios premium.
  * Implementar el efecto usando animación CSS optimizada (sin re-renders de React) duplicando la lista de logos para garantizar la continuidad visual.
* **Procedimiento**:
  * Editar [SocialProof.tsx](file:///d:/projects/mega_security/src/components/SocialProof.tsx).
  * Definir un arreglo con 12 marcas:
    ```js
    const logos = [
      "LOGOTIPO UNO", "ENTIDAD CORP", "INDUSTRIAS TECH", 
      "GRUPO NACIONAL", "FINANCIERA", "OPERADORES X",
      "SEGURIDAD ALFA", "LOGÍSTICA GLOBAL", "MINERA DEL SUR",
      "PETRÓLEOS ANDINOS", "AEROLÍNEAS NACIONALES", "TELECOM CENTRAL"
    ];
    ```
  * En [globals.css](file:///d:/projects/mega_security/src/app/globals.css), definir la animación keyframe `@keyframes marquee` y la clase `.animate-marquee`:
    ```css
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      width: max-content;
      animation: marquee 25s linear infinite;
    }
    ```
  * Renderizar en `SocialProof.tsx` una fila que contenga el conjunto de marcas duplicado (`[...logos, ...logos]`) dentro de un contenedor con máscara de gradiente lateral (`mask-image` o desvanecido negro-transparente en los extremos).
* **Resultado**: Una animación continua de desplazamiento lateral de marcas que transmite solidez y respaldo comercial sin impactar la CPU del cliente.

---

## 6. Widget Flotante de WhatsApp Personalizado
* **Componente**: Nuevo archivo `src/components/WhatsAppWidget.tsx`
* **Apartado Técnico**:
  * Crear un botón flotante permanente en la esquina inferior derecha.
  * En lugar de redirigir de inmediato al enlace directo (lo que puede resultar brusco y no calificar leads), al hacer clic se abrirá un micro-formulario / widget de chat interactivo y moderno (de la marca Megaseguridad).
  * El formulario permitirá al usuario ingresar su nombre y el mensaje de su inquietud, y al presionar "Enviar" generará la redirección oficial con el texto codificado en la API: `https://wa.me/573002934457?text=...`.
* **Procedimiento**:
  * Crear `src/components/WhatsAppWidget.tsx`.
  * Definir el estado `isOpen` (booleano) para el widget y estados de texto para el formulario.
  * Diseñar el botón flotante con el logo clásico de WhatsApp, fondo verde brillante, sombra pulsante y z-index alto (`z-[150]`).
  * Diseñar la tarjeta de chat con cabecera de Megaseguridad, avatar y burbuja de mensaje automático de bienvenida.
  * Programar la redirección en el botón de envío:
    ```tsx
    const formatMessage = () => {
      const text = `Hola, mi nombre es ${name}. Quisiera consultar lo siguiente: ${message}`;
      window.open(`https://wa.me/573002934457?text=${encodeURIComponent(text)}`, "_blank");
    };
    ```
  * Importar el componente en [layout.tsx](file:///d:/projects/mega_security/src/app/layout.tsx) para que esté disponible en toda la aplicación.
* **Resultado**: Un canal de conversión altamente sofisticado que recopila información preliminar del cliente antes de iniciar la conversación en WhatsApp, mejorando el embudo de ventas y la percepción de marca tecnológica.

---

## 7. Nueva Sección: Equipo Directivo
* **Componente**: `SectionEquipoDirectivo.tsx` (Nuevo) y `page.tsx`
* **Apartado Técnico**:
  * Diseñar una nueva sección ubicada encima del Footer que presenta a los líderes de la empresa ("Las personas detrás de Megaseguridad").
  * Estructura de cuadrícula CSS de 5 columnas (`grid-cols-5`) para presentar fotografías del personal.
  * Efecto visual dinámico: filtro CSS `grayscale` aplicado por defecto, que transiciona a todo color (`grayscale-0`) al interactuar con el mouse (hover).
  * Soporte para fallbacks: degradados limpios (blanco a gris claro) en recuadros donde la fotografía aún no exista.
* **Procedimiento**:
  * Crear el componente `SectionEquipoDirectivo.tsx` y mapear las 4 imágenes base de `public/human_talent`.
  * Importar el componente en [page.tsx](file:///d:/projects/mega_security/src/app/page.tsx) y renderizarlo bajo `SectionPorQueElegirnos`.
* **Resultado**: Un apartado altamente corporativo que transmite confianza al mostrar el rostro humano de la organización con interacciones elegantes.

---

## 8. Reconstrucción del Footer del Hero (Bento Grid)
* **Componente**: `Hero.tsx`
* **Apartado Técnico**:
  * Reformular el pie de página del Hero para acomodar 7 tarjetas descriptivas (en lugar de las 5 originales).
  * Utilizar un patrón de diseño "Bento Box" (Grid asimétrico) donde ciertas tarjetas tienen mayor peso visual (ej. `col-span-2 row-span-2`).
  * Integrar las 7 fotografías del directorio `public/hero_images` como fondos enriquecidos.
  * Diseñar un efecto flotante premium: Al hacer hover, la tarjeta se expande, la imagen de fondo se anima, el texto destaca y un resplandor de neón verde recorre los bordes como una carta de colección tecnológica.
* **Procedimiento**:
  * Editar [Hero.tsx](file:///d:/projects/mega_security/src/components/Hero.tsx).
  * Crear una estructura grid (ej: `grid-cols-2 md:grid-cols-4`).
  * Asignar textos, dimensiones y fondos a cada una de las 7 tarjetas.
  * Aplicar estilos interactivos con Tailwind: `hover:scale-105 hover:shadow-[0_0_25px_rgba(33,221,111,0.5)] hover:border-mega-green`.
* **Resultado**: Un dashboard inicial asombroso que consolida todas las cifras y garantías operativas de la compañía, invitando a la exploración interactiva a través de micro-interacciones de luz y movimiento.
