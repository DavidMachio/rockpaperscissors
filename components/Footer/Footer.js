import "./Footer.css";

const template = () => {
  return `
    <p>D_Machio</p>
    `;
};

const Footer = () => {
  document.querySelector("footer").innerHTML = template();
};

export default Footer;
