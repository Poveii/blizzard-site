import "./Header.css";

function Header() {
  return (
    <header>
      <img src="/assets/blizzard.svg" alt="" className="logo" />

      <nav>
        <div className="login">
          <button type="button" className="outlined">
            Criar conta
          </button>
          <button type="button">
            <img src="/assets/user-icon.svg" alt="" />
            Logar
          </button>
        </div>

        <div className="menu">
          <ul>
            <li>
              Jogos
              <img src="/assets/index-icon.svg" alt="" />
            </li>
            <li>
              Esportes
              <img src="/assets/index-icon.svg" alt="" />
            </li>
            <li>Loja</li>
            <li>Notícias</li>
            <li>Suporte</li>
          </ul>
          <img src="/assets/menu.svg" alt="" id="menuButton" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
