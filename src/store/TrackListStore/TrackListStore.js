import { action, makeObservable, observable, runInAction } from "mobx";

export default class TrackListStore {
  trackList = [];

  constructor() {
    makeObservable(this, {
      trackList: observable,
      getChart: action,
    });
  }

  getChart(listId) {
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
        //console.log(data);
        this.trackList = data.tracks;
      });
  }
}
