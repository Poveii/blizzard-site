import BannerHero from "./BannerHero";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <BannerHero></BannerHero>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
