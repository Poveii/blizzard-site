import "./BannerHero.css";

export const diabloInfoList = {
  header: "Retorne à escuridão com o game Diablo IV",
  paragraph: "O retorno de Lilith traz uma era de escuridão e sofrimento",
  cta: "Jogue agora",
  name: "diablo-IV",
};

const hearthStoneInfoList = {
  header: "Novo pacote de expansão de Hearthstone",
  paragraph: "A Horda e a Aliança se encontraram no Vale Alterac para lutar",
  cta: "Reserve agora na pré-venda",
  name: "hearthstone",
};

const worldOfWarcraftInfoList = {
  header: "Desbrave as Terras Sombrias em Shadowlands!",
  paragraph: "O que jaz além do mundo que você conhece?",
  cta: "Reserve agora na pré-venda",
  name: "wow",
};

function BannerHero({ infoGameList, setInfoGameList }) {
  return (
    <section
      id="bannerHero"
      style={{
        backgroundImage: `url(/assets/${infoGameList.name}-banner.png)`,
      }}
    >
      <div className="container">
        <div className="content">
          <h1>{infoGameList.header}</h1>
          <p>{infoGameList.paragraph}</p>
          <a href="">{infoGameList.cta}</a>
        </div>

        <ul>
          <li
            onClick={(e) => {
              const wrapperParent = e.target.parentElement.parentElement;
              wrapperParent.childNodes.forEach(
                (item) => (item.firstChild.style.filter = "")
              );
              e.target.style.filter = "saturate(1)";
              setInfoGameList(diabloInfoList);
            }}
          >
            <img
              src="/assets/diablo-IV-icon.svg"
              alt=""
              style={{ filter: "saturate(1)" }}
            />
          </li>
          <li
            onClick={(e) => {
              const wrapperParent = e.target.parentElement.parentElement;
              wrapperParent.childNodes.forEach(
                (item) => (item.firstChild.style.filter = "")
              );
              e.target.style.filter = "saturate(1)";
              setInfoGameList(hearthStoneInfoList);
            }}
          >
            <img src="/assets/heartstone-icon.svg" alt="" />
          </li>
          <li
            onClick={(e) => {
              const wrapperParent = e.target.parentElement.parentElement;
              wrapperParent.childNodes.forEach(
                (item) => (item.firstChild.style.filter = "")
              );
              e.target.style.filter = "saturate(1)";
              setInfoGameList(worldOfWarcraftInfoList);
            }}
          >
            <img src="/assets/wow-icon.svg" alt="" />
          </li>
          <li>
            <img src="/assets/diablo-I-icon.svg" alt="" />
          </li>
          <li>
            <img src="/assets/starcraft-icon.svg" alt="" />
          </li>
        </ul>
      </div>

      <div className="aside">
        <img
          src={`/assets/${infoGameList.name}-logo.png`}
          alt=""
          id="gameLogo"
        />

        <div>
          <span>Assista ao Trailer</span>
          <div className="video">
            <img src="/assets/player-icon.svg" alt="" />
            <img
              src={`/assets/${infoGameList.name}-animation-cover.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerHero;
