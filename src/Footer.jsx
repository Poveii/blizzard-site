import "./Footer.css";

function createDownloadButtonByOS(userAgent) {
  const array = ["Linux", "Macintosh", "Windows"];

  const actualOS = array.filter((item) => {
    if (userAgent.includes(item)) return item;
  })[0];

  return (
    <a href="">
      <img src={`/assets/${actualOS.toLowerCase()}-icon.svg`} alt="" />
      Baixar para o {actualOS[0].toUpperCase() + actualOS.substring(1)}
    </a>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <img src="/assets/battlenet-logo.svg" alt="" id="battleNetLogo" />
        <h2>Baixe agora o battle.net</h2>
        <ul>
          <li>
            <img src="/assets/listitems-icon.svg" alt="" />
            <p>Seus jogos em um só lugar</p>
          </li>
          <li>
            <img src="/assets/circles-icon.svg" alt="" />
            <p>Conecte-se aos seus amigos</p>
          </li>
          <li>
            <img src="/assets/buy-icon.svg" alt="" />
            <p>Compre jogos e itens digitais</p>
          </li>
        </ul>
        {createDownloadButtonByOS(window.navigator.userAgent)}
        <div>
          <img src="/assets/phone-icon.svg" alt="" />
          <p>
            Também disponível como <span>aplicativo móvel</span>
          </p>
        </div>
      </div>

      <div className="aside">
        <img src="/assets/battlenet-app-mini.png" alt="" id="presentation" />
      </div>
    </footer>
  );
}

export default Footer;
