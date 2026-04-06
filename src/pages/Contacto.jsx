import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    let newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio.';
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'El formato del correo no es válido.';
    }
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje no puede estar vacío.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setStatusMessage('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
      setFormData({ nombre: '', email: '', mensaje: '' });
      setErrors({});
    } else {
      setStatusMessage('El formulario contiene errores. Por favor, revísalos e inténtalo de nuevo.');
    }
  };

  return (
    <main id="main-content" className="py-12 px-6">
      <div className="max-w-2xl mx-auto brutalist-card p-8">
        <h1 className="text-4xl font-black uppercase mb-8 border-b-4 border-border pb-4">Contacto</h1>
        
        {/* Aria-live anunciará el resultado de enviar el formulario para que no pase desapercibido */}
        <div aria-live="polite" className="mb-6 font-bold text-lg">
          {statusMessage && (
            <div className={`p-4 border-l-4 ${errors && Object.keys(errors).length > 0 ? 'bg-red-100 border-red-600 text-red-800' : 'bg-green-100 border-green-600 text-green-800'}`}>
              <p>{statusMessage}</p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="flex flex-col">
            <label htmlFor="nombre" className="font-bold mb-2 uppercase">Nombre Completo</label>
            <input 
              type="text" 
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className={`p-3 border-4 ${errors.nombre ? 'border-red-600 outline-none focus:ring-4 focus:ring-red-300' : 'border-border focus:outline-accent'} bg-white`}
              aria-invalid={errors.nombre ? "true" : "false"}
              aria-describedby={errors.nombre ? "error-nombre" : undefined}
            />
            {errors.nombre && <span id="error-nombre" className="text-red-700 font-bold mt-2 flex items-center gap-2"><span aria-hidden="true">⚠️</span> {errors.nombre}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-bold mb-2 uppercase">Correo Electrónico</label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`p-3 border-4 ${errors.email ? 'border-red-600 outline-none focus:ring-4 focus:ring-red-300' : 'border-border focus:outline-accent'} bg-white`}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "error-email" : undefined}
            />
            {errors.email && <span id="error-email" className="text-red-700 font-bold mt-2 flex items-center gap-2"><span aria-hidden="true">⚠️</span> {errors.email}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="mensaje" className="font-bold mb-2 uppercase">Mensaje</label>
            <textarea 
              id="mensaje"
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              className={`p-3 border-4 ${errors.mensaje ? 'border-red-600 outline-none focus:ring-4 focus:ring-red-300' : 'border-border focus:outline-accent'} bg-white resize-none`}
              aria-invalid={errors.mensaje ? "true" : "false"}
              aria-describedby={errors.mensaje ? "error-mensaje" : undefined}
            ></textarea>
            {errors.mensaje && <span id="error-mensaje" className="text-red-700 font-bold mt-2 flex items-center gap-2"><span aria-hidden="true">⚠️</span> {errors.mensaje}</span>}
          </div>

          <button type="submit" className="brutalist-button text-xl w-full">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contacto;
