import React from 'react';
import { jsPDF } from 'jspdf';

const Informe = () => {
  const generarPDF = () => {
    const doc = new jsPDF();
    const margin = 20;
    
    // Configurar fuentes y colores básicos
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("INFORME DE AUDITORÍA DE ACCESIBILIDAD", margin, 20);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Proyecto React - Evaluación Técnica Completa Nivel AA", margin, 30);
    
    doc.text("Autor: German Romo Orta", margin, 40);
    doc.text("Fecha: Abril 2026", margin, 45);
    
    // Trazabilidad
    doc.setFont("helvetica", "bold");
    doc.text("IDENTIFICACIÓN Y ENLACES OFICIALES", margin, 60);
    doc.setFont("helvetica", "normal");
    const introText = doc.splitTextToSize("El proyecto ha pasado de una estructura genérica basada en divs a estar estructurada completamente en React empleando semántica de HTML5, atributos de ARIA como aria-live para validaciones de formularios y media queries CSS como prefers-reduced-motion para respetar las preferencias del usuario. La trazabilidad refleja estos esfuerzos iterativos en un repositorio.", 170);
    doc.text(introText, margin, 67);
    
    // Resumen Ejecutivo
    doc.setFont("helvetica", "bold");
    doc.text("RESUMEN EJECUTIVO", margin, 100);
    doc.setFont("helvetica", "normal");
    const execText = doc.splitTextToSize("Este documento presenta la auditoría técnica completa realizada sobre la aplicación web desarrollada con React. El análisis se basa en las WCAG 2.2 nivel AA. La auditoría combina evaluación automática (Lighthouse) y evaluación manual, demostrando comprensión estructural mediante re-enrutamiento y rediseños orientados a accesibilidad universal.", 170);
    doc.text(execText, margin, 107);
    
    // Mejoras
    doc.setFont("helvetica", "bold");
    doc.text("MEJORAS IMPLEMENTADAS", margin, 140);
    doc.setFont("helvetica", "normal");
    const mejorasText = doc.splitTextToSize("- Implementación de Skip Link (Saltar al contenido).\n- Reorganización de estructura de páginas usando react-router para separar Header y Main.\n- Contraste validado superior a 4.5:1.\n- Formulario de contacto plenamente accesible (Labels referenciados y aria-live para notificaciones).\n- Aplicación de considersaciones como prefers-reduced-motion inactivando animaciones y marquesinas bajo petición del sistema.", 170);
    doc.text(mejorasText, margin, 147);
    
    doc.save("Informe_Accesibilidad_WCAG_2.2.pdf");
  };

  return (
    <main id="main-content" className="py-12 px-6">
      <div className="max-w-2xl mx-auto brutalist-card p-8 space-y-6">
        <h1 className="text-4xl font-black uppercase border-b-4 border-border pb-4">Informe de Accesibilidad</h1>
        <p className="font-bold text-lg">
          Esta plataforma ha sido adaptada bajo los criterios WCAG 2.2 nivel AA.
          Como prueba de la mejora continua y trazabilidad técnica, puede descargar el informe en PDF autogenerado.
        </p>
        <div className="bg-paper p-4 border-l-4 border-accent text-sm mb-8 font-bold">
          Nota: El documento se generará en el cliente empleando la librería jsPDF, cumplimentando los requisitos avanzandos.
        </div>
        <button 
          type="button"
          onClick={generarPDF}
          className="brutalist-button text-xl w-full"
          aria-label="Descargar el informe de accesibilidad en PDF"
        >
          Descargar Informe PDF
        </button>
      </div>
    </main>
  );
};

export default Informe;
