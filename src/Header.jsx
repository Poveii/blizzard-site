import "./Header.css";

function Header() {
  return (
    <header>
      <img src="src/assets/blizzard.svg" alt="" className="logo" />

      <nav>
        <div className="login">
          <button type="button" className="outlined">
            Criar conta
          </button>
          <button type="button">
            <img src="src/assets/user-icon.svg" alt="" />
            Logar
          </button>
        </div>

        <div className="menu">
          <ul>
            <li>
              Jogos
              <img src="src/assets/arrow-icon.svg" alt="" />
            </li>
            <li>
              Esportes
              <img src="src/assets/arrow-icon.svg" alt="" />
            </li>
            <li>Loja</li>
            <li>Notícias</li>
            <li>Suporte</li>
          </ul>
          <img src="src/assets/menu.svg" alt="" id="menuButton" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
