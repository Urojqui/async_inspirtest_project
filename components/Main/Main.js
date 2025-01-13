import "./Main.css";

const mainContent = () => `
  <div id="infoMessage"></div>
  <div id="imageGallery" class="gallery"></div>
  <div id="extraSuggestions"></div>
  <div id="paginationContainer"></div>
`;

const Main = () => {
  const mainContainer = document.querySelector("main"); 
  mainContainer.innerHTML = mainContent(); 
};

export default Main;