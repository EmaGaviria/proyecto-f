import { useState } from 'react';
import BarraNavegacion from './components/NavBar';
import FiltroCategorias from './components/CategoryFilter';
import ListaJuegos from './components/GameList';
import { juegos } from "./data/games.js";

export default function App() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todos');

  const juegosFiltrados = juegos.filter(j =>
    j.titulo.toLowerCase().includes(busqueda.toLowerCase()) &&
    (categoria === 'Todos' || j.genero === categoria)
  );

  return (
    <div className="contenedor-principal">
      <BarraNavegacion setBusqueda={setBusqueda} />

      <div className="zona-contenido">
        <FiltroCategorias categoria={categoria} setCategoria={setCategoria} />
        <ListaJuegos juegos={juegosFiltrados} />
      </div>
    </div>
  );
}