
let listaResenas = {};


export const getResenas = (idJuego) => {
  return listaResenas[idJuego] || [];
};


export const addResenas = (idJuego, texto) => {
  if (!listaResenas[idJuego]) {
    listaResenas[idJuego] = [];
  }

  listaResenas[idJuego].push({
    texto,
    fecha: new Date().toLocaleString(),
  });
};

