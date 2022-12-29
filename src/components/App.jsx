import BannerHero from "./BannerHero";
import Header from "./Header";
import Footer from "./Footer";
import ExclusiveGames from "./ExclusiveGames";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BannerHero />
        <ExclusiveGames />
      </main>
      <Footer />
    </div>
  );
}

export default App;
