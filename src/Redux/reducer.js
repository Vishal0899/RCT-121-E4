import {
    COMPANIESADDDATAFAILURE,
    COMPANIESADDDATAFETCH,
  COMPANIESADDDATASUCCESS,
  COMPANIESDATAFAILURE,
  COMPANIESDATAFETCH,
  COMPANIESDATASUCCESS,
} from "./actionTypes";

const initState = {
  data: [],
  loading: false,
  error: "",
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case COMPANIESDATAFETCH:
      return {
        ...state,
        loading: true,
      };
    case COMPANIESDATASUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case COMPANIESDATAFAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      case COMPANIESADDDATAFETCH:
      return {
        ...state,
        loading: true,
      };
    case COMPANIESADDDATASUCCESS:
      return {
        ...state,
        loading: false,
      };
    case COMPANIESADDDATAFAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
