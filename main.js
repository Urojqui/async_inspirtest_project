import "./style.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { fetchPhotos } from "./api";

let currentPage = 1; // Página actual
const pageSize = 15; //Resultados por página

//Inicia la aplicación llamando a las funciones
const initializeApp = () => { 
  Header();
  Main();
  Footer();
  loadPhotos("nature", currentPage); //Cargar las imágenes por defecto de la pantalla principal
};

const loadPhotos = async (query, page = 1) => {
  console.log(`Buscando fotos con el término: "${query}" en la página: ${page}`);
  const photos = await fetchPhotos(query, page); //Llama a la función de la api.js
  displayPhotos(photos, query);
};

const displayPhotos = (photos, query) => {
  const gallery = document.querySelector("#imageGallery");
  const message = document.querySelector("#infoMessage");

  if (photos.length === 0) {
    gallery.innerHTML = "";
    message.textContent = "No se encontraron imágenes. ¿Quieres probar con estas opciones?";
    showSuggestions();
  } else {
    message.textContent = "";
    gallery.innerHTML = photos
      .map((photo) => `<img src="${photo.urls.small}" alt="${photo.alt_description}" />`)
      .join("");
    updatePaginationButtons(query);
  }
};

const updatePaginationButtons = (query) => {
  const paginationContainer = document.querySelector("#paginationContainer");
  paginationContainer.innerHTML = `
    <button id="prevPageButton" ${currentPage === 1 ? "disabled" : ""}>Atrás</button>
    <span>Página ${currentPage}</span>
    <button id="nextPageButton">Siguiente</button>
  `;

  document.querySelector("#prevPageButton").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      loadPhotos(query, currentPage);
    }
  });

  document.querySelector("#nextPageButton").addEventListener("click", () => {
    currentPage++;
    loadPhotos(query, currentPage);
  });
};

const showSuggestions = () => {
  const suggestions = ["Moda", "Animales", "Paisajes"];
  const container = document.querySelector("#extraSuggestions");
  container.innerHTML = suggestions
    .map((item) => `<button class="suggestionBtn">${item}</button>`)
    .join("");
  document.querySelectorAll(".suggestionBtn").forEach((btn, i) => {
    btn.addEventListener("click", () => {
      currentPage = 1; //Reiniciar a la primera página
      loadPhotos(suggestions[i]);
    });
  });
};

//Cargamos el DOM 
document.addEventListener("DOMContentLoaded", () => {
  initializeApp();

  const searchButton = document.querySelector("#searchButton");
  const searchBox = document.querySelector("#searchBox");

  searchButton.addEventListener("click", () => {
    const query = searchBox.value.trim(); 
    if (query) {
      currentPage = 1; 
      loadPhotos(query);
      searchBox.value = ""; 
    } else {
      console.log("Por favor ingresa un término de búsqueda.");
    }
  });
})
