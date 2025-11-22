export function obtenerResenas(idJuego) {
  return JSON.parse(localStorage.getItem(`resenas_${idJuego}`)) || [];
}

export function agregarResena(idJuego, nuevaResena) {
  const existentes = obtenerResenas(idJuego);
  existentes.push(nuevaResena);
  localStorage.setItem(`resenas_${idJuego}`, JSON.stringify(existentes));
}
