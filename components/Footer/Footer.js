import "./Footer.css";

const footerDate = () => {
  const currentYear = new Date().getFullYear(); //Obtenemos el año actual para que se actualice automáticamente
  return `<p>© ${currentYear} - Inspirado en Pinterest</p>`;
};

const Footer = () => {
  const footerElement = document.querySelector("footer"); //Seleccionamos el footer creado en el html
  footerElement.innerHTML = footerDate(); //Añadimos la información de la constante footerDate
};

export default Footer;
