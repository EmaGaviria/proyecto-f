const categorias = ['Todos', 'Acción', 'Aventura', 'RPG', 'Estrategia', 'Deporte', 'Carreras'];


export default function CategoryFilter({ categoria, setCategoria }) {
return (
<div className="contenedor-categorias">
{categorias.map(c => (
<button
key={c}
onClick={() => setCategoria(c)}
className={categoria === c ? 'btn-categoria activa' : 'btn-categoria'}
>
{c}
</button>
))}
</div>
);
}