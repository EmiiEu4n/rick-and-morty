import { useState } from "react";
import { AddPersonaje, TargetGrid } from "./components";

export const ProyectoRYM = () => {
  //Usando el Hook useState (función que permite agregar estado de React a los componentes funcionales)
  //Para evitar el posible error de Javascript por no definir un valor inicial, se le pone un arreglo que tenga 'One Punch' como valor inicial
  const [categories, setPersonaje] = useState([""]);
  // Definimos una función onAddPersonaje que toma un argumento newPersonaje
  const onAddPersonaje = (newPersonaje) => {
    // Si newPersonaje ya está en la lista de categorías, no hacemos nada y salimos de la función
    if (categories.includes(newPersonaje)) return;
    // Si newPersonaje no está en la lista de categorías, la agregamos al principio de la lista
    setPersonaje([newPersonaje]);
  };
  return (
    <>
      {/* Titulo */}
      <h1>Personajes de Rick & Morty</h1>
      {/* // Renderizamos el componente AddPersonaje y le pasamos una función que se
activará cuando se agregue una nueva
 categoría */}
      <AddPersonaje onnewPersonaje={(value) => onAddPersonaje(value)} />
      {/* // Mapeamos las categorías a componentes TargetGrid, cada uno con una clave única y una categoría */}
      {categories.map((category) => (
        <TargetGrid key={category} category={category} />
      ))}
    </>
  );
};
