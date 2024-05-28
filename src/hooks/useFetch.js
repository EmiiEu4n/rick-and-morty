// Importamos useEffect y useState de React
import { useEffect, useState } from "react";
// Importamos la función getPersonaje de helpers
import { getPersonaje } from "../helpers/getPersonaje";
// Definimos un hook personalizado llamado useFetch que toma una categoría como argumento
export const useFetch = (category) => {
  // Creamos una variable de estado images y una función para actualizarla setImages
  const [images, setImages] = useState([]);
  // Creamos una variable de estado isLoading y una función para actualizarla setIsLoading
  const [isLoading, setIsLoading] = useState(true);
  // Definimos una función asíncrona getImages
  const getImages = async () => {
    // Obtenemos nuevas imágenes de la categoría con la función getPersonaje
    const newImages = await getPersonaje(category);
    // Actualizamos images con las nuevas imágenes
    setImages(newImages);
    // Establecemos isLoading en falso
    setIsLoading(false);
  };

  // Usamos useEffect para llamar a getImages cuando se monta el componente
  useEffect(() => {
    getImages();
  }, []);
  // Devolvemos un objeto con images e isLoading
  return {
    images,
    isLoading,
  };
};
