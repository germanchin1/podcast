# Informe del Proyecto: Fishing Tales Podcast

## 1. Descripción del Trabajo Realizado
Se ha desarrollado una aplicación web funcional y accesible utilizando **React** y **Vite** para el podcast de pesca deportiva "Fishing Tales". El proyecto destaca por una estética **Retro-Brutalista** de alto contraste, inspirada en periódicos y fanzines clásicos, utilizando una paleta de colores basada en blanco papel, negro tinta y un azul marítimo vibrante como color de acento.

### Características implementadas:
- **Reproductor de Audio Multiepiso**: Permite alternar entre dos episodios de pesca (`ep1.mp3` y `ep2.mp3`) desde la misma interfaz.
- **Transcripción Dinámica**: Se ha implementado un motor de carga que parsea archivos `.vtt` en tiempo real para mostrar la transcripción del episodio actual en una barra lateral desplazable.
- **Material Promocional**: Integración de un vídeo corto promocional con un póster estético generado mediante IA para mejorar el primer impacto visual.
- **Layout Responsive**: Diseño adaptable a diferentes tamaños de pantalla manteniendo la rejilla brutalista.

## 2. Verificación de Accesibilidad
La web ha sido diseñada siguiendo los estándares de accesibilidad para asegurar que el contenido sea consumible por todos los usuarios:

- **HTML Semántico**: Se han utilizado etiquetas estructurales de HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`) y una jerarquía de encabezados coherente para facilitar la navegación con lectores de pantalla.
- **Transcripción y Subtítulos**: 
    - Se incluyen etiquetas `<track>` en el reproductor para subtítulos nativos.
    - Se proporciona una transcripción textual completa en la barra lateral, esencial para usuarios con discapacidad auditiva.
- **Contraste de Color**: La combinación de colores (negro sobre blanco/ocre y azul intenso) garantiza un ratio de contraste superior a las recomendaciones de las WCAG AA.
- **Navegación por Teclado**: Todos los elementos interactivos (botones de cambio de episodio, controles de reproducción) son accesibles y operables mediante el teclado, manteniendo un "focus ring" visible.
- **Atributos ARIA**: Uso de `aria-label` en reproductores y botones para proporcionar contexto adicional a las herramientas de asistencia.

---
*Desarrollado por German Romo Orta*

https://podcast-gray-five.vercel.app/



