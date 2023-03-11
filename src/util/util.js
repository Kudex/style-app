export const LOCAL_STORAGE_KEY = "authorisation";

export const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isAgree: false,
  isRemember: false,
};

export const setDataFromLocalStorage = (data) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

export const getDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
};