import "./App.css";
import Bookmark from "../components/Bookmark/Bookmark";
import Charts from "../components/Charts/Charts";
import Header from "../components/Header/Header";
import "../layouts/bookmarks.css";
import "../layouts/page-content.css";

function App() {
  return (
    <div className="app">
      <Header />
      <section className="page-content">
        <p className="page-content__text">
          SoundTracker - это интерфейс Shazam API, где можно посмотреть чарты по
          городам мира
        </p>
        <div className="bookmarks">
          <Bookmark className="bookmark" text="Смотреть чарты" />
          <Bookmark className="bookmark" text="Добавленные треки" />
        </div>
        <Charts />
      </section>
    </div>
  );
}

export default App;
