// Importamos el componente Item
import { Item } from "./Item";

// Importamos el hook personalizado useFetch
import { useFetch } from "../hooks/useFetch";

// Definimos un componente funcional llamado TargetGrid que toma una categoría como prop
export const TargetGrid = ({ category }) => {

  // Usamos el hook useFetch para obtener las imágenes y el estado de carga
  const { images, isLoading } = useFetch(category);

  // Devolvemos el JSX que se renderizará
  return (

    <>
      {/* // Mostramos la categoría */}
      <h3>Busqueda: {category}</h3>

      {/* // Si está cargando, mostramos un mensaje de carga */}
      {isLoading && <h2>Cargando...</h2>}

      {/* // Creamos un div con la clase card-grid */}
      <div className="card-grid">

        {/* // Mapeamos las imágenes a componentes Item, cada uno con una
            clave única y las propiedades de la imagen */}

        {images.map((image) => (
          <Item key={image.id} {...image} />
        ))}

      </div>

    </>

  );

};