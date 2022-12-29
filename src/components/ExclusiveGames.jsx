import "./ExclusiveGames.css";

const gamesList = await setGamesList();
async function setGamesList() {
  const request = await fetch(
    "https://api-brchallenges.vercel.app/api/blizzard/games"
  );
  const data = await request.json();

  data.forEach((item, index) => (item.id = index));

  return data;
}

function ExclusiveGames() {
  return (
    <section id="exclusivesGames">
      <div className="header">
        <span>GAMES</span>
        <h2>Jogos exclusivos</h2>

        <div className="platforms">
          <img src="./assets/battlenet-icon.svg" alt="" />
          <img src="./assets/nintendo-switch-icon.svg" alt="" />
          <img src="./assets/xbox-icon.svg" alt="" />
          <img src="./assets/playstation-icon.svg" alt="" />
        </div>
        <p>
          <img src="./assets/blocks-icon.svg" alt="" />
          Ver todos jogos
        </p>
      </div>

      <div>
        <ul>
          {gamesList.map((item) => {
            return (
              <li key={item.id}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(2, 2, 3, 0.4) 2%, rgba(2, 2, 3, 0) 74%), url(${item.image})`,
                  }}
                >
                  <img src={item.logo} alt="" />
                </div>
                <h3>{item.name}</h3>
                <p>{item.category}</p>
              </li>
            );
          })}
          <li id="lastCard">
            <div>
              <img src="./assets/blizzard.svg" alt="" className="logo" />
              <span>
                <img src="./assets/gray-blocks-icon.svg" alt="" />
                Ver todos jogos
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ExclusiveGames;
