import { dataRequest, dataSuccess, dataError } from "./action";
import axios from "axios";

export function fetchData() {
  return (dispatch) => {
    dispatch(dataRequest());

    axios
      .get(`https://soamee-phone-catalog.herokuapp.com/phones`)
      .then((response) => {
        setTimeout(() => dispatch(dataSuccess(response.data.data)), 35 * 60);
      })
      .catch((error) => {
        dispatch(dataError(error));
      });
  };
}

