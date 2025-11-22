import React from "react";

const ListaJuegos = ({ juegos }) => {
  return (
    <div className="grid-juegos">
      {juegos.map((juego) => (
        <div key={juego._id} className="tarjeta-juego">

          {juego.imagenPortada && (
            <img src={juego.imagenPortada} alt={juego.titulo} />
          )}

          <h2>{juego.titulo}</h2>

          <p className="categoria"><strong>Género:</strong> {juego.genero}</p>
          <p className="categoria"><strong>Plataforma:</strong> {juego.plataforma}</p>
          <p className="categoria"><strong>Año:</strong> {juego.añoLanzamiento}</p>
          <p className="categoria"><strong>Desarrollador:</strong> {juego.desarrollador}</p>

          <p className="descripcion">{juego.descripcion}</p>

        </div>
      ))}
    </div>
  );
};

export default ListaJuegos;
