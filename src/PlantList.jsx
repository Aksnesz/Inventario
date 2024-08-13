import React, { useEffect, useState } from 'react';

function PlantList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('https://inventario-4a3e0-default-rtdb.firebaseio.com/Flores.json')
      .then((response) => response.json())
      .then((data) => {
        const plantArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setPlants(plantArray);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleStateChange = (id, newState) => {
    // Actualiza el estado de la planta en Firebase
    fetch(`https://inventario-4a3e0-default-rtdb.firebaseio.com/Flores/${id}.json`, {
      method: 'PATCH',
      body: JSON.stringify({ estado: newState }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (response.ok) {
        setPlants((prevPlants) =>
          prevPlants.map((plant) =>
            plant.id === id ? { ...plant, estado: newState } : plant
          )
        );
      } else {
        console.error('Error updating plant state');
      }
    })
    .catch((error) => console.error('Error updating plant state:', error));
  };

  const getStateClass = (estado) => {
    switch (estado) {
      case 'Bueno':
        return 'text-success'; // Verde
      case 'Malo':
        return 'text-warning'; // Naranja
      case 'Muerto':
        return 'text-danger'; // Rojo
      default:
        return '';
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {plants.map((plant) => (
          <div className="col-md-4 mb-4" key={plant.id}>
            <div className="card">
              <img src={plant.url} alt={plant.nombre} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{plant.nombre}</h5>
                <p className={`card-text ${getStateClass(plant.estado)}`}>
                  Estado: {plant.estado}
                </p>
                <select
                  value={plant.estado}
                  onChange={(e) => handleStateChange(plant.id, e.target.value)}
                  className="form-select"
                >
                  <option value="Bueno">Bueno</option>
                  <option value="Malo">Malo</option>
                  <option value="Muerto">Muerto</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantList;
