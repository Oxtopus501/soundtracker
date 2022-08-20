import { action, makeObservable, observable } from "mobx";

import idListArray from "../../utils/idListArray";

export default class CityStore {
  cityId = "";
  cityName = "";

  constructor() {
    makeObservable(this, {
      cityId: observable,
      cityName: observable,
      setCityId: action,
    });
  }

  setCityId(cityId) {
    this.cityId = cityId;
  }

  setCityName(cityId) {
    // eslint-disable-next-line no-console
    //console.log(cityId);
    idListArray.forEach((city) => {
      if (city.id === cityId) {
        this.cityName = city.label;
      }
    });
  }
}
