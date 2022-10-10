import React, { useEffect, useRef } from "react";

import { observer } from "mobx-react-lite";

import ApiStore from "../../store/ApiStore/ApiStore";
import { cityStore } from "../../store/CityStore/instance";
import TrackListStore from "../../store/TrackListStore/TrackListStore";
import SearchButton from "../SearchButton/SearchButton";
import SearchIcon from "../SearchIcon/SearchIcon";
import SelectPlace from "../SelectPlace/SelectPlace";
import TrackTile from "../TrackTile/TrackTile";
import "./Charts.css";

function Charts() {
  const trackListStoreRef = useRef(new TrackListStore());
  const trackListStore = trackListStoreRef.current;

  const handleClickSearch = () => {
    trackListStore.getChart(cityStore.cityId);
    cityStore.setCityName(cityStore.cityId);
  };

  useEffect(() => {
    cityStore.setCityId("ip-city-chart-1526384");
  }, []);

  return (
    <>
      <div className="charts__header">
        <SelectPlace />
        <SearchButton children={<SearchIcon />} onClick={handleClickSearch} />
      </div>
      {/*<TrackTile
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
      />*/}
      {trackListStore.trackList
        ? trackListStore.trackList.map((track, index) => {
            return (
              <TrackTile
                key={track.key}
                title={track.title}
                place={index + 1}
                author={track.subtitle}
                city={cityStore.cityName}
              />
            );
          })
        : null}
    </>
  );
}

export default observer(Charts);
