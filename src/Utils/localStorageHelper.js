import { Notify } from "notiflix";

const loadDataToLocalStarage = (key, value) => {
    try {
        const stringifyValue = JSON.stringify(value);
        localStorage.setItem(key, stringifyValue);

    } catch (error) {
        Notify.failure(error.message)
        console.error(error.message);
    }
};

const getDataFromLocalStorage = (key) => {
    try {
        const value = localStorage.getItem(key);
        return value === null ? [] : JSON.parse(value)

    } catch (error) {
        Notify.failure(error.message);
        console.error(error.message);
    }
};

export { loadDataToLocalStarage, getDataFromLocalStorage };