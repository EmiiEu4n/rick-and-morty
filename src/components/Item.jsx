// Definimos un componente funcional llamado Item que toma title, status e id como props
export const Item = ({name, status, image, gender }) => {
  // Devolvemos el JSX que se renderizará
  return (
  // Creamos un div con la clase card
  <div className="card">
    {/* // Mostramos una imagen con src establecido a status y alt establecido aname */}
    <img src={ image } alt={ name } />
    {/* // Mostramos el título de la imagen */}
    <p>Nombre: { name }</p>
    <p>Estado: { status==="Alive" ? status +" 🟢": status==="Dead" ? status +" 🔴": status+" ⚫"}</p>
    <p>Genero: { gender }</p>
    
  </div>
)
}