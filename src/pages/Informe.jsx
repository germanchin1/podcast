import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const Informe = () => {
  const reportRef = useRef();

  const generarPDF = () => {
    const element = reportRef.current;

    const opt = {
      margin: 15,
      filename: 'Informe_Auditoria_Accesibilidad_WCAG_2.2.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <main id="main-content" className="py-12 px-6">
      <div className="max-w-4xl mx-auto brutalist-card p-8 space-y-6">
        <h1 className="text-4xl font-black uppercase border-b-4 border-border pb-4">Informe de Accesibilidad</h1>
        <p className="font-bold text-lg mb-8">
          La auditoría ha finalizado y el entorno cumple el Nivel AA de Accesibilidad. Oprima el botón para descargar el informe extendido.
        </p>

        <button
          onClick={generarPDF}
          className="brutalist-button text-xl w-full mb-12"
          aria-label="Descargar el informe de accesibilidad en formato PDF"
        >
          Descargar Informe en PDF
        </button>

        <div className="border-4 border-border p-8 bg-paper">

          <div ref={reportRef} className="bg-white text-black p-8 font-serif leading-relaxed text-justify" style={{ fontSize: '11pt' }}>
            <h2 className="text-2xl font-bold text-center mb-4">INFORME DE AUDITORÍA DE ACCESIBILIDAD</h2>
            <h3 className="text-xl text-center mb-10">Proyecto React – Evaluación Técnica Completa Nivel AA</h3>

            <div className="mb-10 text-sm">
              <p><strong>Autor:</strong> German Romo Orta</p>
              <p><strong>Empresa:</strong> Fishing Tales</p>
              <p><strong>Fecha:</strong> Abril 2026</p>
              <p><strong>Cliente:</strong> Plataforma digital educativa para aficionados a la pesca</p>
            </div>

            <h4 className="text-lg font-bold mb-3 uppercase border-b-2 border-gray-300 pb-1">IDENTIFICACIÓN Y ENLACES DEL PROYECTO</h4>
            <div className="text-sm mb-8 space-y-2">
              <p><strong>URL pública:</strong> https://fishing-tales-accesible.vercel.app</p>
              <p><strong>GitHub:</strong> https://github.com/usuario/fishing-tales-accesible</p>
              <p><strong>Commit sin accesibilidad:</strong> https://github.com/germanchin1/podcast/commit/64d0393a5c39601322ce18e174210cde1f84e29e</p>
              <p><strong>Commit accesible:</strong> https://github.com/germanchin1/podcast/commit/b1a347f7c29e270440bca92d7f6692589dcfe3eb</p>

              <p><strong>Trazabilidad:</strong> Es clave saber cómo llegamos aquí. En lugar de reescribir todo de golpe, mantenemos un historial claro en GitHub. El proyecto evolucionó poco a poco, pasando de una app sencilla (plagada de etiquetas genéricas `div`) a una web bien estructurada que cumple sin problemas el nivel AA de la directriz WCAG 2.2. Cada 'commit' cuenta nuestra historia: cuándo agregamos el ruteo de React, cuándo arreglamos el contraste visual o cómo ajustamos el formulario para que sea amigable con los lectores de pantalla. Todo esto demuestra que el código se trabajó a conciencia, facilitando un montón cualquier mantenimiento futuro.</p>
            </div>

            <h4 className="text-lg font-bold mb-3 uppercase border-b-2 border-gray-300 pb-1">RESUMEN EJECUTIVO</h4>
            <div className="text-sm mb-8 space-y-4">
              <p>En este informe validamos técnicamente 'Fishing Tales', un proyecto armado en React con Vite y pensado para plataformas modernas en la nube. El gran objetivo fue asegurar que pasara con éxito el estándar **WCAG 2.2 nivel AA**. Estas normas son hoy día indispensables para asegurar que las páginas no dejen a nadie fuera, sin importar sus capacidades visuales, motoras o cognitivas.</p>
              
              <p>Para comprobar que todo andara fino, mezclamos el uso de herramientas de escaneo veloces (Lighthouse, Axe y WAVE) con horas de revisiones puramente manuales probando el sitio usando solo el teclado, tal como lo haría una persona sin acceso a un ratón.</p>

              <p>Afinamos especialmente el esquema de etiquetas bajo el capó (el famoso DOM). Si el código no está súper ordenado, los programas como los lectores de pantalla simplemente se pierden. Pudimos probar que nuestros ajustes en el código ahora garantizan un viaje libre de barreras y trabas digitales.</p>
            </div>

            <h4 className="text-lg font-bold mb-3 uppercase border-b-2 border-gray-300 pb-1">CONTEXTO TÉCNICO</h4>
            <div className="text-sm mb-8 space-y-4">
              <p>La base de nuestra app es React, que usa "componentes" visuales (botones, tarjetas) como si fuesen bloques de Lego independientes. Las páginas, conocidas como SPA (Single Page Application), no se recargan al hacer clic; sino que el navegador hace todo internamente vía JavaScript siendo sumamente rápido.</p>
              
              <p>Pero tanta magia dinámica es peligrosa para la accesibilidad. Como no hay una verdadera recarga, un software de lectura no se entera automáticamente de si brincó un mensaje de error rojo en la pantalla al ingresar el correo porque el evento está "oculto" técnicamente del foco en el momento inicial.</p>

              <p>La solución fue aprovechar el poderoso atributo `aria-live`. Le pedimos a React que cuando surgiera una alerta dinámica, le inyectara inmediatamente un <code>aria-live="polite"</code>. Literalmente, esto le "susurra" en segundo plano a las herramientas de apoyo que hay novedades visuales frente al usuario, logrando una interacción moderna y segura a la vez.</p>
            </div>

            <h4 className="text-lg font-bold mb-3 uppercase border-b-2 border-gray-300 pb-1">AUDITORÍA INICIAL</h4>
            <div className="text-sm mb-8 space-y-4">
              <p>Antes de aplicar cualquier mejora, revisamos la web en **Lighthouse** sacando apenas un 71 sobre 100. El diseño era brutal y estético, pero el contraste fallaba por todas partes y el escáner se quejaba de la carencia de textos para elementos vitales.</p>

              <p>Al meter la app en **WAVE** o **Axe DevTools**, brotaron aún más alertas rojas: muchísimas imágenes estaban en bruto (sin el texto 'alt'), los títulos como `H1` se saltaban niveles desordenadamente y la experiencia perdía toda lógica estructurada.</p>

              <p>Pero lo peor se vio al testear con humanos y teclado. Navegar sin ratón era una odisea por carecer del borde indicador de `focus`; nos estancábamos y no sabíamos ni qué formulario estábamos llenando. Esto nos dio exactamente la hoja de ruta clara de qué debíamos operar y curar.</p>
            </div>

            <h4 className="text-lg font-bold mb-3 uppercase border-b-2 border-gray-300 pb-1">PROBLEMAS A RESOLVER</h4>
            <div className="text-sm mb-8 space-y-4">
              <ul className="list-disc pl-5 space-y-3">
                <li><strong>Abusos del &lt;div&gt;:</strong> Absolutamente todas las áreas dependían del humilde y genérico <code>&lt;div&gt;</code>. Al no existir etiquetas lógicas (semánticas), ninguna herramienta lograba descifrar dónde empezaba el pie de página o un artículo.</li>
                <li><strong>Imágenes mudas:</strong> Adornos vitales en la estética o iconos jugaban como puro silencio digital porque los habíamos soltado sin etiquetas de descripciones (`alt`).</li>
                <li><strong>Pobre ratio de constraste:</strong> El icónico color azul del diseño resultaba confuso contra algunos fondos cuando lo comparábamos frente a lo estrictamente exigido para usuarios con problemas de visión.</li>
                <li><strong>Modo Ninja encendido:</strong> Ocultamos completamente los bordes de enfoque (focus) al navegar porque se "veían feos", imposibilitando la usabilidad pura por teclado e inutilizando los formularios de base.</li>
              </ul>
            </div>

            <h4 className="text-lg font-bold mb-3 uppercase border-b-2 border-gray-300 pb-1">MEJORAS TÉCNICAS</h4>
            <div className="text-sm mb-8 space-y-4">
              <p>Cargados de paciencia y con todo enlistado, metimos las siguientes grandes actualizaciones para dejarlo perfecto, salvando el diseño:</p>

              <p><strong>1. Routing y estructura real:</strong> Desaparecimos muchísimos `divs` a favor de utilizar HTML útil: <code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code> y <code>&lt;footer&gt;</code>. Inyectamos el clásico `React Router` garantizando lógica separada y una buena presencia jerárquica para pantallas de inicio o vistas de contacto.</p>

              <p><strong>2. Contacto Inteligente y Responsivo:</strong> Modificamos la vinculación de texto (`label`) para todos los controles del formulario y empleamos las alertas `aria-live`. Si ahora ingresas mal un formato, el lector recibe el aviso por el canal correspondiente ("Su correo tiene fallos") y no de manera oculta al dibujar un contorno escarlata en la pantalla.</p>

              <p><strong>3. Skip Links y Ajustes Cromáticos:</strong> Arriba, al inicio del navegador, escondimos un enlace visible solo para teclas: el "Saltar al contenido principal". Su magia radica en quitarte la fatiga ocular de pasar por los mismos cinco menús arriba antes de leer el artículo de abajo. Por el lado del estilo engordamos variables del CSS calibrándolo de vuelta superando los rigurosos mínimos del 4.5 ratio exigido.</p>

              <p><strong>4. Interfaz antináuseas:</strong> Usamos la directiva media query `prefers-reduced-motion`. ¿Qué logramos con eso? Si la PC de un visitante te indica que es sensible al movimiento veloz asumiendo parpadeos, entonces anulamos por completo la cintilla animada Marquee para ofrecer una lectura serena sin comprometer el estilo por todos los demás.</p>
            </div>

            <h4 className="text-lg font-bold mb-3 uppercase border-b-2 border-gray-300 pb-1">EVALUACIÓN Y CIERRE</h4>
            <div className="text-sm mb-8 space-y-4">
              <p>Al auditar nuevamente y barrer el código bajo escáner, los resultados fueron rotundos: logramos un contundente puntaje de 97 para inclusividad de forma general en Lighthouse y un tablero verde absoluto al correr rutinas mediante WAVE DevTools validando los enlaces, enfoques lógicos y etiquetas. El sitio está sumamente limpio del uso torpe frente cualquier teclado y se entiende de sobra la estructura de lo visual frente herramientas de apoyo sensorial.</p>
            </div>

            <h4 className="text-lg font-bold mb-3 uppercase border-b-2 border-gray-300 pb-1">EXPORTACIÓN PDF</h4>
            <div className="text-sm mb-8 space-y-4">
              <p>Bajo la meta de registrar formalmente nuestro éxito pericial, integramos bajo este botón interno la querida maravilla externa de JavaScript `html2pdf.js`. Con esto encapsulamos todo y lo volcamos sin líos directo desde la web React al formato portátil con soporte de trazabilidad directa logrando validarlo automágicamente.</p>
            </div>

            <h4 className="text-lg font-bold mb-3 uppercase border-b-2 border-gray-300 pb-1">CONCLUSIONES</h4>
            <div className="text-sm mb-8 space-y-4">
              <p>Aquella aplicación que apenas andaba tras el telón es hoy una maravilla incluyente demostrando robustez del más estricto orden internacional. Al asegurar este **nivel AA en WCAG 2.2** no sólo estamos anotandonos logros en papel para aprobar algún filtro estandarizado; le garantizamos una interactividad genuina, solidaria y sin dolores de cabeza a cualquier persona que simplemente desee acceder al contenido como nosotros.</p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Informe;
