import SearchButton from "../SearchButton/SearchButton";
import SearchIcon from "../SearchIcon/SearchIcon";
import SelectPlace from "../SelectPlace/SelectPlace";
import TrackTile from "../TrackTile/TrackTile";
import "./Charts.css";

function Charts() {
  function getChart(listId) {
    fetch(
      `https://shazam.p.rapidapi.com/charts/track?locale=en-US&listId=${listId}&pageSize=20&startFrom=0`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "shazam.p.rapidapi.com",
          "x-rapidapi-key":
            "ee2ab30195msh36c4dde5ff52590p100112jsnb138dae00782",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data);
      });
  }

  const handleClickSearch = () => {
    getChart("ip-city-chart-524901");
  };

  return (
    <>
      <div className="charts__header">
        <SelectPlace />
        <SearchButton children={<SearchIcon />} onClick={handleClickSearch} />
      </div>
      <TrackTile
        title={"Scavenger"}
        place={1}
        author={"Killradio"}
        city={"Kolomna"}
      />
      <TrackTile
        title={"Can't Repeat"}
        place={2}
        author={"The Offspring"}
        city={"Kolomna"}
      />
      <TrackTile
        title={"Parallel Universe"}
        place={3}
        author={"Red Hot Chilli Peppers"}
        city={"Kolomna"}
      />
      <TrackTile
        title={"Очень длинное название трека"}
        place={4}
        author={"Очень длинное название музыкальной группы"}
        city={"Kolomna"}
      />
    </>
  );
}

export default Charts;
