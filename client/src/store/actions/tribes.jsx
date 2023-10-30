import { axiosInstance } from "../../index.js";
import {
  loading,
  fetchTribes,
  fetchTribesError
} from "../slices/tribeSlice";

export function fetchTheTribes() {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const data = await axiosInstance
              .get("/tribes")
              .then((response) => response.data);

            dispatch(fetchTribes(data));
          } catch (error) {
            dispatch(fetchTribesError());
          }
        };
    } 

