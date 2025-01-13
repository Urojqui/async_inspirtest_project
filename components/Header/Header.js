import "./Header.css";

const renderHeader = () => `
  <div class="imgContainer"> <img src="https://cdn.icon-icons.com/icons2/2044/PNG/512/pinterest_logo_icon_124347.png" alt="Pinterest Logo" />
  <h1>Inspirest</h1>
  </div>
  <div class="searchContainer">
    <input type="text" id="searchBox" placeholder="Encuentra ideas sobre moda, cenas, fotografía,etc." />
    <button id="searchButton">Buscar</button>
  </div>
`;

const Header = () => {
  document.querySelector("header").innerHTML = renderHeader();
};

export default Header;
