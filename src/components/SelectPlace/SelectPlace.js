import { observer } from "mobx-react-lite";

import "./select-place.css";
import { cityStore } from "../../store/CityStore/instance";
import idListArray from "../../utils/idListArray";

function SelectPlace() {
  const handleChange = (event) => {
    cityStore.setCityId(event.target.value);
    // eslint-disable-next-line no-console
    //console.log(cityStore.cityId);
  };

  return (
    <select className="select-place" onChange={handleChange}>
      {idListArray.map((city) => (
        <option value={city.id}>{city.label}</option>
      ))}
    </select>
  );
}

export default observer(SelectPlace);
