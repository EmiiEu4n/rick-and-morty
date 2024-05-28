//Definimos uan función asíncrona getPersonaje que toma una categora como argumento
export const getPersonaje = async (personaje) => {
  //Contruimos la URL para la API de Giphy con la categoria y un limite de 10 imagenes
  const url = `https://rickandmortyapi.com/api/character/?name=${personaje}`;
  //Hacemos una peticón a la API de Giphy
  const resp = await fetch(url);
  //Extraemos los datos de la respuesta en formato JSON
  const { results } = await resp.json();

  //Mapeamos los datos a un nuevo arreglo de obejestos con id, titulo y URL de cada imagen
  const gifs = results.map((elements) => ({
    name: elements.name,
    status: elements.status,
    image: elements.image,
    gender: elements.gender
  }));
  //Devolvemos el arreglo de objetos
  return gifs;
};
