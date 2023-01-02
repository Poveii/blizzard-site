import "./ExclusiveGames.css";

import { useEffect, useState } from "react";
import getGamesList from "../services/GetGamesList";

function ExclusiveGames() {
  const [gamesList, setGamesList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getGamesList().then((items) => {
      if (mounted) {
        items.forEach((item, index) => (item.id = index));
        setGamesList(items);
      }
    });

    return () => (mounted = false);
  }, []);

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
                    background: `linear-gradient(0deg, rgba(2, 2, 3, 0.4) 2%, rgba(2, 2, 3, 0) 74%), url(${item.image}) no-repeat center/cover`,
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
