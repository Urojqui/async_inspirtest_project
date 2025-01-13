import "./Header.css";

const renderHeader = () => `
  <div class="imgContainer"> <img src="https://cdn.icon-icons.com/icons2/2044/PNG/512/pinterest_logo_icon_124347.png" alt="Pinterest Logo" />
  <h1>Inspirest</h1>
  </div>
  <div class="searchContainer">
    <input type="text" id="searchBox" placeholder="Encuentra ideas sobre moda, cenas, fotografía,etc." />
    <button id="searchButton">Buscar</button>
    <a href="/perfil" class="user-icon" title="Perfil de usuario">
        <i class="fa-regular fa-user"></i>
    </a>
  </div>
`;

const Header = () => {
  document.querySelector("header").innerHTML = renderHeader();
};

export default Header;
