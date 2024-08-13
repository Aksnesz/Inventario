import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

function Graficas() {
  const [plants, setPlants] = useState([]);
  const [monthlyDeaths, setMonthlyDeaths] = useState(0);

  useEffect(() => {
    fetch('https://inventario-4a3e0-default-rtdb.firebaseio.com/Flores.json')
      .then((response) => response.json())
      .then((data) => {
        const plantArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setPlants(plantArray);
        calculateMonthlyDeaths(plantArray);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const calculateMonthlyDeaths = (plantArray) => {
    const currentMonth = new Date().getMonth();
    const deaths = plantArray.filter(
      (plant) =>
        plant.estado === 'Muerta' &&
        new Date(plant.dateOfDeath).getMonth() === currentMonth
    );
    setMonthlyDeaths(deaths.length);
  };

  const plantStatusData = [
    ['Estado', 'Número de Plantas'],
    ['Bueno', plants.filter((plant) => plant.estado === 'Bueno').length],
    ['Malo', plants.filter((plant) => plant.estado === 'Malo').length],
    ['Muerta', plants.filter((plant) => plant.estado === 'Muerta').length],
  ];

  const deathData = [
    ['Mes', 'Plantas Muertas'],
    ['Este Mes', monthlyDeaths],
  ];

  return (
    <div className="container mt-4">
      <h2>Gráficas del Estado de las Plantas</h2>
      <div className="mb-4">
        <Chart
          chartType="PieChart"
          data={plantStatusData}
          options={{ title: 'Estado Actual de las Plantas' }}
          width={'100%'}
          height={'400px'}
        />
      </div>
      <div className="mb-4">
        <Chart
          chartType="BarChart"
          data={deathData}
          options={{ title: 'Plantas Muertas Este Mes' }}
          width={'100%'}
          height={'400px'}
        />
      </div>
    </div>
  );
}

export default Graficas;
