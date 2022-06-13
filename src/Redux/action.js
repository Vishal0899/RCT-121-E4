import axios from "axios";
import {
  COMPANIESADDDATAFAILURE,
  COMPANIESADDDATAFETCH,
  COMPANIESADDDATASUCCESS,
  COMPANIESDATAFAILURE,
  COMPANIESDATAFETCH,
  COMPANIESDATASUCCESS,
} from "./actionTypes";

const ComapanyDataFetch = () => ({
  type: COMPANIESDATAFETCH,
});

const ComapanyDataSuccess = (payload) => ({
  type: COMPANIESDATASUCCESS,
  payload,
});

const ComapanyDataFailure = (payload) => ({
  type: COMPANIESDATAFAILURE,
  payload,
});

const ComapanyAddDataFetch = () => ({
  type: COMPANIESADDDATAFETCH,
});

const ComapanyAddDataSuccess = () => ({
  type: COMPANIESADDDATASUCCESS,
});

const ComapanyAddDataFailure = (payload) => ({
  type: COMPANIESADDDATAFAILURE,
  payload,
});

export const fetchCompanies = () => (dispatch) => {
  dispatch(ComapanyDataFetch());
  return axios({
    method: "GET",
    url: "http://localhost:8080/companies",
  })
    .then((res) => dispatch(ComapanyDataSuccess(res.data)))
    .then((err) => dispatch(ComapanyDataFailure(err.data)));
};

export const addCompanies = ({ title }) => (dispatch) => {
    dispatch(ComapanyAddDataFetch());
    return axios({
      method: "POST",
      url: "http://localhost:8080/companies",
      data: {
        title,
      },
    })
      .then((res) => dispatch(ComapanyAddDataSuccess()))
      .then((err) => dispatch(ComapanyAddDataFailure()));
  };
