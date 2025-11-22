import { useState } from "react";
import { getResenas, addResenas } from "../data/Resenas.js";



const ListaJuegos = ({ juegos }) => {
  return (
    <div className="grid-juegos">
      {juegos.map((juego) => (
        <TarjetaJuego key={juego._id} juego={juego} />
      ))}
    </div>
  );
};


const TarjetaJuego = ({ juego }) => {
  const [texto, setTexto] = useState("");
  const [resenas, setResenas] = useState(getResenas(juego._id));

  const guardarResena = () => {
    if (texto.trim() === "") return;

    const nueva = {
      contenido: texto,
      fecha: new Date().toLocaleString(),
    };

    addResenas(juego._id, nueva);
    setResenas([...resenas, nueva]);
    setTexto("");
  };

  return (
    <div className="tarjeta-juego">
      {juego.imagenPortada && (
        <img src={juego.imagenPortada} alt={juego.titulo} />
      )}

      <h2>{juego.titulo}</h2>

      <p><strong>Género:</strong> {juego.genero}</p>
      <p><strong>Plataforma:</strong> {juego.plataforma}</p>
      <p><strong>Año:</strong> {juego.añoLanzamiento}</p>
      <p><strong>Desarrollador:</strong> {juego.desarrollador}</p>

      <p className="descripcion">{juego.descripcion}</p>

   
      <div className="resenas">
        <h3>Reseñas:</h3>

        {resenas.length === 0 && <p>Aún no hay reseñas.</p>}

        {resenas.map((r, i) => (
          <div key={i} className="resena">
            <p>{r.contenido}</p>
            <small>{r.fecha}</small>
          </div>
        ))}

        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe tu reseña…"
        ></textarea>

        <button onClick={guardarResena}>Agregar reseña</button>
      </div>
    </div>
  );
};

export default ListaJuegos;