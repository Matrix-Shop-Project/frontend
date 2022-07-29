import { GET_CATEGORIES } from "../constants/categoryConstats";
import axios from "axios";

export const getCategories = () => async dispatch => {
  try {
    const response = await axios.get();
    dispatch({ 
      type: GET_CATEGORIES,
      payload: response.data.categories 
    })
  }
  catch (err) { }

}