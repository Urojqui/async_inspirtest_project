const ACCESS_KEY = "Znc86gkmwpAZ4jDt5CeLwbOmijOTuXyr1dDa5FPeL8E"; // Clave de acceso de la API
const API_URL = "https://api.unsplash.com/search/photos"; // URL base de Unsplash

export const fetchPhotos = async (query, page = 1) => {
  try {
    const response = await fetch(
      `${API_URL}?query=${query}&per_page=15&page=${page}&client_id=${ACCESS_KEY}`
    );
    const {results} = await response.json(); //Convertimos la respuesta JSON de la API en un objeto
    return results; //Devuelve el array de resultados (fotos)
  } catch (error) {
    console.error("Error fetching photos:", error);
    return []; //Si hay un error, se devuelve un array vacío
  }
}
