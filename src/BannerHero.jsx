import "./BannerHero.css";

function BannerHero() {
  return (
    <section id="bannerHero">
      <div className="container">
        <div className="content">
          <h1>Retorne à escuridão com o game Diablo IV</h1>
          <p>O retorno de Lilith traz uma era de escuridão e sofrimento</p>
          <a href="">Jogue agora</a>
        </div>

        <ul>
          <li>
            <img src="src/assets/diablo-IV-icon.svg" alt="" />
          </li>
          <li>
            <img src="src/assets/heartstone-icon.svg" alt="" />
          </li>
          <li>
            <img src="src/assets/wow-icon.svg" alt="" />
          </li>
          <li>
            <img src="src/assets/diablo-I-icon.svg" alt="" />
          </li>
          <li>
            <img src="src/assets/starcraft-icon.svg" alt="" />
          </li>
        </ul>
      </div>

      <div className="aside">
        <img src="src/assets/diablo-IV-logo.png" alt="" id="gameLogo" />

        <div>
          <span>Assista ao Trailer</span>
          <div className="video">
            <img src="src/assets/player-icon.svg" alt="" />
            <img src="src/assets/diablo-animation-cover.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerHero;
