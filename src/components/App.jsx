import React from "react";
import BannerHero, { diabloInfoList } from "./BannerHero";
import Header from "./Header";
import Footer from "./Footer";
import ExclusiveGames from "./ExclusiveGames";

function App() {
  const [infoGameList, setInfoGameList] = React.useState(diabloInfoList);

  return (
    <div className="App">
      <Header />
      <main>
        <BannerHero
          infoGameList={infoGameList}
          setInfoGameList={setInfoGameList}
        />
        <ExclusiveGames />
      </main>
      <Footer />
    </div>
  );
}

export default App;
