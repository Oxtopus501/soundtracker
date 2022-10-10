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
        <div className="page-content__text">
          <p className="page-content__paragraph">
            Где бы вы ни были - там всегда будет музыка. А{" "}
            <span className="page-content__colored-text">SoundTracker</span>{" "}
            покажет, какая это будет музыка
          </p>
          <p className="page-content__paragraph">
            Выберите город, чтобы посмотреть, что там шазамили сегодня
          </p>
        </div>
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
