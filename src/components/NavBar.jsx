export default function NavBar({ setBusqueda }) {
return (
<nav className="barra-nav">
<h1 className="titulo-app">Biblioteca de Juegos</h1>
<input
type="text"
placeholder="Buscar juego..."
onChange={(e) => setBusqueda(e.target.value)}
className="input-busqueda"
/>
</nav>
);
}