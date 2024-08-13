import React, { useState } from 'react';

function AddPlant() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('Bueno');
  const [message, setMessage] = useState(''); // Estado para el mensaje


  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlant = {
      nombre: name,
      url: url,
      estado: status    
    };

    fetch('https://inventario-4a3e0-default-rtdb.firebaseio.com/Flores.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Planta agregada:', data);
      setName('');
      setUrl('');
      setStatus('');
      setMessage('¡Planta agregada exitosamente!'); // Actualiza el mensaje de confirmación

    })
    .catch(error => console.error('Error al agregar la planta:', error));
    setMessage('Error al agregar la planta.'); // Actualiza el mensaje en caso de error
    
  };

  return (
    <div className="container mt-4">
      <h2>Agregar Nueva Planta</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">URL de la Imagen</label>
          <input
            type="text"
            className="form-control"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Estado</label>
          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Bueno">Bueno</option>
            <option value="Malo">Malo</option>
            <option value="Muerta">Muerta</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Agregar Planta</button>
        {message && <div className="mt-3 alert alert-info">{message}</div>} {/* Mensaje de confirmación */}

      </form>
    </div>
  );
}

export default AddPlant;
